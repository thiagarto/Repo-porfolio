import React from 'react'
import './grill.css'
const Grill = () => {
  return (
    
    <div className='contenedor2div'>
    <div className='div-titulo'><h1 className='titulo'>Tecnologías</h1></div>
  <div className='gallery-container'>
        <div className='gallery-item'>  
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" class="gallery-img" alt="html"></img>
        </div>
        <div className='gallery-item'> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" class="gallery-img" alt="css"></img>
        </div>
        <div className='gallery-item'> 
            <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" class="gallery-img" alt="JavaScript"></img>
        </div>
        
        <div className='gallery-item'> 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" class="gallery-img" alt="Bootstrap"></img>
        </div>
        <div className='gallery-item'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="gallery-img" alt="React"></img>
        </div>
        <div className='gallery-item'>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="gallery-img" alt="NodeJs"></img>
        </div>
        
        </div>
  </div>
  )
}

export default Grill