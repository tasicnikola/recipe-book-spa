import { Box } from "@mui/material";
import Dashboard from "./dashboard/Dashboard";
import Navigation from "./navigation/Navigation";

const Public = () => {
  return (
    <Box className="d-flex flex-column ">
      <Navigation />
      <Box className="w-100 flex-column container">
        <Dashboard />
      </Box>
    </Box>
  );
};

export default Public;
