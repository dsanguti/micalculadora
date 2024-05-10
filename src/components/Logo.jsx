import React from "react";
import freeCodeCampLogo  from '../img/freecodecamp-logo.svg'

function Logo(){
  return(
    <div className="freecodecamp-logo-contenedor">
    <h4 className="titulo-logo"> FreeCodeCamp</h4>
    <img
      src={freeCodeCampLogo}
      className="freecodecamp-logo"
      alt="logo de freeCodeCamp"
    />
  </div>

  )
}

export default Logo;