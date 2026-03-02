# Navigation Guide - Green Passport

This document outlines all navigation paths and how users can move between different pages in the application.

---

## Navigation Overview

### Public Pages
- Landing Page (`/`)
- Consumer Portal (`/consumer`)
- Digital Passport (`/passport/:serialId`)
- Auth Pages (`/auth/manufacturer`, `/auth/auditor`)

### Protected Pages (Require Login)
- Manufacturer Dashboard (`/manufacturer/dashboard`)
- Generate Batch (`/manufacturer/generate-batch`)
- Auditor Dashboard (`/auditor/dashboard`)

---

## Navigation Flows

### 1. Landing Page (`/`)

**Available Actions:**
- Click "Manufacturer Login" → Navigate to `/auth/manufacturer`
- Click "Auditor Login" → Navigate to `/auth/auditor`
- Click "Consumer Portal" → Navigate to `/consumer`
- Click "Manufacturer Sign Up" (bottom CTA) → Navigate to `/auth/manufacturer`
- Click "Auditor Sign Up" (bottom CTA) → Navigate to `/auth/auditor`
- Click "Consumer Portal" (bottom CTA) → Navigate to `/consumer`

**Navigation Elements:**
- Multiple CTA buttons throughout the page
- Footer with branding

**Can Navigate To:**
- ✅ Manufacturer Auth
- ✅ Auditor Auth
- ✅ Consumer Portal

---

### 2. Authentication Pages (`/auth/manufacturer`, `/auth/auditor`)

**Available Actions:**
- Click "Back to Home" button → Navigate to `/`
- Toggle between Login/Sign Up → Stay on same page
- Click "Switch to Auditor/Manufacturer" → Navigate to other auth page
- Submit login form → Navigate to respective dashboard
- Submit signup form → Navigate to respective dashboard

**Navigation Elements:**
- Back button (top left)
- Role switcher link
- Login/Signup toggle

**Can Navigate To:**
- ✅ Landing Page (via back button)
- ✅ Other role auth page (via switcher)
- ✅ Manufacturer Dashboard (after manufacturer login)
- ✅ Auditor Dashboard (after auditor login)

---

### 3. Consumer Portal (`/consumer`)

**Available Actions:**
- Click "Back to Home" button → Navigate to `/`
- Enter serial ID and click "Verify Product" → Navigate to `/passport/:serialId`
- Click sample product cards → Navigate to respective passport

**Navigation Elements:**
- Back to Home button (top)
- Search form
- Sample product cards (quick access)

**Can Navigate To:**
- ✅ Landing Page (via back button)
- ✅ Digital Passport (via search or sample cards)

---

### 4. Digital Passport (`/passport/:serialId`)

**Available Actions:**
- Click "Back to Search" button → Navigate to `/consumer`
- Click Share button → (Placeholder - future feature)
- Click Download button → (Placeholder - future feature)
- Switch between tabs (Overview, Journey, Impact, Certifications) → Stay on same page
- Click "View Recycling Guide" → (Placeholder - future feature)

**Navigation Elements:**
- Back to Search button (sticky header)
- Share/Download buttons (sticky header)
- Tab navigation
- Footer CTA button

**Can Navigate To:**
- ✅ Consumer Portal (via back button)

**Special Cases:**
- If product not found → Shows error with "Back to Search" button
- If product pending approval → Shows pending message with "Back to Search" button

---

### 5. Manufacturer Dashboard (`/manufacturer/dashboard`)

**Available Actions:**
- Click "Add New Product" → Opens modal (stays on page)
- Click sidebar navigation items → Navigate to other manufacturer pages
- Click "Back to Home" in sidebar → Navigate to `/`
- Click "Logout" in sidebar → Logout and navigate to `/`
- Click logo/header in sidebar → Navigate to `/`

**Navigation Elements:**
- Sidebar with navigation menu
- Logo (clickable to home)
- Back to Home button (sidebar)
- Logout button (sidebar)

**Can Navigate To:**
- ✅ Generate Batch (via sidebar)
- ✅ Landing Page (via sidebar home button or logo)
- ✅ Landing Page (via logout)

---

### 6. Generate Batch (`/manufacturer/generate-batch`)

**Available Actions:**
- Click sidebar navigation items → Navigate to other manufacturer pages
- Click "Back to Home" in sidebar → Navigate to `/`
- Click "Logout" in sidebar → Logout and navigate to `/`
- Click logo/header in sidebar → Navigate to `/`

**Navigation Elements:**
- Sidebar with navigation menu
- Logo (clickable to home)
- Back to Home button (sidebar)
- Logout button (sidebar)

**Can Navigate To:**
- ✅ Manufacturer Dashboard (via sidebar)
- ✅ Landing Page (via sidebar home button or logo)
- ✅ Landing Page (via logout)

---

### 7. Auditor Dashboard (`/auditor/dashboard`)

**Available Actions:**
- Click sidebar navigation items → Navigate to other auditor pages (currently only dashboard)
- Click "Back to Home" in sidebar → Navigate to `/`
- Click "Logout" in sidebar → Logout and navigate to `/`
- Click logo/header in sidebar → Navigate to `/`
- Click "Review" on products → Opens modal (stays on page)

**Navigation Elements:**
- Sidebar with navigation menu
- Logo (clickable to home)
- Back to Home button (sidebar)
- Logout button (sidebar)

**Can Navigate To:**
- ✅ Landing Page (via sidebar home button or logo)
- ✅ Landing Page (via logout)

---

## Navigation Matrix

| From Page | To Page | Method |
|-----------|---------|--------|
| Landing | Manufacturer Auth | Button click |
| Landing | Auditor Auth | Button click |
| Landing | Consumer Portal | Button click |
| Manufacturer Auth | Landing | Back button |
| Manufacturer Auth | Auditor Auth | Role switcher |
| Manufacturer Auth | Manufacturer Dashboard | Login/Signup |
| Auditor Auth | Landing | Back button |
| Auditor Auth | Manufacturer Auth | Role switcher |
| Auditor Auth | Auditor Dashboard | Login/Signup |
| Consumer Portal | Landing | Back button |
| Consumer Portal | Digital Passport | Search/Sample cards |
| Digital Passport | Consumer Portal | Back button |
| Manufacturer Dashboard | Landing | Sidebar home/logout |
| Manufacturer Dashboard | Generate Batch | Sidebar nav |
| Generate Batch | Landing | Sidebar home/logout |
| Generate Batch | Manufacturer Dashboard | Sidebar nav |
| Auditor Dashboard | Landing | Sidebar home/logout |

---

## Protected Route Behavior

### Authentication Check
- If user tries to access protected route without login → Redirect to landing page
- If manufacturer tries to access auditor route → Redirect to manufacturer dashboard
- If auditor tries to access manufacturer route → Redirect to auditor dashboard

### Session Persistence
- User session stored in localStorage
- Remains logged in after page refresh
- Logout clears session and redirects to landing page

---

## Navigation Best Practices

### For Users

**Manufacturers:**
1. Start at Landing Page
2. Click "Manufacturer Login"
3. Login or Sign Up
4. Access Dashboard (default landing)
5. Use sidebar to navigate between pages
6. Use "Back to Home" or "Logout" to exit

**Auditors:**
1. Start at Landing Page
2. Click "Auditor Login"
3. Login or Sign Up
4. Access Review Dashboard
5. Use "Back to Home" or "Logout" to exit

**Consumers:**
1. Start at Landing Page
2. Click "Consumer Portal" (no login required)
3. Search for product by serial ID
4. View Digital Passport
5. Use "Back to Search" to return
6. Use "Back to Home" to exit

---

## Keyboard Navigation

### Supported
- Tab through interactive elements
- Enter to submit forms
- Enter to activate buttons
- Escape to close modals (Dashboard, Auditor)

### Future Enhancements
- Arrow keys for tab navigation in Digital Passport
- Keyboard shortcuts for common actions
- Focus management improvements

---

## Mobile Navigation

### Responsive Behavior
- All navigation buttons are touch-friendly (min 44px)
- Sidebar collapses on mobile (future: hamburger menu)
- Back buttons prominently displayed
- Sample product cards stack vertically

### Mobile-Specific Considerations
- Consumer Portal optimized for QR scanning
- Digital Passport tabs scroll horizontally
- Forms are single-column on mobile

---

## Navigation Improvements Made

### Version 4.1.0 Changes

1. **Consumer Portal**
   - ✅ Added "Back to Home" button
   - ✅ Improved layout with proper container

2. **Sidebar (Manufacturer/Auditor)**
   - ✅ Made logo clickable to navigate home
   - ✅ Added "Back to Home" button
   - ✅ Separated Home and Logout buttons
   - ✅ Improved visual hierarchy

3. **All Pages**
   - ✅ Verified all pages have exit routes
   - ✅ No dead-end pages
   - ✅ Clear navigation paths

---

## Testing Navigation

### Manual Test Checklist

**Landing Page:**
- [ ] All CTA buttons work
- [ ] Footer links work
- [ ] Scroll behavior smooth

**Auth Pages:**
- [ ] Back button returns to landing
- [ ] Role switcher works
- [ ] Login redirects correctly
- [ ] Signup redirects correctly

**Consumer Portal:**
- [ ] Back to Home button works
- [ ] Search navigates to passport
- [ ] Sample cards navigate to passport

**Digital Passport:**
- [ ] Back to Search button works
- [ ] Tab switching works
- [ ] Error states show back button
- [ ] Pending states show back button

**Manufacturer Dashboard:**
- [ ] Sidebar navigation works
- [ ] Logo navigates to home
- [ ] Back to Home button works
- [ ] Logout works and redirects

**Generate Batch:**
- [ ] Sidebar navigation works
- [ ] Logo navigates to home
- [ ] Back to Home button works
- [ ] Logout works and redirects

**Auditor Dashboard:**
- [ ] Sidebar navigation works
- [ ] Logo navigates to home
- [ ] Back to Home button works
- [ ] Logout works and redirects

---

## Common Navigation Patterns

### Exit Pattern
Every page has at least one way to exit:
- Public pages: Back button to landing
- Protected pages: Sidebar with home/logout
- Error states: Back button to previous page

### Breadcrumb Pattern
Logical flow maintained:
- Landing → Auth → Dashboard
- Landing → Consumer → Passport
- Dashboard ↔ Generate Batch (via sidebar)

### Modal Pattern
Modals don't navigate away:
- Create Product (Dashboard)
- Review Product (Auditor)
- Reject Reason (Auditor)
- Close modal returns to same page

---

## Future Navigation Enhancements

### Phase 1
- [ ] Breadcrumb navigation for deep pages
- [ ] Recent pages history
- [ ] Quick navigation shortcuts

### Phase 2
- [ ] Mobile hamburger menu for sidebar
- [ ] Swipe gestures for mobile
- [ ] Navigation search

### Phase 3
- [ ] Keyboard shortcuts overlay
- [ ] Navigation analytics
- [ ] Personalized navigation

---

**Version**: 4.1.0  
**Last Updated**: February 28, 2026  
**Status**: ✅ All Navigation Paths Verified
