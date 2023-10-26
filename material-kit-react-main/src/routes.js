import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import RecoverPasswordPage from './pages/RecoverPasswordPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import SettingsPage from './pages/SettingsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import VerifyCodeRecoverPage from './pages/VerifyCodeRecoverPage';
import TrackingPage from './pages/TrackingPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'tracking', element: <TrackingPage /> },
        { path: 'settings', element: <SettingsPage /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'signup',
      element: <SignUpPage />,
    },
    {
      path: 'recover',
      element: <RecoverPasswordPage />,
    },
    {
      path: 'verifycode',
      element: <VerifyCodeRecoverPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
