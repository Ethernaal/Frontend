import React from "react";
import { Grid, Cell } from "styled-css-grid";
import artis1 from "../images/artis1.png";
import instalogo from "../images/instalogo.png";

export default function ArtistsDetail() {
  return (
    <>
      <Grid
        style={{ marginTop: "7%" }}
        justifyContent={"center"}
        columns={"1000px"}
      >
        <Grid flow="row dense" columns={4}>
          <Cell width={1} height={1}>
            <img width={250} height={250} src={artis1} alt="Logo" />
          </Cell>
          <Cell width={3} height={2}>
            <Grid style={{marginLeft:'7%'}}  columns={1}>
              <Cell>TONI BRUTAL - LONDON</Cell>
              <Cell style={{marginTop:'3%'}} >
                Antoine Brutel (b.1988) in Neufchateau, France. He is an artist
                who studied at Camberwell College of Arts in London. Antoine
                started by practicing painting highly influenced by old cartoon
                references. His interests evolved and shifted towards more
                historical references, opening the realm of medieval etching,
                which led him to the discovery of the tattoo practice. Antoine
                then conceptualised the idea “Kill you Masters” with the
                guideline that reproducing the work of art of old masters
                through tattooing is the ultimate development and resurrection
                of these works of art.
              </Cell>
            </Grid>
          </Cell>
          <Cell style={{marginTop:'3%'}} width={1} height={1} center={true}>
            antoinebrutel@gmail.com
          </Cell>
          <Cell style={{marginTop:'3%'}} width={1} height={1} center={true}>
            <img width={25} height={25} src={instalogo} alt="Logo" />
          </Cell>
        </Grid>
      </Grid>
    </>
  );
}
