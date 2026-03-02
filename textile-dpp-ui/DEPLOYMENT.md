# Deployment Guide - Green Passport UI

## Pre-Deployment Checklist

- [ ] All TypeScript errors resolved
- [ ] Build completes successfully
- [ ] All routes tested manually
- [ ] Responsive design verified on multiple devices
- [ ] Browser compatibility tested
- [ ] Performance metrics acceptable
- [ ] Environment variables configured (if any)

## Build Process

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Build
```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle all modules with Vite
- Process CSS with Tailwind and PostCSS
- Optimize assets
- Generate production-ready files in `dist/`

### 3. Preview Build Locally
```bash
npm run preview
```

Access at: http://localhost:4173

## Deployment Options

### Option 1: Vercel (Recommended)

#### Why Vercel?
- Zero configuration for Vite projects
- Automatic HTTPS
- Global CDN
- Instant deployments
- Free tier available

#### Steps

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

4. **Production Deployment**
```bash
vercel --prod
```

#### Configuration (vercel.json)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Option 2: Netlify

#### Why Netlify?
- Simple drag-and-drop deployment
- Automatic HTTPS
- Form handling
- Serverless functions support
- Free tier available

#### Steps

1. **Build the Project**
```bash
npm run build
```

2. **Deploy via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

#### Or Deploy via Web UI
1. Go to https://app.netlify.com
2. Drag and drop the `dist` folder
3. Configure custom domain (optional)

#### Configuration (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: AWS S3 + CloudFront

#### Why AWS?
- Highly scalable
- Low cost for static hosting
- Integration with other AWS services
- Global CDN with CloudFront

#### Steps

1. **Create S3 Bucket**
```bash
aws s3 mb s3://green-passport-ui
```

2. **Configure Bucket for Static Hosting**
```bash
aws s3 website s3://green-passport-ui \
  --index-document index.html \
  --error-document index.html
```

3. **Build and Upload**
```bash
npm run build
aws s3 sync dist/ s3://green-passport-ui --delete
```

4. **Set Bucket Policy**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::green-passport-ui/*"
    }
  ]
}
```

5. **Create CloudFront Distribution**
- Origin: S3 bucket website endpoint
- Default root object: index.html
- Error pages: 404 → /index.html (for SPA routing)

### Option 4: GitHub Pages

#### Why GitHub Pages?
- Free hosting for public repositories
- Automatic deployment from GitHub
- Custom domain support
- HTTPS included

#### Steps

1. **Install gh-pages**
```bash
npm install -D gh-pages
```

2. **Add Deploy Script to package.json**
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.ts**
```typescript
export default defineConfig({
  base: '/textile-dpp-ui/', // Replace with your repo name
  plugins: [react()],
})
```

4. **Deploy**
```bash
npm run deploy
```

5. **Configure GitHub Pages**
- Go to repository Settings → Pages
- Source: gh-pages branch
- Access at: https://username.github.io/textile-dpp-ui/

### Option 5: Docker Container

#### Why Docker?
- Consistent environment
- Easy scaling
- Works with any cloud provider
- Kubernetes compatible

#### Dockerfile
```dockerfile
# Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

#### nginx.conf
```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### Build and Run
```bash
# Build image
docker build -t green-passport-ui .

# Run container
docker run -p 8080:80 green-passport-ui

# Access at http://localhost:8080
```

#### Deploy to AWS ECS
```bash
# Tag image
docker tag green-passport-ui:latest <account-id>.dkr.ecr.<region>.amazonaws.com/green-passport-ui:latest

# Push to ECR
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/green-passport-ui:latest

# Deploy to ECS (use AWS Console or CLI)
```

## Environment Configuration

### Development
```bash
# .env.development
VITE_API_URL=http://localhost:3000
VITE_ENV=development
```

### Production
```bash
# .env.production
VITE_API_URL=https://api.greenpassport.com
VITE_ENV=production
```

### Access in Code
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## Performance Optimization

### 1. Code Splitting
```typescript
// Lazy load routes
const Dashboard = lazy(() => import('./pages/Dashboard'));
const GenerateBatch = lazy(() => import('./pages/GenerateBatch'));
const ConsumerPortal = lazy(() => import('./pages/ConsumerPortal'));
```

### 2. Image Optimization
- Use WebP format
- Implement lazy loading
- Compress images before upload

### 3. Bundle Analysis
```bash
npm install -D rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
});
```

### 4. Caching Strategy
```nginx
# Cache static assets for 1 year
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Don't cache HTML
location ~* \.html$ {
    expires -1;
    add_header Cache-Control "no-cache, no-store, must-revalidate";
}
```

## Monitoring & Analytics

### 1. Google Analytics
```html
<!-- Add to index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. Error Tracking (Sentry)
```bash
npm install @sentry/react
```

```typescript
// main.tsx
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: import.meta.env.MODE,
});
```

### 3. Performance Monitoring
```typescript
// Use Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

## Security Considerations

### 1. Content Security Policy
```html
<!-- Add to index.html -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com;">
```

### 2. HTTPS Only
- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use HSTS header

### 3. Environment Variables
- Never commit .env files
- Use platform-specific secrets management
- Rotate API keys regularly

## CI/CD Pipeline

### GitHub Actions Example
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Rollback Strategy

### Vercel
```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback <deployment-url>
```

### AWS S3
```bash
# Enable versioning on bucket
aws s3api put-bucket-versioning \
  --bucket green-passport-ui \
  --versioning-configuration Status=Enabled

# Restore previous version
aws s3api list-object-versions --bucket green-passport-ui
aws s3api copy-object \
  --copy-source green-passport-ui/index.html?versionId=<version-id> \
  --bucket green-passport-ui \
  --key index.html
```

### Docker
```bash
# Tag previous version as latest
docker tag green-passport-ui:v1.0.0 green-passport-ui:latest

# Redeploy
docker push green-passport-ui:latest
```

## Post-Deployment Checklist

- [ ] All routes accessible
- [ ] No console errors
- [ ] Images loading correctly
- [ ] Forms submitting properly
- [ ] Navigation working
- [ ] Responsive design intact
- [ ] Performance metrics acceptable
- [ ] Analytics tracking
- [ ] Error monitoring active
- [ ] SSL certificate valid
- [ ] Custom domain configured (if applicable)

## Troubleshooting

### Issue: 404 on Refresh
**Solution**: Configure server to serve index.html for all routes (SPA routing)

### Issue: Assets Not Loading
**Solution**: Check base path in vite.config.ts matches deployment path

### Issue: Environment Variables Not Working
**Solution**: Ensure variables are prefixed with `VITE_`

### Issue: Build Size Too Large
**Solution**: Implement code splitting and lazy loading

### Issue: Slow Initial Load
**Solution**: Enable compression (gzip/brotli) on server

## Support & Maintenance

### Regular Tasks
- Update dependencies monthly
- Review security advisories
- Monitor error logs
- Check performance metrics
- Backup deployment configurations

### Emergency Contacts
- DevOps Team: devops@greenpassport.com
- Platform Support: support@vercel.com (or relevant platform)

---

**Last Updated**: February 2026
**Deployment Version**: 1.0.0
