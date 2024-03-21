import { Box } from "@mui/material";
import Dashboard from "./dashboard/Dashboard";
import Header from "./header/Header";
import Navigation from "../components/navigation/Navigation";

const Public = () => {
  return (
    <Box className="d-flex flex-column ">
      <Header />
      <Navigation/>
      <Box className="w-100 flex-column container">
        <Dashboard />
      </Box>
    </Box>
  );
};

export default Public;
