import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { openedMixin, closedMixin } from "../../../styles/mixins/_navigation";

const drawerWidth: number = 250;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop: string) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
  "& .MuiDrawer-paperAnchorDockedLeft": {
    background: "#F4F7F9",
  },
}));

export default Drawer;
