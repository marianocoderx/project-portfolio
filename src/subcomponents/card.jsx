// card.jsx
import React from "react";
import "../stylesheets/card.css";

export default function CardComp({ width, height, img, alt, title, text, tags }) {
  const boxSize = { width, height };

  const renderImage = () => {
    return img ? <img className="cardImage" src={img} alt={alt} /> : null;
  };

  const renderTags = () => {
    if (!tags || tags.length === 0) {
      return null;
    }

    return (
      <p>
        <strong>Tags:</strong> {tags.join(", ")}
      </p>
    );
  };

  return (
    <figure className="bodyFigure" style={boxSize}>
      <div className="cardContent">
        <figcaption className="bodyImage">
          {renderImage()}
          <h2 className="cardTitle">{title}</h2>
        </figcaption>
      </div>
      <p>{text}</p>
      {renderTags()}
    </figure>
  );
}

