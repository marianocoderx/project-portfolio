import React from "react";
import "../stylesheets/services.css";
import CardComp from "../subcomponents/card";

import Service1 from "../images/service1.png";
import Service2 from "../images/service2.png";
import Service3 from "../images/service3.png";
import Service4 from "../images/service4.png";

export default function ServicesComp() {
  // Array de datos para cada servicio
  const servicesData = [
    {
      title: "Mantenimiento",
      image: Service1,
      buttonText: "Ver más",
    },
    {
      title: "Desarrollo y diseño",
      image: Service2,
      buttonText: "Ver más",
    },
    {
      title: "Gestion de base de datos",
      image: Service3,
      buttonText: "Ver más",
    },
    {
      title: "Desarrollo de API's",
      image: Service4,
      buttonText: "Ver más",
    },
  ];

  return (
    <>
    <div className="mainContainer">
      <div className="mainContainerText">
        <h1>Lorem ipsum</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, soluta?</p>
      </div>
  
      <div className="containerServices">
        <div className="gridContainerx">
          {/* Mapeo a través del array de servicios y renderización de la tarjeta para cada uno */}
          {servicesData.map((service, index) => (
            <div key={index} className="gridItem">
              <div className="imageContainer">
                <CardComp
                  title={service.title}
                  imageUrl={service.image}
                  buttonText={service.buttonText}
                  onButtonClick={() => console.log(`Botón clickeado para ${service.title}`)}
                  imageWidth={110}
                  imageHeight={110}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
}




