/* header.jsx */
import React from "react";
import ButtonComp from "../subcomponents/button";
import ProfileImage from "../images/profile.png";

import "../stylesheets/header.css";

export default function HeaderComp() {
  return (
    <header>
      <div className="content">
        <div className="text">
          <h1>Mi objetivo es darte soluciones concretas. Mi propósito es atender a tus necesidades.</h1>
          <p>Desliza para saber más</p>
        </div>
        <div className="buttons">
          <ButtonComp name="LinkedIn" />
          <ButtonComp name="GitHub" />
        </div>
      </div>
    </header>
  );
}
