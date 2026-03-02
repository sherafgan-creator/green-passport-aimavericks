# Green Passport Design System

## Visual Identity

### Brand Essence
Green Passport embodies sustainability, trust, and transparency in the textile industry. The design system reflects these values through natural color palettes, clean typography, and intuitive user interfaces.

## Color System

### Primary Palette

#### Forest Green (Primary)
```
forest-50:  #f0fdf4  // Lightest tint
forest-100: #dcfce7
forest-200: #bbf7d0
forest-300: #86efac
forest-400: #4ade80
forest-500: #22c55e  // Base
forest-600: #16a34a  // Primary brand color
forest-700: #15803d
forest-800: #166534
forest-900: #14532d  // Darkest shade
```

**Usage**:
- Primary buttons and CTAs
- Verified status indicators
- Positive metrics and improvements
- Active navigation states
- Success messages

#### Leaf Green (Secondary)
```
leaf-50:  #f7fee7
leaf-100: #ecfccb
leaf-200: #d9f99d
leaf-300: #bef264
leaf-400: #a3e635
leaf-500: #84cc16  // Base
leaf-600: #65a30d  // Secondary brand color
leaf-700: #4d7c0f
leaf-800: #3f6212
leaf-900: #365314
```

**Usage**:
- Secondary buttons
- Accent elements
- Highlights and badges
- Chart colors
- Hover states

#### Earth Yellow (Tertiary)
```
earth-50:  #fefce8
earth-100: #fef9c3
earth-200: #fef08a
earth-300: #fde047
earth-400: #facc15
earth-500: #eab308  // Base
earth-600: #ca8a04  // Warning color
earth-700: #a16207
earth-800: #854d0e
earth-900: #713f12
```

**Usage**:
- Warning messages
- Pending states
- Attention indicators
- Chart accents
- Informational badges

#### Sand/Beige (Neutral)
```
sand-50:  #fafaf9  // Background
sand-100: #f5f5f4  // Card background
sand-200: #e7e5e4  // Borders
sand-300: #d6d3d1  // Input borders
sand-400: #a8a29e
sand-500: #78716c  // Secondary text
sand-600: #57534e  // Body text
sand-700: #44403c  // Headings
sand-800: #292524
sand-900: #1c1917  // Primary text
```

**Usage**:
- Backgrounds and surfaces
- Text colors (hierarchy)
- Borders and dividers
- Disabled states
- Subtle UI elements

### Color Usage Guidelines

#### Accessibility
- All text meets WCAG AA contrast requirements
- Primary text on white: sand-900 (21:1 ratio)
- Secondary text on white: sand-600 (7:1 ratio)
- White text on forest-600: (4.5:1 ratio)

#### Semantic Colors
- **Success**: forest-600
- **Warning**: earth-600
- **Error**: red-600 (not in custom palette, use Tailwind default)
- **Info**: leaf-600

## Typography

### Font Family
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

### Type Scale

#### Headings
```
H1: text-3xl (30px) / font-bold / leading-tight
H2: text-2xl (24px) / font-semibold / leading-snug
H3: text-xl (20px) / font-semibold / leading-normal
H4: text-lg (18px) / font-medium / leading-normal
```

#### Body Text
```
Large:   text-lg (18px) / font-normal / leading-relaxed
Base:    text-base (16px) / font-normal / leading-normal
Small:   text-sm (14px) / font-normal / leading-normal
Tiny:    text-xs (12px) / font-normal / leading-tight
```

#### Font Weights
```
Light:      300
Regular:    400
Medium:     500
Semibold:   600
Bold:       700
```

### Typography Usage

#### Dashboard Headers
```tsx
<h1 className="text-3xl font-bold text-sand-900">
  Manufacturer Dashboard
</h1>
<p className="text-sand-600 mt-1">
  Manage your digital product passports
</p>
```

#### Card Titles
```tsx
<h2 className="text-xl font-semibold text-sand-900 mb-6">
  Product Passports
</h2>
```

#### Metric Labels
```tsx
<p className="text-sm text-sand-600 mb-1">
  Total Products
</p>
<p className="text-3xl font-bold text-sand-900">
  {totalProducts}
</p>
```

## Spacing System

### Base Unit: 4px

```
0:   0px
1:   4px
2:   8px
3:   12px
4:   16px
5:   20px
6:   24px
8:   32px
10:  40px
12:  48px
16:  64px
20:  80px
24:  96px
```

### Common Patterns

#### Component Padding
```
Card:           p-6 (24px)
Button:         px-6 py-2.5 (24px horizontal, 10px vertical)
Input:          px-4 py-2.5 (16px horizontal, 10px vertical)
Modal:          p-6 (24px)
```

#### Section Spacing
```
Between sections:     space-y-8 (32px)
Between cards:        gap-6 (24px)
Between form fields:  space-y-4 (16px)
Between elements:     gap-3 (12px)
```

## Components

### Buttons

#### Primary Button
```tsx
<button className="btn-primary">
  Add New Product
</button>
```

**Styles**:
- Background: forest-600
- Hover: forest-700
- Text: white
- Padding: px-6 py-2.5
- Border radius: rounded-lg (8px)
- Font: font-medium
- Shadow: shadow-sm, hover:shadow-md
- Transition: 200ms

#### Secondary Button
```tsx
<button className="btn-secondary">
  Cancel
</button>
```

**Styles**:
- Background: white
- Hover: sand-50
- Text: forest-700
- Border: border-forest-300
- Padding: px-6 py-2.5
- Border radius: rounded-lg (8px)
- Font: font-medium
- Transition: 200ms

### Cards

#### Standard Card
```tsx
<div className="card">
  {/* Content */}
</div>
```

**Styles**:
- Background: white
- Border: border-sand-100
- Border radius: rounded-xl (12px)
- Padding: p-6 (24px)
- Shadow: shadow-soft (custom)

#### Gradient Card
```tsx
<div className="card bg-gradient-to-br from-forest-600 to-leaf-600 text-white">
  {/* Content */}
</div>
```

### Badges

#### Success Badge
```tsx
<span className="badge badge-success">
  Verified
</span>
```

**Styles**:
- Background: forest-100
- Text: forest-800
- Padding: px-3 py-1
- Border radius: rounded-full
- Font: text-sm font-medium

#### Warning Badge
```tsx
<span className="badge badge-warning">
  Pending
</span>
```

**Styles**:
- Background: earth-100
- Text: earth-800

#### Info Badge
```tsx
<span className="badge badge-info">
  Flagged
</span>
```

**Styles**:
- Background: leaf-100
- Text: leaf-800

### Input Fields

#### Text Input
```tsx
<input
  type="text"
  className="input-field"
  placeholder="Enter product name"
/>
```

**Styles**:
- Width: w-full
- Padding: px-4 py-2.5
- Border: border-sand-300
- Border radius: rounded-lg (8px)
- Focus: ring-2 ring-forest-500
- Transition: 200ms

#### Select Dropdown
```tsx
<select className="input-field">
  <option>Choose option...</option>
</select>
```

### Icons

#### Icon Sizes
```
Small:  w-4 h-4 (16px)
Base:   w-5 h-5 (20px)
Medium: w-6 h-6 (24px)
Large:  w-8 h-8 (32px)
XL:     w-10 h-10 (40px)
```

#### Icon Containers
```tsx
<div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
  <Package className="w-6 h-6 text-forest-600" />
</div>
```

## Shadows

### Custom Shadows

#### Soft Shadow (Cards)
```css
box-shadow: 0 2px 15px -3px rgba(0, 0, 0, 0.07),
            0 10px 20px -2px rgba(0, 0, 0, 0.04);
```

#### Soft Large Shadow (Modals)
```css
box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.1);
```

### Usage
```tsx
<div className="shadow-soft">Card</div>
<div className="shadow-soft-lg">Modal</div>
```

## Border Radius

### Scale
```
rounded-none:   0px
rounded-sm:     2px
rounded:        4px
rounded-md:     6px
rounded-lg:     8px      // Buttons, inputs
rounded-xl:     12px     // Cards
rounded-2xl:    16px     // Large containers
rounded-full:   9999px   // Badges, avatars
```

### Usage Patterns
- Buttons: rounded-lg
- Cards: rounded-xl
- Inputs: rounded-lg
- Badges: rounded-full
- Icon containers: rounded-lg or rounded-xl

## Layout Patterns

### Grid Systems

#### Dashboard Stats
```tsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
  {/* 4 stat cards */}
</div>
```

#### Feature Cards
```tsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* 3 feature cards */}
</div>
```

#### Two Column Layout
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* 2 sections */}
</div>
```

### Responsive Breakpoints
```
sm:  640px
md:  768px
lg:  1024px
xl:  1280px
2xl: 1536px
```

## Animation & Transitions

### Transition Duration
```
Default: 200ms
Slow:    300ms
Fast:    150ms
```

### Common Transitions
```tsx
// Hover states
className="transition-colors duration-200"

// Shadow changes
className="transition-shadow duration-200"

// All properties
className="transition-all duration-200"
```

### Hover Effects

#### Buttons
```tsx
className="hover:bg-forest-700 hover:shadow-md"
```

#### Cards
```tsx
className="hover:shadow-soft-lg transition-shadow duration-300"
```

#### Links
```tsx
className="hover:text-forest-700 transition-colors"
```

## Data Visualization

### Chart Colors

#### Emission Breakdown (Stacked Bar)
```
Manufacturing:  #16a34a (forest-600)
Packaging:      #84cc16 (leaf-500)
Transport:      #eab308 (earth-500)
Usage:          #a3e635 (leaf-400)
End of Life:    #65a30d (leaf-600)
```

#### Pie Chart
```
Same as above, using color property from data
```

### Chart Styling
```tsx
<CartesianGrid strokeDasharray="3 3" stroke="#e7e5e4" />
<XAxis stroke="#78716c" />
<YAxis stroke="#78716c" />
<Tooltip
  contentStyle={{
    backgroundColor: '#ffffff',
    border: '1px solid #e7e5e4',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }}
/>
```

## Iconography

### Icon Library: Lucide React

### Commonly Used Icons
```
Navigation:
- LayoutDashboard
- Package
- QrCode
- Leaf

Actions:
- Plus
- Download
- Search
- AlertCircle

Metrics:
- TrendingUp
- TrendingDown
- CheckCircle
- Shield

Environment:
- Leaf
- Droplet
- Recycle
- Globe
```

### Icon Usage
```tsx
import { Package } from 'lucide-react';

<Package className="w-6 h-6 text-forest-600" />
```

## Accessibility

### Focus States
```tsx
className="focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
```

### Color Contrast
- All text meets WCAG AA standards
- Interactive elements have clear focus indicators
- Disabled states use reduced opacity

### Semantic HTML
- Use proper heading hierarchy
- Label all form inputs
- Use semantic elements (nav, main, aside, etc.)

## Best Practices

### Do's
✅ Use consistent spacing (multiples of 4px)
✅ Maintain color hierarchy (primary, secondary, tertiary)
✅ Apply hover states to interactive elements
✅ Use semantic color names (forest, leaf, earth)
✅ Keep border radius consistent per component type
✅ Use custom shadows for depth
✅ Maintain typography scale

### Don'ts
❌ Mix different border radius sizes on similar components
❌ Use arbitrary spacing values
❌ Ignore hover and focus states
❌ Use colors outside the defined palette
❌ Forget responsive breakpoints
❌ Overcomplicate component variants
❌ Ignore accessibility guidelines

## Component Examples

### Stat Card
```tsx
<div className="card">
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-sand-600 mb-1">Total Products</p>
      <p className="text-3xl font-bold text-sand-900">24</p>
    </div>
    <div className="w-12 h-12 bg-forest-100 rounded-lg flex items-center justify-center">
      <Package className="w-6 h-6 text-forest-600" />
    </div>
  </div>
</div>
```

### Form Group
```tsx
<div>
  <label className="block text-sm font-medium text-sand-700 mb-2">
    Product Name
  </label>
  <input
    type="text"
    className="input-field"
    placeholder="Enter product name"
  />
</div>
```

### Alert Message
```tsx
<div className="flex items-start gap-3 text-earth-700 bg-earth-50 p-4 rounded-lg">
  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
  <p className="text-sm">
    Large batch size detected. Generation may take longer.
  </p>
</div>
```

---

**Design System Version**: 1.0.0
**Last Updated**: February 2026
**Maintained by**: Green Passport Team
