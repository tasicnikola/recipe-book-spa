import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/homepage/Homepage";
import { Box } from "@mui/material";
import classes from "./Dashboard.module.scss";
import Users from "../users/Users";

const Dashboard = () => {
  return (
    <Box className={classes.container}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Users />} />
      </Routes>
    </Box>
  );
};

export default Dashboard;
