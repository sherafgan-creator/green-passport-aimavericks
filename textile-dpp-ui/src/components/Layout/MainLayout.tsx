import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  role: 'manufacturer' | 'auditor';
}

const MainLayout = ({ role }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-sand-50">
      <Sidebar role={role} />
      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
