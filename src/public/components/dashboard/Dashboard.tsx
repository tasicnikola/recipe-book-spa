import { Routes, Route } from "react-router-dom";
import Homepage from "../../pages/homepage/Homepage";
import { Box } from "@mui/material";
import classes from "./Dashboard.module.scss";
import Ketering from "../../pages/ketering/Ketering";
import Cenovnik from "../../pages/cenovnik/Cenovnik";
import Oprema from "../../pages/oprema/Oprema";

const Dashboard = () => {
  return (
    <Box className={classes.container}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ketering" element={<Ketering />} />
        <Route path="/oprema" element={<Oprema />} />
        <Route path="/cenovnik" element={<Cenovnik />} />
      </Routes>
    </Box>
  );
};

export default Dashboard;
