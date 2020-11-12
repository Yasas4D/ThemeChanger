import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LeftNavigation } from "./componenets/body/left-navigation-pannel/leftNavigation";
import { AboutMe } from "./componenets/body/about-me/aboutMe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LeftNavigation></LeftNavigation>
        <AboutMe></AboutMe>
      </header>
    </div>
  );
}

export default App;
