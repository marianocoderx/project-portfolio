// subcomponents/button.jsx
import React, { useState } from "react";

export default function ButtonComp({ name, link, height, width, borderRadius, border, bgColor, hoverBgColor, display, justifyContent, alignItems, color, hoverColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    height,
    width,
    borderRadius,
    border,
    backgroundColor: isHovered ? hoverBgColor : bgColor,
    display,
    justifyContent,
    alignItems,
    color: isHovered ? hoverColor : color,
    textDecoration: 'none',
    transition: 'background-color 0.3s, color 0.3s', // Añade una transición suave
  };

  const handleClick = () => {
    window.open(link, "_blank"); // Abre el enlace en una nueva pestaña
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {name}
    </button>
  );
}


