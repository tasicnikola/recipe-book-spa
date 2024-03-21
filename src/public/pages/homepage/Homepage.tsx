import React from "react";
import { Container, Divider, Typography } from "@mui/material";
import Carousel from "../../components/carousel/Carousel";
import classes from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <Container>
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
