import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import classes from "./HomepageNav.module.scss";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Avatar } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const HomepageNav = () => {
  return (
    <AppBar
      position="static"
      classes={{
        root: classes["appbar"],
      }}
    >
      <Container maxWidth="xl"
        classes={{
          root: classes["nav"]
        }}
      >
        <Toolbar disableGutters>
          <Box className={"d-flex"}>
            <Box
              className="p-2"
              component="img"
              sx={{
                height: 90,
                width: 90,
                maxHeight: { xs: 90, md: 90 },
                maxWidth: { xs: 90, md: 90 },
              }}
              alt="Logo"
              // src="src\public\assets\images\logo.jpg"
              src="https://image.shutterstock.com/image-vector/catering-quality-food-design-premium-260nw-1984672004.jpg"
            />
          </Box>

          <Box className="d-flex">
            <Box className="p-3">
              <NavLink to="">
                <Button>
                  <Typography
                    classes={{
                      root: classes["nav-link"],
                    }}
                  >
                    RESTORAN
                  </Typography>
                </Button>
              </NavLink>
            </Box>

            <Box className="p-3">
              <NavLink to="">
                <Button>
                  <Typography
                    classes={{
                      root: classes["nav-link"],
                    }}
                  >
                    KETERING
                  </Typography>
                </Button>
              </NavLink>
            </Box>

            <Box className="p-3">
              <NavLink to="">
                <Button>
                  <Typography
                    classes={{
                      root: classes["nav-link"],
                    }}
                  >
                    OPREMA
                  </Typography>
                </Button>
              </NavLink>
            </Box>

            <Box className="p-3">
              <NavLink to="">
                <Button>
                  <Typography
                    classes={{
                      root: classes["nav-link"],
                    }}
                  >
                    CENOVNIK
                  </Typography>
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HomepageNav;
