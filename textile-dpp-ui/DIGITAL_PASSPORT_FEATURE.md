# Digital Product Passport - Feature Documentation

## Overview

The Digital Product Passport is the centerpiece of the Green Passport platform - a stunning, interactive, and comprehensive view of a product's sustainability credentials. It's designed to be eye-catching, highly readable, and provide an exceptional user experience.

---

## Design Philosophy

### Visual Identity
- **Passport-like Design**: Mimics a real passport with a cover page and multiple sections
- **Premium Feel**: Gradient backgrounds, soft shadows, and smooth transitions
- **Color-Coded Information**: Uses the sustainability color palette consistently
- **Interactive Tabs**: Four main sections for organized information display
- **Mobile-First**: Fully responsive design that works beautifully on all devices

### UX Principles
- **Progressive Disclosure**: Information organized in tabs to avoid overwhelming users
- **Visual Hierarchy**: Important information prominently displayed
- **Scannable Content**: Easy-to-read cards and sections
- **Data Visualization**: Charts and graphs for quick understanding
- **Trust Indicators**: Verification badges and certification displays

---

## Features

### 1. Passport Cover (Hero Section)

**Design Elements:**
- Gradient background (forest-600 to leaf-800)
- Decorative circular patterns for visual interest
- Large sustainability grade badge (A-E)
- Product name and serial number
- Manufacturer information
- "Verified & Approved" badge

**Visual Impact:**
- Eye-catching gradient with white decorative elements
- Large, bold typography
- Prominent grade display in white card
- Professional and trustworthy appearance

### 2. Navigation Tabs

Four main sections accessible via tabs:

#### Overview Tab
- **Key Metrics Cards**: Carbon footprint, water usage, circularity, social impact
- **Product Details**: Category, material, weight, dates
- **Sustainability Radar Chart**: 5-point radar showing metrics

#### Journey Tab
- **Lifecycle Timeline**: Visual journey through 5 stages
  1. Manufacturing (Factory icon)
  2. Packaging (Package icon)
  3. Transport (Truck icon)
  4. Usage (Home icon)
  5. End of Life (Trash icon)
- **Stage Details**: Location, energy source, materials, distance
- **Carbon Impact**: CO₂ emissions for each stage
- **Color-Coded Cards**: Different colors for each stage

#### Impact Tab
- **Carbon Breakdown Pie Chart**: Visual distribution of emissions
- **Environmental Comparison Bars**: Product vs category average
- **Your Impact Card**: Personalized savings calculation
- **Equivalency Metrics**: Car travel, trees planted, water saved

#### Certifications Tab
- **Trust Badges**: Third-party verified, organic certified, fair trade
- **Supporting Documents**: Downloadable certificates and reports
- **Auditor Approval**: Verification details with auditor name and date

### 3. Interactive Elements

**Buttons & Actions:**
- Back to Search
- Share passport
- Download passport
- View recycling guide
- Download documents

**Hover Effects:**
- Cards lift on hover
- Buttons change color
- Smooth transitions (200ms)

### 4. Data Visualizations

**Charts Used:**
- **Pie Chart**: Emission breakdown by lifecycle stage
- **Radar Chart**: 5-point sustainability metrics
- **Progress Bars**: Comparison vs category average
- **Timeline**: Vertical lifecycle journey

---

## Technical Implementation

### Route
```
/passport/:serialId
```

### Access Control
- **Public Route**: No authentication required
- **Approval Check**: Only shows approved products
- **Error Handling**: Graceful fallback for invalid/pending products

### Component Structure
```typescript
DigitalPassport
├── Header (sticky)
│   ├── Back button
│   └── Share/Download actions
├── Passport Cover
│   ├── Decorative background
│   ├── Grade badge
│   └── Product info
├── Navigation Tabs
│   ├── Overview
│   ├── Journey
│   ├── Impact
│   └── Certifications
└── Footer Actions
    └── Recycling guide CTA
```

### State Management
```typescript
const [activeTab, setActiveTab] = useState<'overview' | 'journey' | 'impact' | 'certifications'>('overview');
```

---

## Visual Design Details

### Color Scheme

**Passport Cover:**
- Background: `from-forest-600 via-forest-700 to-leaf-800`
- Decorative elements: White with 10% opacity
- Text: White
- Grade badge: White card with forest-600 text

**Tab Sections:**
- Active tab: `bg-forest-600 text-white`
- Inactive tab: `text-sand-700 hover:bg-sand-100`

**Lifecycle Stages:**
- Manufacturing: Forest green (#16a34a)
- Packaging: Leaf green (#84cc16)
- Transport: Earth yellow (#eab308)
- Usage: Forest green (#22c55e)
- End of Life: Leaf green (#65a30d)

### Typography

**Headings:**
- Cover title: `text-3xl md:text-4xl font-bold`
- Section titles: `text-2xl font-bold`
- Card titles: `text-xl font-bold`

**Body Text:**
- Primary: `text-sand-900`
- Secondary: `text-sand-700`
- Tertiary: `text-sand-600`

### Spacing & Layout

**Container:**
- Max width: `max-w-7xl`
- Padding: `px-4 py-8`

**Cards:**
- Padding: `p-6` or `p-8`
- Border radius: `rounded-xl`
- Shadow: `shadow-soft`

**Gaps:**
- Section spacing: `space-y-8`
- Grid gaps: `gap-6` or `gap-8`

---

## User Flow

### From Consumer Portal

1. User enters serial ID in Consumer Portal
2. Clicks "Verify Product"
3. System validates product exists and is approved
4. Navigates to `/passport/:serialId`
5. Digital Passport loads with cover page
6. User explores tabs for detailed information

### Direct Access

1. User scans QR code (future feature)
2. QR code contains URL: `/passport/PROD-001-001`
3. Digital Passport loads directly
4. No authentication required

---

## Content Sections

### Overview Tab Content

**Key Metrics (4 cards):**
1. Carbon Footprint: Total kg CO₂, % below average
2. Water Usage: Liters, consumption level
3. Circularity: Percentage, recyclability
4. Social Impact: Grade, certification status

**Product Details:**
- Category
- Material Type
- Weight
- Created Date
- Approved Date

**Sustainability Radar:**
- Carbon score
- Water score
- Materials score
- Circularity score
- Social score

### Journey Tab Content

**5 Lifecycle Stages:**

Each stage includes:
- Icon and color-coded badge
- Stage name
- CO₂ emissions
- Description
- Location/details
- Specific metrics

### Impact Tab Content

**Carbon Breakdown:**
- Pie chart with percentages
- Legend with values
- Total emissions

**Environmental Comparison:**
- 4 comparison bars
- Percentage better than average
- Actual values vs average

**Your Impact:**
- Total CO₂ saved
- Equivalency metrics:
  - Car travel distance
  - Trees planted equivalent
  - Water saved

### Certifications Tab Content

**Trust Badges (3 cards):**
1. Third-Party Verified
2. Organic Certified (GOTS)
3. Fair Trade Certified

**Supporting Documents:**
- Document list with icons
- Upload dates
- Download buttons

**Auditor Approval:**
- Approved by (email)
- Approval date
- Verification statement

---

## Responsive Design

### Mobile (< 768px)
- Single column layout
- Stacked cards
- Horizontal scrolling tabs
- Smaller charts
- Touch-friendly buttons

### Tablet (768px - 1024px)
- 2-column grids
- Larger charts
- Side-by-side comparisons

### Desktop (> 1024px)
- 3-4 column grids
- Full-width charts
- Optimal spacing
- Hover effects

---

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- Button elements for actions
- Nav element for tabs
- Article/section structure

### Color Contrast
- WCAG AA compliant
- Text on backgrounds: 4.5:1 minimum
- Interactive elements clearly visible

### Keyboard Navigation
- Tab through all interactive elements
- Enter to activate buttons
- Arrow keys for tab navigation (future)

### Screen Readers
- Alt text for icons
- Descriptive button labels
- ARIA labels where needed

---

## Performance Optimizations

### Code Splitting
- Lazy load charts library
- Conditional rendering of tabs
- Only active tab content rendered

### Image Optimization
- SVG icons (scalable, small size)
- No heavy images
- Gradient backgrounds (CSS)

### Animation Performance
- CSS transitions (GPU accelerated)
- Transform and opacity only
- Smooth 60fps animations

---

## Future Enhancements

### Phase 1
- [ ] QR code display on passport
- [ ] Print-friendly version
- [ ] PDF export
- [ ] Social media sharing with preview

### Phase 2
- [ ] Interactive 3D product view
- [ ] Video testimonials
- [ ] Supply chain map
- [ ] Real-time carbon calculator

### Phase 3
- [ ] AR product visualization
- [ ] Blockchain verification
- [ ] Multi-language support
- [ ] Personalized recommendations

---

## Testing Checklist

### Visual Testing
- [ ] Cover page displays correctly
- [ ] All tabs switch smoothly
- [ ] Charts render properly
- [ ] Colors match design system
- [ ] Responsive on all devices

### Functional Testing
- [ ] Navigation works
- [ ] Back button returns to search
- [ ] Share/download buttons (placeholder)
- [ ] Tab switching
- [ ] Error states display

### Data Testing
- [ ] Approved products show
- [ ] Pending products blocked
- [ ] Invalid IDs show error
- [ ] All data fields populate
- [ ] Calculations correct

### Performance Testing
- [ ] Page loads < 2 seconds
- [ ] Smooth animations
- [ ] No layout shifts
- [ ] Charts render quickly

---

## Sample Serial IDs for Testing

```
PROD-001-001 - Organic Cotton T-Shirt (Approved, Grade A)
PROD-002-001 - Recycled Polyester Jacket (Pending, Grade C)
PROD-003-001 - Hemp Blend Jeans (Approved, Grade A)
```

---

## Code Examples

### Navigate to Passport
```typescript
navigate(`/passport/${serialId}`);
```

### Check Product Status
```typescript
if (product.verificationStatus !== 'approved') {
  // Show pending/error message
  return <PendingMessage />;
}
```

### Tab Switching
```typescript
<button
  onClick={() => setActiveTab('overview')}
  className={activeTab === 'overview' ? 'active' : ''}
>
  Overview
</button>
```

---

**Version**: 4.0.0
**Last Updated**: February 2026
**Status**: ✅ Production Ready
