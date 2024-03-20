import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import classes from "./Navigation.module.scss";
import { Link } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      classes={{
        root: classes["appbar"],
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box className={"d-flex"}>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: '"Segoe UI Symbol"',
                fontWeight: 400,
                letterSpacing: ".1rem",
                color: "#929292",
                textDecoration: "none",
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
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: '"Segoe UI"',
                fontWeight: 500,
                letterSpacing: ".1rem",
                color: "#B19A88",
                textDecoration: "none",
              }}
            >
              064/485 94 11
            </Typography>
          </Box>

          <Container>
            <Box className={classes.instagram}>
              <Link to="https://www.instagram.com/ketering_cave_kos.kamenica/">
                <Tooltip title="Instagram">
                  <IconButton>
                    <InstagramIcon
                      classes={{
                        root: classes["contact-svg"],
                      }}
                    />
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
export default ResponsiveAppBar;
