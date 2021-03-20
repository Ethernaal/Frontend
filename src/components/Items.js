import styled, { css } from "styled-components";

export const Item = styled.div`
  display: flex
  justify-content: center
  padding: .5rem

  ${() =>
    css`
      background-color: black
      font-size: 18px
      font-weight: bold
    `}
`;