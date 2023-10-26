// import {
//   BrowserRouter,
//   Routes,
//   Link,
//   Navigate,
//   Route,
//   Outlet,
// } from "react-router-dom";

// Components
// import { Button } from "@mui/material";

// CSS
import { Outlet } from "react-router-dom";

import "./DashboardApp.css";

// Pages

const DashboardApp = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  );
};
export default DashboardApp;
