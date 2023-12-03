import React from "react";
import CardComp from "../subcomponents/card";
import "../stylesheets/services.css";

import imgService1 from "../images/img_service1.jpg";
import imgService2 from "../images/img_service2.jpg";
import imgService3 from "../images/img_service3.jpg";
import imgService4 from "../images/img_service4.jpg";

export default function ServicesComp() {
  const servicesInformation = [
    { id: 1, service: 'Desarrollo y diseño', img: imgService1},
    { id: 2, service: 'Mantenimiento y servicio', img: imgService2},
    { id: 3, service: "Desarrollo de API's", img: imgService3},
    { id: 4, service: "Gestión de bases de datos", img: imgService4}
  ];

  return (
    <>
      <div id="servicesSection" className="servicesContainer">
        <div className="text-servicesContainer">
          <h1>¿Necesitas ayuda? Puedo darte soluciones.</h1>
          <p>Puedo contribuir a tus proyectos, para que tus aplicaciones sean óptimas.</p>
        </div>

        <div className="gridServices">
          {servicesInformation.map((service) => (
            <CardComp
              key={service.id}
              title={service.service}
              img={service.img}
              width="380px"
              height="250px"
              />
            ))}
          </div>
      </div>
    </>
  );
}

