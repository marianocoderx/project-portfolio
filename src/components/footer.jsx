import React from "react"

import "../stylesheets/footer.css";

export default function FooterComp () {

    const FooterOptions = [
        {id:1, optionName: 'Sobre mi'},
        {id:2, optionName: 'Proyectos'},
        {id:3, optionName: 'Servicios'},
        {id:4, optionName: 'Contacto'},
        {id:5, optionName: 'LinkedIn'},
        {id:6, optionName: 'GitHub'}
    ]

    return (
      <footer className="footerContainer">
        <ul className="footerOptions">
        {FooterOptions.map((option) => (
                    <li key={option.id} className="navigationFooterItem">
                        {option.optionName}
                    </li>
                ))}
        </ul>
        
      </footer>
    )
}