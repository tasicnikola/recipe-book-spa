import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import LogoutIcon from "@mui/icons-material/Logout";
import classes from "./Header.module.scss";
// import { MenuItem } from "@mui/material";
// import { userActions } from "../../../store/user/user.slice";
// import { useDispatch } from "react-redux";
// import { googleLogout } from "@react-oauth/google";

const Header = () => {
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(userActions.logOut());
//     googleLogout();
//   };

  return (
    <Box className={`${classes.header} flex-grow-1 d-flex w-100`}>
      <Box className={`flex-grow-1 d-flex`}>
        <Typography variant="h6" noWrap component="div">
            Recipe Book
        </Typography>
      </Box>
      {/* <MenuItem onClick={handleLogout}>
        <LogoutIcon />
      </MenuItem> */}
    </Box>
  );
};

export default Header;
