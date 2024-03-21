import React from "react";
import HomepageNav from "../../components/homepage-nav/HomepageNav";
import { Container, Divider, Typography } from "@mui/material";
import Carousel from "../../components/carousel/Carousel";
import Box from "@mui/material/Box";
import classes from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <Container>
      <HomepageNav />
      <Carousel />
      <Container
        classes={{
          root: classes["divider"],
        }}
      >
        <Divider>
          <Typography
            classes={{
              root: classes["restoran"],
            }}
          >
            RESTORAN
          </Typography>
        </Divider>
      </Container>
    </Container>
  );
};

export default Homepage;
