// header.jsx
import React from "react";
import ButtonComp from "../subcomponents/button";

import "../stylesheets/header.css";

export default function HeaderComp() {

  const buttonNames = [
    { id: 1, buttonName: 'LinkedIn', link:'https://www.linkedin.com/in/marianobugallo/', hoverBgColor: '#0077B5', hoverColor: '#ffffff' },
    { id: 2, buttonName: 'GitHub', link: 'https://github.com/marianocoderx', hoverBgColor: '#1c1c1c', hoverColor: '#ffffff' }
  ];

  return (
    <header>
      <div className="content">
        <div className="text">
          <h1>Mi objetivo es darte soluciones concretas. Mi propósito es atender a tus necesidades.</h1>
          <p>Desliza para saber más</p>
        </div>
        <div className="buttons">
          {buttonNames.map(button => (
            <ButtonComp
              key={button.id}
              name={button.buttonName}
              link={button.link}
              height='40px'
              width='130px'
              borderRadius='25px'
              border='2px solid aliceblue'
              bgColor='transparent'
              display='flex'
              justifyContent='center'
              alignItems='center'
              color='aliceblue'
              hoverBgColor={button.hoverBgColor}
              hoverColor={button.hoverColor}
            />
          ))}
        </div>
      </div>
    </header>
  );
}




