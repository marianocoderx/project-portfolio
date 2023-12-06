import React from "react";
import "../stylesheets/services.css";
import { Button, Card } from "react-bootstrap";

import Service1 from "../images/service1.png";
import Service2 from "../images/service2.png";
import Service3 from "../images/service3.png";
import Service4 from "../images/service4.png";

const servicesData = [
  {
    title: "Mantenimiento",
    image: Service1,
  },
  {
    title: "Desarrollo y diseño",
    image: Service2,
  },
  {
    title: "Gestion de base de datos",
    image: Service3,
  },
  {
    title: "Desarrollo de API's",
    image: Service4,
  },
];

export default function ServicesComp() {
  return (
    <>
      <div className="mainContainer">
        <div className="mainContainer-text">
          <h1>Necesitas algo? Puedo ayudarte...</h1>
          <p>Soluciones a medida a tus necesidades.</p>
        </div>

        <div className="mainContainer-body">

          {servicesData.map((service, index) => (

            <div className="mainContainer-grid">

              <Card>

                  <div className="mainContainer-grid-img">

                    <Card.Img variant="top" src={service.image} />

                  </div>

                <Card.Body>

                  <div className="mainContainer-grid-text">

                     <Card.Title>{service.title}</Card.Title>

                  </div>


                  <div className="mainContainer-grid-button">

                    <Button 
                      variant="primary" 
                      style={{ 
                        backgroundColor:'transparent',
                        border:'2px solid aliceblue',
                        width: '150px', 
                        height: '40px', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        margin: 'auto'  // Añade esta línea para centrar horizontalmente
                      }}
                    >
                    Ver más
                    </Button> 


                  </div>

                </Card.Body>

              </Card>

            </div>

          ))}
          
        </div>
      </div>
    </>
  );
}




