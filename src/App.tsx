import React from "react";
import "./App.css";
import { LeftNavigation } from "./componenets/body/left-navigation-pannel/leftNavigation";
import { AboutMe } from "./componenets/body/about-me/aboutMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeChanger } from "./componenets/body/theme-changer/theme-changer";
import { Welcome } from "./componenets/body/main/welcome";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <LeftNavigation></LeftNavigation>
            <Switch>
              <Route exact path="/">
                <Welcome />
              </Route>
              <Route path="/about">
                <AboutMe />
              </Route>
              <Route path="/themeChanger">
                <ThemeChanger></ThemeChanger>
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
