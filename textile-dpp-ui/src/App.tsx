import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './components/Layout/MainLayout';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/Auth/AuthPage';
import Dashboard from './pages/Dashboard';
import GenerateBatch from './pages/GenerateBatch';
import AuditorDashboard from './pages/AuditorDashboard';
import ConsumerPortal from './pages/ConsumerPortal';
import DigitalPassport from './pages/DigitalPassport';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth/:role" element={<AuthPage />} />
          
          {/* Consumer Portal - Public (No Auth Required) */}
          <Route path="/consumer" element={<ConsumerPortal />} />
          
          {/* Digital Passport - Public */}
          <Route path="/passport/:serialId" element={<DigitalPassport />} />

          {/* Manufacturer Routes */}
          <Route
            path="/manufacturer"
            element={
              <ProtectedRoute requiredRole="manufacturer">
                <MainLayout role="manufacturer" />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/manufacturer/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="generate-batch" element={<GenerateBatch />} />
          </Route>

          {/* Auditor Routes */}
          <Route
            path="/auditor"
            element={
              <ProtectedRoute requiredRole="auditor">
                <MainLayout role="auditor" />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/auditor/dashboard" replace />} />
            <Route path="dashboard" element={<AuditorDashboard />} />
          </Route>

          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
