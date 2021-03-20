import React from "react";
import { Grid, Cell } from "styled-css-grid";
import image1 from '../images/hacking.png';
import image2 from '../images/cha-ching.png';

export const Home = () => (
    <Grid style={{marginTop:'3%'}} justifyContent={'center'} columns={"1000px"}>
    <Grid columns={"repeat(auto-fit,minmax(300px,1fr))"}>
      <Cell>
        <img width={200} src={image1} alt="Logo" />
      </Cell>
      <Cell>
        <img width={200} src={image2} alt="Logo" />
      </Cell>
      <Cell>
        <img width={200} src={image1} alt="Logo" />
      </Cell>
    </Grid>
    <Grid columns={"repeat(auto-fit,minmax(300px,1fr))"}>
      <Cell>
        <img width={200} src={image1} alt="Logo" />
      </Cell>
      <Cell>
        <img width={200} src={image2} alt="Logo" />
      </Cell>
      <Cell>
        <img width={200} src={image1} alt="Logo" />
      </Cell>
    </Grid>
  </Grid>
)