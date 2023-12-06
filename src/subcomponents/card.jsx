// CardComp.jsx
import React from "react";
import ButtonComp from "../subcomponents/button"; // Ajusta la ruta según tu estructura de archivos
import "../stylesheets/card.css";

export default function CardComp({ title, imageUrl, buttonText, onButtonClick, imageWidth, imageHeight }) {
  return (
    <div className="card">
      <div className="card-content">
        <img
          src={imageUrl}
          alt="Card Image"
          className="card-image"
          style={{
            width: imageWidth,
            height: imageHeight,
            margin: "0 auto", // Centra la imagen
            display: "block", // Asegura que la imagen se comporte como un bloque
          }}
        />
        
      
        {/* Añade padding al contenedor y centra el contenido */}
        <h2 style={{ margin: 0, marginBottom: "10px" }}>{title}</h2>
        {/* Añade margen inferior al título */}
      </div>
      
      <div className="max-button-container">

        <div className="button-container">
          <ButtonComp
            name={buttonText}
            link="#"
            height="40px"
            width="70%"
            borderRadius="25px"
            border="2px solid aliceblue"
            bgColor="transparent"
            hoverBgColor="aliceblue"
            color="#fff"
            hoverColor="black"
            onClick={onButtonClick}
            justifyContent="center"
            alignItems="center"
            display="flex"
          />
        </div>

      </div>

    </div>
  );
}