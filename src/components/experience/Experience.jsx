import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End Dvelopment</h3>

          <div className="experience__content">
            <article className="experiencie__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="">
                <h4>HTML</h4>
                <small className='text-light'>2+ years</small>
              </div>
            </article>

            <article className="experiencie__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="">
                <h4>CSS</h4>
                <small className='text-light'>2+ years</small>
              </div>
            </article>

            <article className="experiencie__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="">
                <h4>SASS - SCSS</h4>
                <small className='text-light'>2+ years</small>
              </div>
            </article>

            <article className="experiencie__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="">
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>2+ years</small>
              </div>
            </article>

            <article className="experiencie__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="">
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>2+ years</small>
              </div>
            </article>

            <article className="experiencie__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="">
                <h4>JQUERY</h4>
                <small className='text-light'>1+ years</small>
              </div>
            </article>

            <article className="experiencie__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div className="">
                <h4>REACTJS</h4>
                <small className='text-light'>1+ years</small>
              </div>
            </article>

            <article className="experiencie__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="">
                <h4>FIREBASE</h4>
                <small className='text-light'>1+ years</small>
              </div>
            </article>

            <article className="experiencie__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div className="">
                <h4>GIT</h4>
                <small className='text-light'>2+ years</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience