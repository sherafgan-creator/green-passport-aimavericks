# Changelog

All notable changes to the Green Passport UI project will be documented in this file.

## [2.0.0] - 2026-02-28

### Added - Authentication System

#### New Pages
- **LandingPage** (`/`): Comprehensive introduction to Green Passport platform
  - Platform overview and value proposition
  - Separate CTAs for Manufacturer and Consumer login
  - Feature highlights for both user types
  - Benefits section
  - Responsive footer

- **AuthPage** (`/auth/:role`): Unified authentication page for both roles
  - Login form with email/password
  - Registration form with name/email/password
  - Toggle between login and signup
  - Role-specific branding (Manufacturer vs Consumer)
  - Switch role option
  - Loading states and error handling
  - Back to home navigation

#### New Components
- **AuthContext** (`src/context/AuthContext.tsx`): Authentication state management
  - User state management
  - Login function with role-based authentication
  - Register function for new users
  - Logout function
  - Session persistence via localStorage
  - TypeScript interfaces for User and AuthContext

- **ProtectedRoute** (`src/components/ProtectedRoute.tsx`): Route protection HOC
  - Checks authentication status
  - Validates user role
  - Redirects unauthenticated users to landing page
  - Redirects users to appropriate portal based on role

#### Updated Components
- **Sidebar**: Enhanced with user profile and logout
  - Role-based navigation (Manufacturer vs Consumer)
  - User profile display (name, email)
  - Logout button
  - Role-specific portal label

- **MainLayout**: Added role prop for sidebar customization
  - Accepts role prop ('manufacturer' | 'consumer')
  - Passes role to Sidebar component

- **App**: Complete routing restructure
  - Public routes (landing, auth)
  - Protected manufacturer routes
  - Protected consumer routes
  - Role-based redirects
  - Catch-all redirect to home

### Changed

#### Routing Structure
**Before:**
```
/ → Welcome page
/dashboard → Dashboard
/generate-batch → Generate Batch
/consumer → Consumer Portal
```

**After:**
```
/ → Landing Page (public)
/auth/manufacturer → Manufacturer Auth (public)
/auth/consumer → Consumer Auth (public)
/manufacturer/dashboard → Dashboard (protected, manufacturer only)
/manufacturer/generate-batch → Generate Batch (protected, manufacturer only)
/consumer/portal → Consumer Portal (protected, consumer only)
```

#### User Flow
**Before:**
- Direct access to all pages
- No authentication required
- Single navigation for all features

**After:**
- Landing page as entry point
- Role-based authentication required
- Separate portals for manufacturers and consumers
- Protected routes with role validation
- Session persistence across page reloads

### Technical Improvements

#### State Management
- Implemented React Context API for global auth state
- Added localStorage for session persistence
- Type-safe authentication interfaces

#### Security (Mock Implementation)
- Role-based access control
- Protected routes
- Session management
- Logout functionality

#### User Experience
- Clear separation between manufacturer and consumer flows
- Intuitive authentication process
- Loading states during authentication
- Error handling and display
- Smooth navigation between pages

### Documentation

#### New Documentation
- **AUTHENTICATION_GUIDE.md**: Comprehensive authentication documentation
  - User flow explanation
  - Implementation details
  - Backend integration guide
  - Security considerations
  - Testing scenarios

#### Updated Documentation
- **README.md**: Updated with authentication features
  - New user flow section
  - Authentication testing guide
  - Updated project structure
  - Backend integration notes

- **CHANGELOG.md**: This file

### Migration Guide

For existing users of v1.0.0:

1. **Update imports**:
   ```typescript
   // Old
   import { useNavigate } from 'react-router-dom';
   
   // New - Add auth context
   import { useAuth } from './context/AuthContext';
   ```

2. **Update routes**:
   ```typescript
   // Old
   navigate('/dashboard');
   
   // New
   navigate('/manufacturer/dashboard');
   // or
   navigate('/consumer/portal');
   ```

3. **Add authentication check**:
   ```typescript
   const { isAuthenticated, user } = useAuth();
   
   if (!isAuthenticated) {
     navigate('/');
   }
   ```

### Breaking Changes

⚠️ **Route Changes**:
- `/dashboard` → `/manufacturer/dashboard`
- `/generate-batch` → `/manufacturer/generate-batch`
- `/consumer` → `/consumer/portal`

⚠️ **Component Props**:
- `MainLayout` now requires `role` prop
- `Sidebar` now requires `role` prop

⚠️ **Authentication Required**:
- All portal pages now require authentication
- Direct URL access redirects to landing page if not authenticated

### Known Issues

- Mock authentication (no real backend validation)
- Passwords not hashed (mock implementation)
- No password reset functionality
- No email verification
- No two-factor authentication

### Future Enhancements

#### v2.1.0 (Planned)
- [ ] Backend API integration
- [ ] Real JWT token authentication
- [ ] Password reset functionality
- [ ] Email verification
- [ ] Remember me option
- [ ] Social login (Google, GitHub)

#### v2.2.0 (Planned)
- [ ] User profile management
- [ ] Change password functionality
- [ ] Account settings page
- [ ] Two-factor authentication
- [ ] Activity log

#### v3.0.0 (Planned)
- [ ] Multi-tenant support
- [ ] Organization management
- [ ] Team collaboration features
- [ ] Advanced role permissions
- [ ] Audit trail

---

## [1.0.0] - 2026-02-27

### Initial Release

#### Features
- Manufacturer Dashboard
- Product passport creation
- Batch QR code generation
- Consumer product verification
- Sustainability scoring
- Carbon footprint tracking
- Data visualization with charts
- Mock data implementation
- Responsive design
- Tailwind CSS styling

#### Components
- Welcome page
- Dashboard
- Generate Batch
- Consumer Portal
- Sidebar navigation
- Main layout
- Score cards
- Empty states
- Loading spinner

#### Documentation
- README.md
- QUICKSTART.md
- PROJECT_SUMMARY.md
- DESIGN_SYSTEM.md
- DEPLOYMENT.md

---

**Version Format**: [Major.Minor.Patch]
- **Major**: Breaking changes
- **Minor**: New features (backward compatible)
- **Patch**: Bug fixes (backward compatible)
