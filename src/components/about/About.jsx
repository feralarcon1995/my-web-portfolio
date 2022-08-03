import React from 'react';
import './about.css';
import ME from '../../assets/me.webp';
import { FaAward, FaFolderOpen, FaCss3Alt, FaPython, FaBootstrap, FaGitSquare, FaReact, FaFigma } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript, SiSass, SiMaterialui, SiJquery, SiDjango, SiFirebase, SiSqlite, SiAdobephotoshop } from 'react-icons/si'
import { Fade } from "react-awesome-reveal";


const About = () => {


  return (
    <Fade bottom>
      <section id="about" className='bg-dark'>

        <h5>¿Quien soy?</h5>
        <h2>Sobre Mi</h2>

        <div className=" about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="fer pick" />
            </div>
          </div>

          <div className="about__content">

            <div className="about__cards">
              <article className="about__card c1">
                <FaAward className='about__icon' />
                <h5>Experiencia</h5>
                <small>2+ años trabajando</small>
              </article>

              <article className="about__card c2">
                <FaFolderOpen className='about__icon' />
                <h5>Proyectos</h5>
                <small>20+ Proyectos Terminados</small>
              </article>

            </div>
            <p>Hola soy Fernando Alarcón de Argentina. Siempre estoy en búsqueda de nuevos retos en un equipo de desarrollo, donde pueda aportar valor desde mi experiencia y conocimiento dentro del área de Front-End,  además complementar con seguir aprendiendo día a día. Paralelamente estudio inglés para mejorar en el campo laboral.</p>

          
          </div>
        </div>

        <article className="stack">
              <h5>Mi stack de tecnologias:</h5>

              <div className="stack__list">
                <ul>
                  <li>JAVASCRIPT <SiJavascript /></li>
                  <li>PYTHON <FaPython /></li>
                  <li>HTML5 <AiFillHtml5 /></li>
                  <li>CSS3 <FaCss3Alt /></li>
                  <li>SASS <SiSass /></li>
                  <li>BOOTSTRAP <FaBootstrap /></li>
                  <li>MATERIAL UI <SiMaterialui /></li>
                  <li>GIT <FaGitSquare /></li>
                  <li>REACTJS <FaReact /></li>
                  <li>JQUERY <SiJquery /></li>
                  <li>DJANGO <SiDjango /></li>
                  <li>FIREBASE <SiFirebase /></li>
                  <li>SQLITE <SiSqlite /></li>
                  <li>FIGMA <FaFigma /></li>
                  <li>PHOTOSHOP <SiAdobephotoshop /></li>
                </ul>
              </div>

            </article>
      </section>
    </Fade>


  )
}

export default About