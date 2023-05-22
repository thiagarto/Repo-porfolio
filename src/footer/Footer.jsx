import React from 'react'
import './footer.css'
import T from '../images/logo T.png'

const Footer = () => {
  let fecha = new Date().getFullYear();
  return (
    <footer className='pie-pagina' >
        <div className='grupo-1' id='contact'>
          <div className="box">
            <figure>
              <a href="#logo">
                <img src={T} alt="logo de T" />
              </a>
            </figure>
          </div>
          <div className="box">
           
          </div>
          <div className="box">
            <h2>CONTACTO</h2>
            <div className="red-social">
            <a href="https://www.instagram.com/thiagarto/" class="fa fa-instagram" target='_blank' rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"> </a>
              <a href="https://api.whatsapp.com/send?phone=59899456651" class="fa fa-whatsapp" target='_blank' rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"> </a>
              <a href="https://github.com/thiagarto" class="fa fa-github" target='_blank' rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"> </a>
              <a href="https://www.linkedin.com/in/thiago-pirez-0b282b1a1/" class="fa fa-linkedin" target='_blank' rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"> </a>
              
            </div>
          </div>
        </div>
        <div className="grupo-2">
          <small>&copy; {fecha} <b>Thiago Pirez</b> - Todos los Derechos Reservados.</small>
        </div>
    </footer>
  )
}

export default Footer