
import "./about.css"
import React from 'react'
import Grill from "./Grill"

const About = () => {
  return (
    <div className="container" id="tecnologias">
    <div className="textoEimagen-container">
        <div className="texto">
            <h1>Acerca de mi:</h1>
            <div className="div-grill">
            <h3>&nbsp;&nbsp;&nbsp;Eh estado trabajando en mis conocimientos desde hace   <br/>  un año aproximadamente, actualizando constantemente mis <br/>habilidades, buscando nuevos conocimientos y buenas prácticas.
            </h3>
            </div>
            
            
            
        {/* <div className="curriculum-container">
            <Curriculum/>
          </div> */}
        
          <div className="grill-container"><Grill/></div>
      </div>
  </div>
    </div>
  )
}

export default About
