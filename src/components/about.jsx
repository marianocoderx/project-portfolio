import React from "react";
import ProfileImage from "../images/profile.png";

import "../stylesheets/about.css";

export default function AboutComp() {
  return (
    <>
      <div id="aboutMeSection" className="aboutContainer">
        <div className="selfDescription">
          <div>
            <img src={ProfileImage} alt="ProfileImage" />
          </div>
          <h1>Sobre mí</h1>
          <p>
            Hola! me llamo Mariano. Soy desarrollador Full-Stack, con
            convicciones de trabajar en proyectos web haciendo un énfasis fuerte en la búsqueda
            de la eficiencia y la calidad. Mis mayores premisas para
            emprender los proyectos, implican la búsqueda y la dedicación en todos los
            detalles posibles, como también la disposición en perfeccionarse y ser de
            ayuda para terceros.
            <br />
            <br/>
            Mi experiencia tiene inicio en el ámbito académico, donde comencé
            desarrollando en lenguajes como Java y Python, para luego
            enfocarme en el uso de otras herramientas orientadas al desarrollo
            web (HTML, CSS, Javascript) y librerías (React, Next). En paralelo,
            estoy completando mi Tecnicatura Superior en Informática.
            <br />
            Más sobre mí, puedes ver mis proyectos en el portfolio!
          </p>
        </div>
      </div>
    </>
  );
}
