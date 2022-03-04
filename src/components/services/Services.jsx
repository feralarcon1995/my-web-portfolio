import React from 'react';
import './services.css';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiSass, SiBootstrap, SiJavascript, SiJquery, SiFigma, SiAdobephotoshop, SiReact, SiFirebase, SiMaterialui } from 'react-icons/si';
import { MdDesignServices, MdSecurity, MdOutlineSupportAgent } from 'react-icons/md';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BsPeopleFill, BsFileTextFill } from 'react-icons/bs'
import { Fade } from "react-awesome-reveal";

const Services = () => {
  return (

    <Fade bottom>

      <section id="services" >
        <h5>Waht I Offer</h5>
        <h2>Services</h2>

        <div className="container services__container">

          <article className="service">
            <div className="service__grid">

              <div className="service_item">
                <MdDesignServices className="service-icon"/>
                <h3>PROFESSIONAL DESIGNS</h3>
                <p>
                  Modern, minimalist designs, we adapt your idea and make it a reality.
                </p>
              </div>

              <div className="service_item">
                <HiOutlineDesktopComputer className="service-icon"/>
                <h3>MOBILE OPTIMIZATION</h3>
                <p>
                  Your website is automatically optimized for mobile, so your visitors can view it comfortably from any mobile device or PC.                </p>
              </div>

              <div className="service_item">
                <BsPeopleFill className="service-icon"/>
                <h3>SOCIAL NETWORKS</h3>
                <p>
                  MYour website and social media profiles can connect. Import your favorite images directly to your website from your accounts easily.
                </p>
              </div>

              <div className="service_item">
                <BsFileTextFill className="service-icon"/>
                <h3>CONTACT FORMS</h3>
                <p>
                  Add a contact form and a link to Google Maps so everyone can reach you and find you wherever they are.
                </p>
              </div>

              <div className="service_item">
                <MdSecurity className="service-icon"/>
                <h3>SSL SECURITY</h3>
                <p>
                  With state-of-the-art security servers and protocols, security is guaranteed for you and your visitors.
                </p>
              </div>


              <div className="service_item">
                <MdOutlineSupportAgent className="service-icon"/>
                <h3>FASTER SUPPORT</h3>
                <p>
                If you have any questions, there will be, site maintenance, and site changes.
                </p>
              </div>

            </div>

            <div className="experiencie__details">
              <h3>FRONTEND SKILLS</h3>
              <div className="experience__item">
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

          

        </div>
      </section>
    </Fade>
  )
}

export default Services