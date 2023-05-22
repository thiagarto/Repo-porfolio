import React from 'react'
import './cardProyect.css'
import cardImg1 from '../../images/Netflix-work.png'
import cardImg2 from '../../images/Sonrisitas-work.png'
import cardImg3 from '../../images/cararra.png'

const CardProyect = () => {
  return (
<div className='containerCard'>
 
        <div className="card">
            <div className="face front">
                 <img alt='imagen1' src={cardImg1} />
                 <h3>Netflix-App</h3>
            </div>
            <div className="face back">
                <h3>Netflix-App</h3>
                <p>Página copia de la pantalla principal de Netflix, API utilizada:TMDB themoviedb.org</p>
                <div className="link">
                    <a href="https://netflix-clone2-3xdi.onrender.com/" target='_blank' rel="noreferrer" >Demo</a>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face front">
                 <img alt='imagen2' src={cardImg2} />
                 <h3>Merendero Page</h3>
            </div>
            <div className="face back">
                <h3>Merendero Page</h3>
                <p>Página creada para un amigo, sirve para realizar donaciones, al igual que para mostrar sus diversas características.</p>
                <div className="link">
                    <a href="https://merendero-init.vercel.app/" target='_blank' rel="noreferrer">Demo</a>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face front">
                 <img alt='imagen3' src={cardImg3} />
                 <h3>Netflix-3</h3>
            </div>
            <div className="face back">
                <h3>Netflix-App</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus totam doloribus ab! Ex vero harum esse vel corporis provident, dicta, necessitatibus repudiandae laudantium, aspernatur numquam recusandae distinctio pariatur placeat rem?</p>
                <div className="link">
                    <a href="/#">Demo</a>
                </div>
            </div>
        </div>



    </div>
  )
}

export default CardProyect