import React from 'react'
import './curriculum.css'
import iconoFlotante from '../../images/iconoFlotante.png'
import cv from '../../cv/CurriculumThiago2023.pdf'

const Curriculum = () => {
  return (
  <>
    <div className="container">
        <div className='img-container'>
          <div className='curriculum2'>
                <a href={cv} download='CurriculumThiago2023.pdf' >
                  <button className='curriculum'><p>CV</p></button>
                </a>
                <img src={iconoFlotante} alt='iconoFlotante' className='iconoFlotante' />
          </div>
        </div>
       </div>
       </>
  )
}

export default Curriculum