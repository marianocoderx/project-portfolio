import React from "react";
import "../stylesheets/projects.css"
import Card2Comp from "../subcomponents/card2";

export default function ProjectsComp (){
  // Asegúrate de reemplazar estos valores con los datos reales que deseas pasar a cada componente Card2Comp
  const cardsData = [
    { title: "Título 1", image: "Imagen1.jpg", description: "Descripción 1" },
    { title: "Título 2", image: "Imagen2.jpg", description: "Descripción 2" },
    { title: "Título 3", image: "Imagen3.jpg", description: "Descripción 3" },
  ];

  return(
    <>
    <div id="projectsSection" className="mainContainerProjects">

      <div className="titleContainerProjects">
        <h1>Algunos de mis proyectos..</h1>
        <p>Trabajos recientes. Explora más en el repositorio de GitHub.</p>
      </div>

      <div className="cardsContainerProjects">
        {cardsData.map((card, index) => (
          <Card2Comp key={index} title={card.title} image={card.image} description={card.description} />
        ))}
      </div>

    </div>
    </>
  )
}