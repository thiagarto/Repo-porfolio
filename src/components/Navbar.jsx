import {Link} from "react-router-dom"
import "./navbar.css"
import logo from "../images/logo T.png"

const Navbar = () => {


  return (
    <div className="flex-container">
      <div className="logo">
      <Link to="/"  >
         <img src={logo} alt="imagen" className="" /> 
        </Link><h1>hiago</h1>
      </div>
        
       <nav className="nav">

            <a href="#tecnologias" className="letters" >
              <p>Tecnologías</p>
            </a>
            <Link to="/proyectos" className="letters" >
            <p>Proyectos</p> 
            </Link>
            <a href="#contact" className="letters" >
              <p>Contacto</p>
            </a>
            <Link to="/" className="letters" >
            <p>Inicio</p> 
            </Link>
       </nav>
    </div>
  )
}

export default Navbar