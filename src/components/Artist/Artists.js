import React from "react";
import { Grid, Cell } from "styled-css-grid";
import {Link} from "react-router-dom"
import artis1 from "../images/artis1.png";
import artis2 from "../images/artist2.png";
import artis3 from "../images/artist3.png";

function Artists(props) {
  return (
    <Grid
      style={{ marginTop: "7%" }}
      justifyContent={"center"}
      columns={"1000px"}
    >
      <Grid columns={"repeat(auto-fit,minmax(300px,1fr))"}>
        <Grid columns={1}>
          <Cell>
            <img width={300} height={300} src={artis1} alt="Logo" />
          </Cell>
          <Cell style={{marginTop:'3%'}} center>
            <Link to='/artist:1'>TONI BRUTAL - LONDON</Link>
          </Cell>
        </Grid>
        <Grid columns={1}>
          <Cell>
            <img width={300} height={300} src={artis2} alt="Logo" />
          </Cell>
          <Cell style={{marginTop:'3%'}} center>
            <Link to='/artist:2'>TOM RIBOT - LONDON</Link>
          </Cell>
        </Grid>
        <Grid columns={1}>
          <Cell>
            <img width={300} height={300} src={artis3} alt="Logo" />
          </Cell>
          <Cell style={{marginTop:'3%'}} center>
            <Link to='/artist:3'>TBELEN VELASCO - LONDON</Link>
          </Cell>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Artists;
