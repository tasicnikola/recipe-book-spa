import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import classes from "./HomepageNav.module.scss";
import { Divider } from "@mui/material";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import logo from '../../assets/images/logo.jpg'

const HomepageNav = () => {
  return (
    <AppBar
      position="static"
      classes={{
        root: classes["appbar"],
      }}
    >
      <Container
        maxWidth="xl"
        classes={{
          root: classes["nav"],
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
              src={logo}
              // src="https://image.shutterstock.com/image-vector/catering-quality-food-design-premium-260nw-1984672004.jpg"
            />
          </Box>

          <Box className="d-flex">
            <Box>
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
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              classes={{
                root: classes["divider"],
              }}
            />{" "}
            <Box>
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
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              classes={{
                root: classes["divider"],
              }}
            />{" "}
            <Box >
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
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              classes={{
                root: classes["divider"],
              }}
            />
            <Box>
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
