import Navigation from "./navigation/Navigation";
import Header from "./header/Header";
import { Box } from "@mui/material";
import Dashboard from "./dashboard/Dashboard";

const Admin = () => {
  return (
    <Box className="d-flex">
      <Navigation />
      <Box className="w-100 flex-column">
        <Header />
        <Dashboard />
      </Box>
    </Box>
  );
};

export default Admin;
