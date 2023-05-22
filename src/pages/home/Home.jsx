import React from 'react'
import "./home.css"
import Type from '../about/Type'
import { useEffect } from 'react'


const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <section className='home' >
    <div className='header-container' id='head'>
          <div className='header-content'>
            <h1> <div ><span>Hola Soy</span>
                <div className='thiago' style={{  }}>
                       <Type />
                </div>
            </div></h1> <span><pre>Desarrollador  Front-End</pre></span>
            <section class="buttons">
              <a href="https://www.instagram.com/thiagarto/" class="fa fa-instagram" target='_blank' rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"> </a>
              <a href="https://api.whatsapp.com/send?phone=59899456651" class="fa fa-whatsapp" target='_blank' rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1400"> </a>
              <a href="https://github.com/thiagarto" class="fa fa-github" target='_blank' rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600"> </a>
              <a href="https://www.linkedin.com/in/thiago-pirez-0b282b1a1/" class="fa fa-linkedin" target='_blank' rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"> </a>
            </section>
            <div className='icono'><i class="fa-solid fa-hand-point-down fa-beat" style={{'color': '#f8f8f1','font-size':'40px'}}></i></div>
          </div>
    </div>
    </section>
  )
}

export default Home