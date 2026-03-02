# Authentication Guide - Green Passport

## Overview

Green Passport implements a role-based authentication system with two distinct user types:
- **Manufacturers**: Create and manage product passports
- **Consumers**: Verify product sustainability

## User Flow

### 1. Landing Page (`/`)

The landing page serves as the entry point with:
- Platform introduction and value proposition
- Two primary CTAs:
  - "Manufacturer Login" → `/auth/manufacturer`
  - "Consumer Login" → `/auth/consumer`
- Feature highlights for both user types
- Benefits section

### 2. Authentication Pages (`/auth/:role`)

#### Manufacturer Authentication (`/auth/manufacturer`)
- Login form for existing users
- Registration form for new manufacturers
- Switch to consumer authentication option

#### Consumer Authentication (`/auth/consumer`)
- Login form for existing users
- Registration form for new consumers
- Switch to manufacturer authentication option

### 3. Protected Portals

After successful authentication, users are redirected to their role-specific portal:

#### Manufacturer Portal (`/manufacturer/*`)
- Dashboard: `/manufacturer/dashboard`
- Generate Batch: `/manufacturer/generate-batch`

#### Consumer Portal (`/consumer/*`)
- Verify Product: `/consumer/portal`

## Authentication Implementation

### Context API

The authentication state is managed using React Context API:

```typescript
// src/context/AuthContext.tsx

interface User {
  id: string;
  email: string;
  name: string;
  role: 'manufacturer' | 'consumer';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}
```

### Usage in Components

```typescript
import { useAuth } from '../context/AuthContext';

function MyComponent() {
  const { user, login, logout, isAuthenticated } = useAuth();
  
  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  
  // Access user information
  console.log(user.name, user.role);
  
  // Logout
  const handleLogout = () => {
    logout();
  };
}
```

### Protected Routes

Routes are protected using the `ProtectedRoute` component:

```typescript
// src/components/ProtectedRoute.tsx

<ProtectedRoute requiredRole="manufacturer">
  <ManufacturerDashboard />
</ProtectedRoute>
```

**Behavior**:
- If user is not authenticated → Redirect to landing page
- If user role doesn't match → Redirect to their appropriate portal
- If user is authenticated with correct role → Render children

## Mock Authentication

Currently, the app uses mock authentication for demonstration:

### Login Flow
```typescript
const login = async (email: string, password: string, role: UserRole) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Create mock user
  const mockUser: User = {
    id: `user-${Date.now()}`,
    email,
    name: email.split('@')[0],
    role: role!,
  };
  
  // Store in state and localStorage
  setUser(mockUser);
  localStorage.setItem('greenPassportUser', JSON.stringify(mockUser));
};
```

### Registration Flow
```typescript
const register = async (email: string, password: string, name: string, role: UserRole) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Create mock user
  const mockUser: User = {
    id: `user-${Date.now()}`,
    email,
    name,
    role: role!,
  };
  
  // Store in state and localStorage
  setUser(mockUser);
  localStorage.setItem('greenPassportUser', JSON.stringify(mockUser));
};
```

### Session Persistence
```typescript
// Load user from localStorage on app mount
useEffect(() => {
  const storedUser = localStorage.getItem('greenPassportUser');
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);
```

## Testing Authentication

### Test Accounts

Since authentication is mocked, you can use any credentials:

**Manufacturer:**
```
Email: manufacturer@greenpassport.com
Password: test123
Name: EcoTextiles Ltd
```

**Consumer:**
```
Email: consumer@greenpassport.com
Password: test123
Name: John Doe
```

### Test Scenarios

#### 1. New User Registration
1. Go to landing page
2. Click "Manufacturer Login" or "Consumer Login"
3. Click "Sign Up" toggle
4. Fill in registration form
5. Submit → Redirected to appropriate portal

#### 2. Existing User Login
1. Go to landing page
2. Click "Manufacturer Login" or "Consumer Login"
3. Enter email and password
4. Submit → Redirected to appropriate portal

#### 3. Session Persistence
1. Login as any user
2. Refresh the page
3. User should remain logged in

#### 4. Logout
1. Login as any user
2. Click user profile in sidebar
3. Click "Logout"
4. Redirected to landing page

#### 5. Protected Route Access
1. Try to access `/manufacturer/dashboard` without login
2. Should redirect to landing page
3. Login as consumer
4. Try to access `/manufacturer/dashboard`
5. Should redirect to `/consumer/portal`

## Backend Integration

To integrate with a real backend API:

### 1. Update Login Function

```typescript
const login = async (email: string, password: string, role: UserRole) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, role }),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const data = await response.json();
    
    // Store user and token
    setUser(data.user);
    localStorage.setItem('greenPassportUser', JSON.stringify(data.user));
    localStorage.setItem('greenPassportToken', data.token);
  } catch (error) {
    throw new Error('Authentication failed');
  }
};
```

### 2. Update Register Function

```typescript
const register = async (email: string, password: string, name: string, role: UserRole) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name, role }),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }

    const data = await response.json();
    
    // Store user and token
    setUser(data.user);
    localStorage.setItem('greenPassportUser', JSON.stringify(data.user));
    localStorage.setItem('greenPassportToken', data.token);
  } catch (error) {
    throw new Error('Registration failed');
  }
};
```

### 3. Add Token to API Requests

```typescript
// Create an API client with authentication
const apiClient = {
  get: async (url: string) => {
    const token = localStorage.getItem('greenPassportToken');
    const response = await fetch(`${API_URL}${url}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  },
  
  post: async (url: string, data: any) => {
    const token = localStorage.getItem('greenPassportToken');
    const response = await fetch(`${API_URL}${url}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};
```

### 4. Implement Token Refresh

```typescript
const refreshToken = async () => {
  const refreshToken = localStorage.getItem('greenPassportRefreshToken');
  
  const response = await fetch(`${API_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  const data = await response.json();
  localStorage.setItem('greenPassportToken', data.token);
  return data.token;
};
```

### 5. Add Axios Interceptor (Alternative)

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: API_URL,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('greenPassportToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const newToken = await refreshToken();
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Redirect to login
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
```

## Security Considerations

### Current Implementation (Mock)
- ⚠️ No password hashing
- ⚠️ No token validation
- ⚠️ No CSRF protection
- ⚠️ No rate limiting
- ⚠️ Data stored in localStorage (vulnerable to XSS)

### Production Requirements

1. **Password Security**
   - Hash passwords with bcrypt (backend)
   - Minimum password length: 8 characters
   - Password complexity requirements

2. **Token Management**
   - Use JWT tokens
   - Short-lived access tokens (15 minutes)
   - Long-lived refresh tokens (7 days)
   - Store tokens in httpOnly cookies (preferred) or localStorage

3. **HTTPS Only**
   - All authentication requests over HTTPS
   - Secure cookie flags

4. **Rate Limiting**
   - Limit login attempts (5 per 15 minutes)
   - Account lockout after failed attempts

5. **CSRF Protection**
   - CSRF tokens for state-changing operations
   - SameSite cookie attribute

6. **Input Validation**
   - Email format validation
   - Password strength validation
   - Sanitize all inputs

7. **Session Management**
   - Automatic logout after inactivity
   - Logout on all devices option
   - Session invalidation on password change

## Error Handling

### Authentication Errors

```typescript
try {
  await login(email, password, role);
} catch (error) {
  if (error.message === 'Invalid credentials') {
    setError('Email or password is incorrect');
  } else if (error.message === 'Account locked') {
    setError('Too many failed attempts. Try again later.');
  } else {
    setError('An error occurred. Please try again.');
  }
}
```

### Network Errors

```typescript
try {
  await login(email, password, role);
} catch (error) {
  if (error.name === 'NetworkError') {
    setError('Network error. Please check your connection.');
  } else {
    setError('An unexpected error occurred.');
  }
}
```

## Troubleshooting

### Issue: User not persisting after refresh
**Solution**: Check localStorage for `greenPassportUser` key

### Issue: Redirect loop
**Solution**: Ensure role matches the protected route requirement

### Issue: Cannot access protected routes
**Solution**: Verify user is authenticated and has correct role

### Issue: Logout not working
**Solution**: Clear localStorage and reset auth context state

---

**Last Updated**: February 2026
**Version**: 2.0.0
