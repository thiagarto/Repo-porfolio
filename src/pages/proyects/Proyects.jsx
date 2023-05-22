import React from 'react'
import "./proyects.css"
import CardProyect from '../cardProyect/CardProyect'
import Footer from '../../footer/Footer'
import { useEffect } from 'react'

const Proyects = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className="container3">
     <CardProyect/>
     <div className="linea"></div>
     <Footer/>
    </div>
  )
}

export default Proyects