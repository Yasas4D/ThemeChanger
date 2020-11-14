import React from "react";
import "./aboutMe.css";

export const AboutMe = () => {
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
            <h2>Yasas</h2>
            <p className="lead">Energetic Tec Enthusiastic</p>
          </div>
        </div>
      </div>
    </section>
  );
};
