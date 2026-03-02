import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Leaf, Package, Users, ArrowLeft, Shield } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import type { UserRole } from '../../context/AuthContext';

const AuthPage = () => {
  const { role } = useParams<{ role: 'manufacturer' | 'auditor' }>();
  const navigate = useNavigate();
  const { login, register } = useAuth();
  
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const isManufacturer = role === 'manufacturer';
  const isAuditor = role === 'auditor';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!isLogin && formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      if (isLogin) {
        await login(formData.email, formData.password, role as UserRole);
      } else {
        await register(formData.email, formData.password, formData.name, role as UserRole);
      }

      // Navigate to appropriate portal
      if (isManufacturer) {
        navigate('/manufacturer/dashboard');
      } else if (isAuditor) {
        navigate('/auditor/dashboard');
      }
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-white to-leaf-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sand-600 hover:text-sand-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>

        {/* Auth Card */}
        <div className="card shadow-soft-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className={`w-16 h-16 ${isManufacturer ? 'bg-forest-100' : isAuditor ? 'bg-earth-100' : 'bg-leaf-100'} rounded-xl flex items-center justify-center`}>
                {isManufacturer ? (
                  <Package className="w-8 h-8 text-forest-600" />
                ) : isAuditor ? (
                  <Shield className="w-8 h-8 text-earth-600" />
                ) : (
                  <Users className="w-8 h-8 text-leaf-600" />
                )}
              </div>
            </div>
            <h1 className="text-2xl font-bold text-sand-900 mb-2">
              {isManufacturer ? 'Manufacturer' : isAuditor ? 'Auditor' : 'Consumer'} {isLogin ? 'Login' : 'Sign Up'}
            </h1>
            <p className="text-sand-600">
              {isLogin ? 'Welcome back!' : 'Create your account'} Access your {isManufacturer ? 'dashboard' : isAuditor ? 'review portal' : 'portal'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-sand-700 mb-2">
                  {isManufacturer ? 'Company Name' : isAuditor ? 'Full Name' : 'Full Name'}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field"
                  placeholder={isManufacturer ? 'Enter company name' : 'Enter your name'}
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-sand-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-field"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-sand-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="input-field"
                placeholder="Enter your password"
                required
                minLength={6}
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-sand-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="input-field"
                  placeholder="Confirm your password"
                  required
                  minLength={6}
                />
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  {isLogin ? 'Login' : 'Sign Up'}
                </>
              )}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center">
            <p className="text-sand-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setFormData({ name: '', email: '', password: '', confirmPassword: '' });
                }}
                className="text-forest-600 font-medium hover:text-forest-700 transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </div>

          {/* Switch Role */}
          <div className="mt-4 pt-4 border-t border-sand-200 text-center">
            <p className="text-sm text-sand-600 mb-2">
              Looking for {isManufacturer ? 'auditor' : 'manufacturer'} portal?
            </p>
            <button
              onClick={() => navigate(`/auth/${isManufacturer ? 'auditor' : 'manufacturer'}`)}
              className="text-sm text-leaf-600 font-medium hover:text-leaf-700 transition-colors"
            >
              Switch to {isManufacturer ? 'Auditor' : 'Manufacturer'} {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 card bg-gradient-to-br from-forest-50 to-leaf-50 border-forest-200">
          <div className="flex items-start gap-3">
            <Leaf className="w-5 h-5 text-forest-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-sand-700">
                {isManufacturer ? (
                  <>
                    <strong>Manufacturers:</strong> Create digital product passports, track carbon footprints, 
                    upload supporting documents, and generate QR codes for your textile products.
                  </>
                ) : isAuditor ? (
                  <>
                    <strong>Auditors:</strong> Review product submissions, verify sustainability claims, 
                    and approve or reject product passports based on evidence and compliance.
                  </>
                ) : (
                  <>
                    <strong>Consumers:</strong> Scan QR codes to verify product sustainability, 
                    compare environmental impact, and make informed choices.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
