import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Header = () => {
  return (
    <AppBar
      position="static"
      classes={{
        root: classes["appbar"],
      }}
    >
      <Container maxWidth="lg"
        className="w-100 flex-column container"
      >
        <Toolbar disableGutters>
          <Box className={"d-flex"}>
            <Typography
              classes={{
                root: classes["header"]
              }}
            >
              Kontaktirajte nas!
            </Typography>

            <Box className={classes.phone}>
              <PhoneIcon
                sx={{
                  color: "#B19A88",
                }}
              />
            </Box>

            <Typography
              classes={{
                root: classes["header-phonenum"]
              }}
            >
              064/485 94 11
            </Typography>
          </Box>

          <Container className="p-0">
            <Box className={classes.instagram}>
              <Link to="https://www.youtube.com/watch?v=88iJp17Kcdc&ab_channel=RadioTelevizijaPULS">
                <Tooltip title="YouTube">
                  <IconButton>
                    <YouTubeIcon/>
                  </IconButton>
                </Tooltip>
              </Link>
            </Box>

            <Box className={classes.instagram}>
              <Link to="https://www.instagram.com/ketering_cave_kos.kamenica/">
                <Tooltip title="Instagram">
                  <IconButton>
                    <InstagramIcon/>
                  </IconButton>
                </Tooltip>
              </Link>
            </Box>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
