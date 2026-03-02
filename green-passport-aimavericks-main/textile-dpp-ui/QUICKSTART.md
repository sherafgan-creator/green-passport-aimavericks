# Quick Start Guide - Green Passport UI

## Installation & Setup

### 1. Install Dependencies
```bash
cd textile-dpp-ui
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Navigation Guide

### Landing Page (/)
- Overview of the platform
- Quick access to all main features
- Benefits and feature highlights

### Manufacturer Dashboard (/dashboard)
- View all product passports
- See sustainability metrics overview
- Create new product passports
- View emission breakdown charts

### Generate Batch (/generate-batch)
- Select a product from the list
- Specify batch size (1-10,000 units)
- Generate serialized products with QR codes
- Download batch as ZIP file

### Consumer Portal (/consumer)
- Enter or scan product serial ID
- View sustainability score and grade
- See detailed emission breakdown
- Compare with category averages
- View trust badges and certifications
- Get end-of-life guidance

## Testing the Application

### Sample Data

The application includes 3 mock products:

1. **Organic Cotton T-Shirt** (PROD-001)
   - Score: 85/100 (Grade A)
   - Carbon: 2.5 kg CO₂e
   - Material: 100% Organic Cotton

2. **Recycled Polyester Jacket** (PROD-002)
   - Score: 78/100 (Grade C)
   - Carbon: 4.8 kg CO₂e
   - Material: 80% Recycled Polyester

3. **Hemp Blend Jeans** (PROD-003)
   - Score: 92/100 (Grade A)
   - Carbon: 3.2 kg CO₂e
   - Material: 60% Hemp, 40% Organic Cotton

### Testing Consumer Portal

Try these serial IDs:
- `PROD-001-001`
- `PROD-002-001`
- `PROD-003-001`

### Creating a Product

1. Go to Dashboard
2. Click "Add New Product"
3. Fill in the form:
   - Product Name: e.g., "Bamboo T-Shirt"
   - Material Type: e.g., "100% Bamboo"
   - Weight: e.g., 200 (grams)
   - Emission data for each lifecycle stage
4. Click "Create Product Passport"

### Generating a Batch

1. Go to Generate Batch
2. Select a product from dropdown
3. Enter batch size (e.g., 50)
4. Click "Generate Batch"
5. View generated serial IDs
6. Click "Download ZIP" to export

## Key Features to Explore

### Dashboard
- ✅ Product statistics cards
- ✅ Emission breakdown chart
- ✅ Product list table
- ✅ Create product modal

### Batch Generation
- ✅ Product selection
- ✅ Batch size validation
- ✅ Large batch warning (>1000)
- ✅ Serial ID generation
- ✅ QR code placeholders

### Consumer Portal
- ✅ Serial ID search
- ✅ Sustainability grade display
- ✅ Key metrics cards
- ✅ Emission pie chart
- ✅ Category comparison bars
- ✅ Trust badges
- ✅ End-of-life guidance
- ✅ Personal impact message

## Design Highlights

### Color Scheme
- **Forest Green**: Primary actions, verified status
- **Leaf Green**: Secondary elements, highlights
- **Earth Yellow**: Warnings, pending states
- **Sand/Beige**: Neutral backgrounds

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, clear hierarchy
- Body: Regular weight, good readability

### Components
- Rounded corners (8-12px)
- Soft shadows for depth
- Smooth transitions (200ms)
- Hover states on interactive elements

## Building for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

The build output will be in the `dist/` directory.

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port.

### Tailwind Styles Not Loading
Make sure `index.css` is imported in `main.tsx` and includes the Tailwind directives.

### TypeScript Errors
Run `npm run build` to check for TypeScript errors before deployment.

## Next Steps

1. **Backend Integration**: Connect to actual API endpoints
2. **QR Code Generation**: Implement real QR code generation library
3. **Authentication**: Add user login and role-based access
4. **Camera Integration**: Add QR code scanning via device camera
5. **Data Persistence**: Connect to database for real data storage

## Support

For issues or questions, refer to the main README.md file.
