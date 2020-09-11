import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/comp/header";
import Intro from "./component/comp/intro";
import FeaturesMain from "./component/comp/featuresMain";
import Block1 from "./component/comp/block1";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <FeaturesMain />
      <Block1 />
    </div>
  );
}

export default App;
