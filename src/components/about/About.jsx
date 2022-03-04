import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png';
import { FaAward, FaFolderOpen } from 'react-icons/fa';
import { Fade } from "react-awesome-reveal";


const About = () => {


  return (
    <Fade bottom>
      <section id="about" >

        <h5>Get To know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="fer pick" />
            </div>
          </div>

          <div className="about__content">

            <div className="about__cards">
              <article className="about__card c1">
                <FaAward className='about__icon' />
                <h5>Experience</h5>
                <small>2+ years working</small>
              </article>

              <article className="about__card c2">
                <FaFolderOpen className='about__icon' />
                <h5>Proyects</h5>
                <small>20+ Completed Proyects</small>
              </article>



            </div>
            <p>I'm Fernando Alarcon from Argentina .
              Always in search of new challenges in a development
              team, where I can add value from my
              experience and knowledge within the Front-End
              area also continue learning and growing day by
              day. In parallel I study english to complement my stack in my professional field.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          </div>
        </div>

      </section>
    </Fade>


  )
}

export default About