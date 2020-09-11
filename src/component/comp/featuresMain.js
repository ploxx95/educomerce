import React from "react";
import styled from "styled-components";
import FeaturesGeneral from "../common/featuresGeneral";

const FeaturesMainStyledme = styled.section`
  background-color: var(--color-main-dark-light);
  padding: 3.5em 0 3.5em 0;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1.2em;
`;

function FeaturesMain() {
  return (
    <FeaturesMainStyledme>
      <FeaturesGeneral />
      <FeaturesGeneral />
      <FeaturesGeneral />
      <FeaturesGeneral />
    </FeaturesMainStyledme>
  );
}

export default FeaturesMain;
