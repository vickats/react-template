// import { Dashboard } from "@material-ui/icons";
import Header from "./header/Header";
import { Outlet, Routes, Route } from "react-router-dom";
import DashboardApp from "./../../pages/DashboardApp";
import { Container } from "@mui/material";

const Dashboard = () => {
  return (
    <>
      <Container
        sx={{
          backgroundColor: "#f2f7fb",
          minHeight: "100vh",
          minWidth: "100vw",
        }}
      >
        <Header></Header>
        <DashboardApp sx={{ maxWidth: "1440px" }}></DashboardApp>
        {/* <Outlet></Outlet> */}
      </Container>
    </>
  );
};
export default Dashboard;
