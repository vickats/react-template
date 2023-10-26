import { Navigate, useRoutes } from "react-router-dom";
// layouts

import Dashboard from "./layout/dashboard/Dashboard";
//

import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import Settings from "./pages/Settings";
import DashboardApp from "./pages/DashboardApp";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { element: <Navigate to="/dashboard" />, index: true },
        { path: "app", element: <DashboardApp /> },
        { path: "user", element: <UserProfile /> },
        { path: "settings", element: <Settings /> },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return routes;
}
