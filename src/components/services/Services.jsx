import React from 'react';
import './services.css';
import IMG from '../../assets/service.jfif';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiSass, SiBootstrap, SiJavascript, SiJquery, SiFigma, SiAdobephotoshop, SiReact, SiFirebase, SiMaterialui } from 'react-icons/si';

const Services = () => {
  return (
    <section id="services">
      <h5>Waht I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
            <p>Creation of websites, with the best practices to create the best solutions that adapt to what you image, sites with modern design that adapt to all types of screens, with an optimized seo for their positioning, also save data and products in the cloud.</p>
          </div>


          <div className="experience__frontend">
            <h3>Front End Skills</h3>
            <div className="experiencie__details">
              <Tooltip title="HTML" placement="bottom-start">
                <IconButton>
                  <AiFillHtml5 className='experience__details-icon' />
                </IconButton>

              </Tooltip>
              <Tooltip title="CSS" placement='bottom-start'>
                <IconButton>
                  <FaCss3Alt className='experience__details-icon' />

                </IconButton>

              </Tooltip>
              <Tooltip title="SASS" placement='bottom-start'>
                <IconButton>
                  <SiSass className='experience__details-icon' />

                </IconButton>

              </Tooltip>
              <Tooltip title="BOOTSTRAP" placement='bottom-start'>
                <IconButton>
                  <SiBootstrap className='experience__details-icon' />

                </IconButton>

              </Tooltip>
              <Tooltip title="MATERIAL UI" placement='bottom-start'>
                <IconButton>
                  <SiMaterialui className='experience__details-icon' />

                </IconButton>

              </Tooltip>

              <Tooltip title="JAVASCRIPT" placement='bottom-start'>
                <IconButton>
                  <SiJavascript className='experience__details-icon' />

                </IconButton>

              </Tooltip>
              <Tooltip title="JQUERY" placement='bottom-start'>
                <IconButton>
                  <SiJquery className='experience__details-icon' />

                </IconButton>

              </Tooltip>
              <Tooltip title="REACTJS" placement='bottom-start'>
                <IconButton>
                  <SiReact className='experience__details-icon' />

                </IconButton>

              </Tooltip>
              <Tooltip title="FIREBASE" placement='bottom-start'>
                <IconButton>
                  <SiFirebase className='experience__details-icon' />

                </IconButton>

              </Tooltip>

              <Tooltip title="GIT" placement='bottom-start'>
                <IconButton>
                  <FaGitAlt className='experience__details-icon' />

                </IconButton>

              </Tooltip>

              <Tooltip title="ADOBE PHOTOSHOP" placement='bottom-start'>
                <IconButton>
                  <SiAdobephotoshop className='experience__details-icon' />

                </IconButton>

              </Tooltip>

              <Tooltip title="FIGMA" placement='bottom-start'>
                <IconButton>
                  <SiFigma className='experience__details-icon' />

                </IconButton>

              </Tooltip>




            </div>
          </div>
        </article>

        <article className='service__img'>
          <img src={IMG} alt="service img" />
        </article>

      </div>
    </section>
  )
}

export default Services