import React from "react";
import styled from "styled-components";
import cloud from "../img/cloud.svg";
const FeaturesGeneralStyled = styled.div`
  padding: 0.5em 0 0.5em 0;

  h1 {
    font-size: 18px;
    letter-spacing: 1px;
    margin-top: 1em;
  }
  p {
    margin-top: 1em;
    font-family: "Roboto", sans-serif;
  }
`;

function FeaturesGeneral({
  title = "Mayor empleabilidad",
  explane = "85% de estudiantes afirman que aprender en Crehana mejoró su calidad de vida.",
}) {
  return (
    <FeaturesGeneralStyled>
      <div className="image">
        <img src={cloud} width="60" alt="aprende escuchando" />
      </div>
      <div className="write">
        <h1>{title}</h1>
        <p>{explane}</p>
      </div>
    </FeaturesGeneralStyled>
  );
}

export default FeaturesGeneral;
