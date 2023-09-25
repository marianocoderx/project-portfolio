/*header.jsx */

/*imported components */
import React from "react"
import ButtonComp from "../subcomponents/button"

/*imported stylesheets*/
import "../stylesheets/navigation.css";

export default function NavBarComp () {

    const options = [
        {id:1, optionName: 'Sobre mi'},
        {id:2, optionName: 'Proyectos'},
        {id:3, optionName: 'Servicios'}
    ]
    
    return (
        <>
        <nav className="navigationContainer">
            <ul className="navigationOptions">
                {options.map((option) => (
                    <li key={option.id} className="navigationItem">
                        {option.optionName}
                    </li>
                ))}    
            </ul>
            <ButtonComp name='Contacto'></ButtonComp>
        </nav>
        </>
    )
}