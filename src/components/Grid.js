import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: grid
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px
  grid-gap: 5px
`;