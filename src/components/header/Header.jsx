import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import { Fade } from "react-awesome-reveal";


const Header = () => {

  return (
    <Fade bottom>
      <header id="home" >
        <div className="container header__container ">
          <h4>Hello I'm</h4>
          <h1>Fernando Alarcon</h1>
          <h5 className='text-light'>Front End Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <img src={ME} alt="fernando alarcon pic" />
          </div>

          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </div>
      </header>
    </Fade>

  )
}

export default Header