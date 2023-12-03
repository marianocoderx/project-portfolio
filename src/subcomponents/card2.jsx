import React from "react";
import "../stylesheets/card2.css";

const Card2Comp = ({ title, image, description }) => {
  return (
    <div className="card2">
      <img src={image} alt={title} className="card2-image" />
      <div className="card2-content">
        <h2 className="card2-title">{title}</h2>
        <p className="card2-description">{description}</p>
      </div>
    </div>
  );
};

export default Card2Comp;