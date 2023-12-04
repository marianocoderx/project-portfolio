/*tools.jsx */

import React from "react";
import "../stylesheets/tools.css";

import BootstrapLogo from "../images/Bootstrap.png";
import CssLogo from "../images/CSS.png";
import HtmlLogo from "../images/HTML.png";
import JavascriptLogo from "../images/JS.png";
import NodeLogo from "../images/NodeJS.png";
import PythonLogo from "../images/Python.png";
import ReactLogo from "../images/ReactJS.png";
import SassLogo from "../images/Sass.png";

import Image1 from "../images/codingBlack.png";
import Image2 from "../images/dataStructureBlack.png";

export default function ToolsComp() {
  const images = [
    BootstrapLogo,
    CssLogo,
    HtmlLogo,
    JavascriptLogo,
    NodeLogo,
    PythonLogo,
    ReactLogo,
    SassLogo,
  ];

  return (
    <>
      <div className="grid-BigContainer">
        <div className="text-grid-container">
          <div>
            <img src={Image1} alt="Icon1" />
          </div>
          <h2>Desarrollo Front-end</h2>
          <p>
            Manejo de herramientas de hipertexto y diseño (HTML,CSS), como de
            programación Front-End (JavaScript). Conocimiento y manejos de
            librerias (Bootstrap, Angular, y Tailwind CSS), como de Frameworks
            (React Js, Next). Proyectos aplicados a distintas áreas.
          </p>

          <div>
            <img src={Image2} alt="Icon2" />
          </div>
          <h2>Desarrollo Back-end</h2>
          <p>
            Capacidades en lenguajes de Programación como Python y Java aplicado
            a estructuras de datos. Desarrollo en API's Y manejo de Node.JS,
            junto con frameworks orientados a gestión de Base de datos (MySQL &
            PstGRESQL). Proyectos aplicados a diversas áreas.
          </p>
        </div>

        <div className="gridContainer">
          <div className="image-grid">
            {images.map((image, index) => (

              <div key={index} className="image-container">
                {index === images.length - 1 ? (
                  <img
                    src={image}
                    alt={`Icon${index + 3}`}
                    className="Icon"
                    style={{ width: '200px', height: 'auto', padding: '1em' }}
                  />
                ) : (
                  <img src={image} alt={`Icon${index + 3}`} className="Icon" />
                )}
              </div>

            ))}
            
          </div>
        </div>
      </div>
    </>
  );
}

