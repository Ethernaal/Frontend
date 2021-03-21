import React from "react";
import { Grid, Cell } from "styled-css-grid";
import antiminer from "../images/antiminer.png";
import hacking from "../images/hacking.png";
import network from "../images/network.png";
import chaching from "../images/chaching.png";
import eth from "../images/eth.png";
import cpu from "../images/cpu.png";

export const Home = () => (
  <Grid
    style={{ marginTop: "3%" }}
    justifyContent={"center"}
    columns={"1000px"}
  >
    <Grid columns={"repeat(auto-fit,minmax(300px,1fr))"}>
      <Cell>
        <Grid columns={1}>
          <Cell>
            <img width={200} src={chaching} alt="Logo" />
          </Cell>
          <Cell center>
            <span>N/A</span>
          </Cell>
        </Grid>
      </Cell>
      <Cell>
        <Grid columns={1}>
          <Cell>
            <img width={200} src={hacking} alt="Logo" />
          </Cell>
          <Cell center>
            <span>N/A</span>
          </Cell>
        </Grid>
      </Cell>
      <Cell>
        <Grid columns={1}>
          <Cell>
            <img width={200} src={network} alt="Logo" />
          </Cell>
          <Cell center>
            <span>N/A</span>
          </Cell>
        </Grid>
      </Cell>
    </Grid>
    <Grid columns={"repeat(auto-fit,minmax(300px,1fr))"}>
      <Cell>
        <Grid columns={1}>
          <Cell>
            <img width={200} src={antiminer} alt="Logo" />
          </Cell>
          <Cell center>
            N/A
          </Cell>
        </Grid>
      </Cell>
      <Cell>
        <Grid columns={1}>
          <Cell>
            <img width={200} src={eth} alt="Logo" />
          </Cell>
          <Cell center>
            <span>N/A</span>
          </Cell>
        </Grid>
      </Cell>
      <Cell>
        <Grid columns={1}>
          <Cell>
            <img width={200} src={cpu} alt="Logo" />
          </Cell>
          <Cell center>
            <span>N/A</span>
          </Cell>
        </Grid>
      </Cell>
    </Grid>
  </Grid>
);
