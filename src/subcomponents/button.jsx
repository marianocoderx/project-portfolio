import React from "react";

import "../stylesheets/button.css";

export default function ButtonComp (props) {
  return (
    <>
      <button className="buttonContainer">
        {props.name}
      </button>
    </>
  )
}