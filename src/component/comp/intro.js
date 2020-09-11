import React from "react";
import styled from "styled-components";
import ButtonMain from "../common/buttonMain";
const IntroStyled = styled.section`
  background-color: #0f1124;
  .wrapper-intro {
    margin: 0 1em 0 1em;
    padding: 2.5em 2em 2em 2em;
    display: flex;
    flex-direction: column;
    gap: 1.4em;
  }

  .title {
    font-family: "Gilroy-ExtraBold 800", sans-serif;
    font-size: 25px;
    color: white;

    line-height: 44px;
  }
  .texto {
    font-family: "Roboto", sans-serif;
    font-size: 19px;
    color: white;
    text-align: center;
    line-height: 28px;
  }
  .button-intro {
    padding-top: 0.7em;
  }
  .image {
    background-image: url("https://static.crehana.com/static/img/homepage/hero/mobile.jpg");
    background-size: cover;
    padding-bottom: 43%;
  }
`;

function Intro() {
  return (
    <IntroStyled>
      <div class="wrapper-intro">
        <div className="title">
          <h1>Aprende habilidades para tu futuro</h1>
        </div>
        <div className="texto">
          <p>
            Cursos y especializaciones online. Conviértete en el profesional que
            el mundo de hoy busca.
          </p>
        </div>
        <div className="button-intro">
          <ButtonMain>Empieza ahora</ButtonMain>
        </div>
      </div>
      <div className="image"></div>
    </IntroStyled>
  );
}

export default Intro;
