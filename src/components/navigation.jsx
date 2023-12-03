/* navigation.jsx */

import React, { useState, useEffect } from "react";
import "../stylesheets/navigation.css";

export default function NavBarComp() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const options = [
    { id: 1, optionName: 'Sobre mí', targetId: 'aboutMeSection' },
    { id: 2, optionName: 'Servicios', targetId: 'servicesSection' },
    { id: 3, optionName: 'Proyectos', targetId: 'projectsSection' },
    { id: 4, optionName: 'Contacto', targetId: 'contactSection' },
  ];

  const scrollToSection = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1018);
    };

    // Llamamos a la función para establecer el estado inicial
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className={`navigationContainer ${isMenuOpen ? "open" : ""}`}>
        {isMobile && (
          <button onClick={toggleMenu} className={`menuButton ${isMenuOpen ? "open" : ""}`}>
            ☰
          </button>
        )}
        <ul className={`navigationOptions ${isMenuOpen ? "open" : ""}`}>
          {options.map((option) => (
            <li key={option.id} className="navigationItem">
              <a
                href={`#${option.targetId}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(option.targetId);
                }}
              >
                {option.optionName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}



