import React from 'react';
import './header.css';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import { Fade } from "react-awesome-reveal";


const Header = () => {

  return (
    <Fade bottom>
      <header id="home" >
        <section className="header__container bg-dark">
          <div className="circle-b"></div>
          <div className="circle-c"></div>
          <article className='header__container-article'>
            <p>Hola, soy</p>
            <h1 className='text-gradient'>Fernando Alarcon</h1>
            <p className='text-light'>Desarrollador Web Front End</p>
            <CTA />
            <HeaderSocials />
          </article>

          <article className="header__img">
            <img src="https://i.ibb.co/YPc94rQ/bg1.png" alt="handcode mobile" className='img2'/>
            <img src="https://i.ibb.co/D1zQwT2/bg3.png" alt="pinder mobile" className='img1'/>
            <img src="https://i.ibb.co/YL5CLP7/bg2.png" alt="viajaya mobile" className='img3'/>
            <img src='https://i.ibb.co/BGy3xvC/bg.png' alt="header pic" className='header-mobile'/>
          </article>
        </section>
      </header>
    </Fade>

  )
}

export default Header