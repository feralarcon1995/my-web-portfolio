import React from 'react';
import './footer.css';
import LOGO from '../../assets/logo-wbg.png';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer >
      <div className="footer__grid">
        <img src={LOGO} alt="logo" />

        <ul className="permalinks">

          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>

        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/feralarcon1995/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
          <a href="https://github.com/feralarcon1995" target="_blank" rel="noopener noreferrer"><FaGithub /></a>

        </div>
      </div>

      <div className="footer_copyright">
        <small>&copy; Fernando Alarcon. All rigths reserved.</small>
      </div>
    </footer>
  )
}

export default Footer