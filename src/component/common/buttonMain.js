import React from "react";
import styled from "styled-components";

const ButtonMainStyled = styled.button`
  width: 100%;
  /* color secondary button */
  background-color: var(--color-primary-light);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 1em 0 1em 0;
  a {
    text-decoration: none;
    color: white;
    font-family: "Gilroy-ExtraBold 800";
    font-size: 1.2em;
  }
`;

function ButtonMain(props) {
  return (
    <ButtonMainStyled>
      <a className="button" href="#">
        {props.children}
      </a>
    </ButtonMainStyled>
  );
}

export default ButtonMain;
