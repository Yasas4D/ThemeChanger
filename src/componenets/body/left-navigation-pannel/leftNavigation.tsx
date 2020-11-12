import React from "react";
import "./navigation.css";

export const LeftNavigation = () => {
  return (
    <div>
      <body>
        <div className="pure-container" data-effect="pure-effect-slide">
          <input
            type="checkbox"
            id="pure-toggle-left"
            className="pure-toggle"
            data-toggle="left"
          />

          <label
            className="pure-toggle-label"
            htmlFor="pure-toggle-left"
            data-toggle-label="left"
          >
            <span className="pure-toggle-icon"></span>
          </label>

          <nav className="pure-drawer" data-position="left">
            <br></br>
            <br></br>
            <p>Insert your off-canvas content for the left drawer here</p>
            <div className="menu">
              <ul>
                <li>
                  <a href="#">Menu Item</a>
                </li>
                <li>
                  <a href="#">Menu Item</a>
                </li>
              </ul>
            </div>
          </nav>

          <label
            className="pure-overlay"
            htmlFor="pure-toggle-left"
            data-overlay="left"
          ></label>
        </div>
      </body>
    </div>
  );
};
