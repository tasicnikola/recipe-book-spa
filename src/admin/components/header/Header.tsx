import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import LogoutIcon from "@mui/icons-material/Logout";
import classes from "./Header.module.scss";
// import { MenuItem, Stack, Switch } from "@mui/material";
// import { userActions } from "../../../store/user/user.slice";
// import { useDispatch } from "react-redux";
// import { googleLogout } from "@react-oauth/google";
// import * as React from "react";
// import { BaseSyntheticEvent, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [selectedPage, setSelectedPage] = useState<string>('admin');

  // const handleLogout = () => {
  //   dispatch(userActions.logOut());
  //   googleLogout();
  // };
  
  // useEffect(() => {
  //   if (selectedPage === 'public') {
  //     navigate('/');
  //   }
  // }, [navigate, selectedPage]);
  
  // const onToggleChangeHandler = (event: BaseSyntheticEvent) => {
  //   event.currentTarget.checked ? setSelectedPage('admin') :  setSelectedPage('public')
  // }

  return (
    <Box className={`${classes.header} flex-grow-1 d-flex w-100`}>
      <Box className={`flex-grow-1 d-flex`}>
        <Typography variant="h6" noWrap component="div">
          Recipe Book
        </Typography>
      </Box>
      <Box className={'d-flex align-items-center me-5'}>
        {/* <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Public</Typography>
          <Switch 
          classes={{
            track: classes['custom-track'],
            checked: classes['custom-switch-slide'],
          }}
          checked={selectedPage !== 'public'} 
          inputProps={{ 'aria-label': 'ant design' }}
          onChange={onToggleChangeHandler}
           />
          <Typography>Admin</Typography>
        </Stack> */}
      </Box>
      {/* <MenuItem onClick={handleLogout}>
        <LogoutIcon />
      </MenuItem> */}
    </Box>
  );
}

export default Header;
