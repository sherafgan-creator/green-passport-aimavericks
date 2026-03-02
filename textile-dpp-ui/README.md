# Green Passport - Digital Product Passport UI

A modern, sustainability-focused web application for managing Digital Product Passports in the textile industry with role-based authentication.

## Features

### Authentication System
- **Dual Portal Access**: Separate login/registration for Manufacturers and Consumers
- **Role-Based Access Control**: Protected routes based on user role
- **Persistent Sessions**: User sessions stored in localStorage
- **Secure Authentication Flow**: Mock authentication ready for backend integration

### Manufacturer Portal
- **Dashboard**: Overview of all products with sustainability metrics
- **Product Management**: Create and manage product passports with emission data
- **Batch Generation**: Generate serialized products with unique QR codes
- **Analytics**: Visual breakdown of carbon emissions across lifecycle stages

### Consumer Portal
- **Product Verification**: Scan or enter serial IDs to verify products
- **Sustainability Scores**: View detailed environmental impact metrics
- **Comparison**: Compare products against category averages
- **Trust Badges**: Third-party verification and certification display
- **End-of-Life Guidance**: Recycling and disposal instructions

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation with protected routes
- **Context API** for authentication state management
- **Recharts** for data visualization
- **Lucide React** for icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Navigate to project directory
cd textile-dpp-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## User Flow

### 1. Landing Page
- Introduction to Green Passport platform
- Two main CTAs: "Manufacturer Login" and "Consumer Login"
- Detailed explanation of features for both user types

### 2. Authentication
- **Manufacturer Auth** (`/auth/manufacturer`)
  - Login or Sign Up
  - Access to manufacturer dashboard after authentication
  
- **Consumer Auth** (`/auth/consumer`)
  - Login or Sign Up
  - Access to consumer portal after authentication

### 3. Role-Based Portals

#### Manufacturer Portal (`/manufacturer/*`)
- Dashboard: `/manufacturer/dashboard`
- Generate Batch: `/manufacturer/generate-batch`

#### Consumer Portal (`/consumer/*`)
- Verify Product: `/consumer/portal`

## Testing the Application

### Quick Test Flow

1. **Start the app**: `npm run dev`
2. **Visit**: `http://localhost:5173`
3. **Click**: "Manufacturer Login" or "Consumer Login"
4. **Sign Up** with any email/password (mock authentication)
5. **Access** your role-specific portal

### Test Credentials (Mock)
Since authentication is mocked, you can use any email/password combination:

**Manufacturer:**
- Email: `manufacturer@example.com`
- Password: `password123`

**Consumer:**
- Email: `consumer@example.com`
- Password: `password123`

### Sample Serial IDs for Consumer Portal
- `PROD-001-001` - Organic Cotton T-Shirt
- `PROD-002-001` - Recycled Polyester Jacket
- `PROD-003-001` - Hemp Blend Jeans

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── MainLayout.tsx       # Main layout with sidebar
│   │   └── Sidebar.tsx          # Role-based navigation
│   ├── ProtectedRoute.tsx       # Route protection HOC
│   ├── EmptyState.tsx
│   ├── LoadingSpinner.tsx
│   └── ScoreCard.tsx
├── context/
│   └── AuthContext.tsx          # Authentication state management
├── pages/
│   ├── Auth/
│   │   └── AuthPage.tsx         # Login/Register page
│   ├── LandingPage.tsx          # Public landing page
│   ├── Dashboard.tsx            # Manufacturer dashboard
│   ├── GenerateBatch.tsx        # Batch generation
│   └── ConsumerPortal.tsx       # Consumer verification
├── data/
│   └── mockData.ts              # Mock product data
├── App.tsx                      # Main app with routing
├── main.tsx                     # Entry point
└── index.css                    # Global styles
```

## Authentication Flow

### Context API Implementation
The app uses React Context API for authentication state management:

```typescript
// AuthContext provides:
- user: Current user object (id, email, name, role)
- login(email, password, role): Login function
- register(email, password, name, role): Registration function
- logout(): Logout function
- isAuthenticated: Boolean authentication status
```

### Protected Routes
Routes are protected based on user role:

```typescript
<ProtectedRoute requiredRole="manufacturer">
  <ManufacturerDashboard />
</ProtectedRoute>
```

### Session Persistence
User sessions are stored in localStorage and restored on page reload.

## Color Palette

The application uses a sustainability-focused color scheme:

- **Forest Green** (#16a34a - #14532d): Primary actions and verified status
- **Leaf Green** (#84cc16 - #365314): Secondary elements and highlights
- **Earth Yellow** (#eab308 - #713f12): Warnings and pending states
- **Sand/Beige** (#fafaf9 - #1c1917): Neutral backgrounds and text

## Key Features

### Landing Page
✅ Comprehensive platform introduction
✅ Separate CTAs for manufacturers and consumers
✅ Feature highlights for both user types
✅ Benefits section
✅ Responsive design

### Authentication
✅ Role-based login/registration
✅ Form validation
✅ Loading states
✅ Error handling
✅ Role switching
✅ Session persistence

### Manufacturer Features
✅ Product passport creation
✅ Emission tracking across 5 lifecycle stages
✅ Batch QR code generation
✅ Sustainability scoring
✅ Data visualization

### Consumer Features
✅ Product verification by serial ID
✅ Sustainability grade display (A-E)
✅ Environmental impact breakdown
✅ Category comparison
✅ Trust badges
✅ End-of-life guidance

## Backend Integration

The current implementation uses mock authentication. To integrate with a real backend:

1. **Update AuthContext.tsx**:
   ```typescript
   const login = async (email: string, password: string, role: UserRole) => {
     const response = await fetch('/api/auth/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ email, password, role }),
     });
     const data = await response.json();
     setUser(data.user);
     localStorage.setItem('token', data.token);
   };
   ```

2. **Add API interceptors** for authenticated requests
3. **Implement token refresh** logic
4. **Add proper error handling** for network failures

## Future Enhancements

### Phase 1: Backend Integration
- [ ] Connect to REST API
- [ ] JWT token management
- [ ] Real authentication
- [ ] Password reset functionality

### Phase 2: Enhanced Features
- [ ] Real QR code generation
- [ ] Camera-based QR scanning
- [ ] Email verification
- [ ] Two-factor authentication
- [ ] User profile management

### Phase 3: Advanced Features
- [ ] Product comparison tool
- [ ] Advanced analytics
- [ ] Export reports (PDF, CSV)
- [ ] Multi-language support
- [ ] Dark mode
- [ ] Mobile app (React Native)

## Documentation

- **README.md** - This file
- **QUICKSTART.md** - Quick start guide
- **PROJECT_SUMMARY.md** - Comprehensive project overview
- **DESIGN_SYSTEM.md** - Complete design system documentation
- **DEPLOYMENT.md** - Deployment guide

## License

This project is part of the Green Passport Digital Product Passport platform.

---

**Version**: 2.0.0 (with Authentication)
**Last Updated**: February 2026
