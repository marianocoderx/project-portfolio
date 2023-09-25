import React from "react";
import ProfileImage from "../images/profile.png"

export default function AboutComp (){
    return (
        <section>
            <div><img src={ProfileImage} alt="ProfileImage" /></div>
            <h1>Sobre mi</h1>
            <p>Desarrollador Full-Stack orientado en desempeño Front-End, con capacidades de trabajar en proyectos web bajo énfasis en la búsqueda de eficiencia, y calidad de los mismos. Mis mayores premisas para emprender los proyectos implican la búsqueda y dedicación en los detalles, como también la disposición en perfeccionarse, y ser de ayuda para terceros.<br/>
            Mi experiencia tiene inicio en el ámbito académico, donde comencé desarrollando en lenguajes como Java y Python, para luego enfocarme en el uso de otras herramientas orientadas al desarrollo web (HTML, CSS, Javascript) y librerias (React, Next). En paralelo, estoy completando mi Tecnicatura Superior en Informática.<br/>
            Mas sobre mi, puedes ver mis proyectos en el portfolio!</p>
        </section>
    )
}