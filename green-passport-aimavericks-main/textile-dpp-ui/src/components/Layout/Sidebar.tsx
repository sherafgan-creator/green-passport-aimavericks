import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Leaf, LogOut, User, Home } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface SidebarProps {
  role: 'manufacturer' | 'auditor';
}

const Sidebar = ({ role }: SidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const manufacturerNavItems = [
    { path: '/manufacturer/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/manufacturer/generate-batch', icon: Package, label: 'Generate Batch' },
  ];

  const auditorNavItems = [
    { path: '/auditor/dashboard', icon: LayoutDashboard, label: 'Review Dashboard' },
  ];

  const navItems = role === 'manufacturer' ? manufacturerNavItems : auditorNavItems;

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <aside className="w-64 bg-white border-r border-sand-200 min-h-screen fixed left-0 top-0 flex flex-col">
      <div className="p-6 border-b border-sand-200">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-3 w-full hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-forest-500 to-leaf-600 rounded-lg flex items-center justify-center">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <h1 className="text-lg font-bold text-forest-800">Green Passport</h1>
            <p className="text-xs text-sand-500">
              {role === 'manufacturer' ? 'Manufacturer Portal' : 'Auditor Portal'}
            </p>
          </div>
        </button>
      </div>

      <nav className="p-4 flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-forest-50 text-forest-700 font-medium'
                      : 'text-sand-600 hover:bg-sand-50 hover:text-sand-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Info & Logout */}
      <div className="p-4 border-t border-sand-200 space-y-2">
        <div className="flex items-center gap-3 px-4 py-3 bg-sand-50 rounded-lg">
          <div className="w-8 h-8 bg-forest-100 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-forest-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-sand-900 truncate">{user?.name}</p>
            <p className="text-xs text-sand-500 truncate">{user?.email}</p>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-4 py-3 text-sand-600 hover:bg-sand-100 hover:text-sand-900 rounded-lg transition-all duration-200"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sand-600 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-200"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
