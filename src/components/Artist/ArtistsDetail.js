import React from "react";
import { Grid, Cell } from "styled-css-grid";
import instalogo from "../images/instalogo.png";
import artis1 from "../images/artis1.png";
import artis2 from "../images/artist2.png";
import artis3 from "../images/artist3.png";

const data = 
{':1': {
  'name':'TONI BRUTAL - LONDON',
  'description':'Antoine Brutel (b.1988) in Neufchateau, France. He is an artist who studied at Camberwell College of Arts in London. Antoine started by practicing painting highly influenced by old cartoon references. His interests evolved and shifted towards more historical references, opening the realm of medieval etching, which led him to the discovery of the tattoo practice. Antoine then conceptualised the idea “Kill you Masters” with the guideline that reproducing the work of art of old masters through tattooing is the ultimate development and resurrection of these works of art.',
  'email':'antoinebrutel@gmail.com',
  'img':artis1},
':2':{
  'name':'TOM RIBOT - LONDON',
  'description':'Tom Ribot (b.1994) in Paris, France. He is an artist who studied at Chelsea College of Art in London. Tom works across various medium including sculpture, video, installation and has recently extended his practice to body marking. His interests are turned towards the idea of alternative realities, starting from the 4th Dimension to the questioning that all datas collected and comprehended are a concept of the human mind. Contextualising the possibility that we are as a specie endlessly trying to decode the surrounding world we are existing in, whilst the reality is that nothing will ever truly be understood.',
  'email':'tom.ribot.kuster@gmail.com',
  'img':artis2},
':3':{
  'name':'BELEN VELASCO - LONDON',
  'description':'Belen Velasco is a London based self-taught artist born in Mexico, through her work Belen explores beauty and sexuality using the human figure. Her artwork is a medium for limitless expression. The fine lines of her tattoos and the bold colours of her paintings are completely parallel to each other in such a complimentary way that evokes a wide range of expression.',
  'email':'',
  'img':artis3},
}

export default function ArtistsDetail({match}) {
  let info = data[match.params.id]
  debugger
  return (
    <>
      <Grid
        style={{ marginTop: "7%" }}
        justifyContent={"center"}
        columns={"1000px"}
      >
        <Grid flow="row dense" columns={4}>
          <Cell width={1} height={1}>
            <img width={250} height={250} src={info.img} alt="Logo" />
          </Cell>
          <Cell width={3} height={2}>
            <Grid style={{marginLeft:'7%'}}  columns={1}>
              <Cell>{info.name}</Cell>
              <Cell style={{marginTop:'3%'}} >
                {info.description}
              </Cell>
            </Grid>
          </Cell>
          <Cell style={{marginTop:'3%'}} width={1} height={1} center={true}>
              {info.email}
          </Cell>
          <Cell style={{marginTop:'3%'}} width={1} height={1} center={true}>
            <img width={25} height={25} src={instalogo} alt="Logo" />
          </Cell>
        </Grid>
      </Grid>
    </>
  );
}
