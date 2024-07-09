import React from "react";

import "../stylesheets/footer.css";

export default function FooterComp() {
  const FooterOptions = [
    { id: 1, optionName: 'Sobre mi' },
    { id: 2, optionName: 'Proyectos' },
    { id: 3, optionName: 'Servicios' },
    { id: 4, optionName: 'Contacto' },
    { id: 5, optionName: 'LinkedIn', link: 'https://www.linkedin.com/in/marianobugallo' },
    { id: 6, optionName: 'GitHub', link: 'https://github.com/marianocoderx' },
  ];

  return (
    <footer className="footerContainer">
      <ul className="footerOptions">
        {FooterOptions.map((option) => (
          <li key={option.id} className="navigationFooterItem">
            {option.link ? (
              <a href={option.link} target="_blank" rel="noopener noreferrer">
                {option.optionName}
              </a>
            ) : (
              option.optionName
            )}
          </li>
        ))}
      </ul>

      <div className="copyright">
        <p>© 2024 Mariano Bugallo.</p>
      </div>
    </footer>
  );
}
