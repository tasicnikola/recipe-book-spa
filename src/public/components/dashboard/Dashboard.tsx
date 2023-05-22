import { Routes, Route } from "react-router-dom";
import Homepage from "../../pages/homepage/Homepage";
import { Box } from "@mui/material";
import classes from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <Box className={classes.container}>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Box>
  );
};

export default Dashboard;
