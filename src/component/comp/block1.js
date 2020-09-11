import React from "react";
import styled from "styled-components";

const Block1Styled = styled.section`
  background-color: var(--color-main-dark);
  padding: 3em;

`;

function Block1() {
  return <Block1Styled>
      <h2>Más de 500 cursos en 12 categorías</h2>
  </Block1Styled>;
}

export default Block1;
