import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import { Tooltip } from "@mui/material";
import classes from "./Navigation.module.scss";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import MenuList from "@mui/material/MenuList";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { navigationActions } from "../../../store/navigation/navigationSlice";
import RootState from "../../interfaces/props/RootStateProps";
import Drawer from "../../views/drawer/Drawer";
import DrawerHeader from "../../views/drawer/header/DrawerHeader";
import HomeIcon from '@mui/icons-material/Home';

const Navigation = () => {
  const theme = useTheme();

  const open = useSelector((state: RootState) => state.navigation.open);
  const dispatch = useDispatch();

  const handleDrawer = () => {
    dispatch(navigationActions.toggleNavigation());
  };

  const widthClass = open ? classes["is-full-view"] : classes["not-full-view"];

  return (
    <nav>
      <Drawer
        classes={{
          paper: `${classes["side-nav"]} ${widthClass}`,
          root: `${widthClass}`,
        }}
        variant="permanent"
        open={open}
      >
        <DrawerHeader className="align-self-start">
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.avatar} m-auto` : `${classes.avatar} m-auto`
            }
            to="/admin">
            <HomeIcon  />
          </NavLink >
          {open ? <h1 className={`${classes.dbs} m-auto`}>RB</h1> : null}
        </DrawerHeader>
        <Divider />
        <MenuList className={"py-4"}>
          <NavLink
            to="/admin/users"
            className={({ isActive }) =>
              isActive ? "active my-3" : "inactive my-3"
            }
          >
            <Tooltip title={"Users"} className="d-flex justify-content-center">
              <MenuItem key={"Users"} classes={{ gutters: "w-100" }}>
                <ListItemIcon
                  classes={{ root: "d-flex justify-content-center" }}
                >
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Users"}
                  className={open ? "d-block" : "d-none"}
                >
                  Users
                </ListItemText>
              </MenuItem>
            </Tooltip>
          </NavLink>
        </MenuList>
        <Divider />
        <Box className="d-flex flex-grow-1 align-items-end justify-content-center">
          <IconButton onClick={handleDrawer}>
            {open && theme.direction !== "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navigation;
