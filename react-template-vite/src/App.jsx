// import { useState } from "react";
// import * as React from "react";
// import * as ReactDOM from "react-dom";
// routes
// import Router from "./routes";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  /* Navigate */
} from "react-router-dom";

// Font Roboto
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// CSS
import "./App.css";

// Pages
import Login from "./pages/Login";
import Page404 from "./pages/Page404";
import SignUp from "./pages/SignUp";
import Dashboard from "./layout/dashboard/Dashboard";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import DashboardApp from "./pages/DashboardApp";

function App() {
  // API
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route
  //       element={<Data />}
  //       path="data/:dataId"
  //       loader={async ({ params }) => {
  //         return fetch(`/fake/api/data/${params.dataId}.json`);
  //       }}
  //       action={async ({ request }) => {
  //         return updateData(await request.formData());
  //       }}
  //       errorElement={<Page404 />}
  //     />
  //   )
  // );

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="dashboard" element={<DashboardApp />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      {/* <Router /> */}
    </>
  );
}

export default App;
