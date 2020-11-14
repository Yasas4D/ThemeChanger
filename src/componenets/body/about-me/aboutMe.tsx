import React from "react";
import { useThemeContextCustomHook } from "../../use-context/ThemeContextCustomHook";
import "./aboutMe.css";

export const AboutMe = () => {
  const {
    userId,
    customerId,
    setUserId,
    setCustomerId,
  } = useThemeContextCustomHook()!;
  return (
    <section className="text-center about">
      <h1>About Me</h1>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 col-sm-6 col-ex-12 about-item wow lightSpeedIn"
            data-wow-offset="200"
          >
            <span className="fa fa-group"></span>
            <h2>{userId}</h2>
            <p className="lead">Energitic Tec Enthusastic</p>
          </div>
        </div>
      </div>
    </section>
  );
};
