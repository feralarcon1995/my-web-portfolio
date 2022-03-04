import React, { useRef } from 'react';
import './contact.css';
import { BiMap } from 'react-icons/bi';
import { MdOutlineMail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Fade } from "react-awesome-reveal";


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_tmefg9a',
      'template_ace0d2d',
      form.current,
      'y5BRhoLwUlY9Hc9Jy')
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'succes',
          text: 'Thanks for your message, I will contact you shortly',
          padding: '3em',
          color: '#fff',
          background: '#422c6c',
          backdrop: `    background: rgba(238, 238, 238, 0.068) `
        })
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };



  return (
    <Fade bottom>

    <section id="contact"  >

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiMap className='contact__option-icon' />
            <h4>Ubication</h4>
            <h5>Buenos Aires, Argentina.</h5>
            <a href="https://www.google.com/maps/place/Buenos+Aires,+CABA/@-34.6299298,-58.6010142,12z/data=!4m5!3m4!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!8m2!3d-34.6036844!4d-58.3815591" target="_blank" rel="noopener noreferrer">See the map</a>
          </article>

          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>feralarcon1995@gmail.com</h5>
            <a href="mailto:feralarcon1995@gmail.com" target="_blank" rel="noopener noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name" aria-describedby="full name">Full Name </label>
          <input type="text" name='name' placeholder='Enter your full name' required />

          <label htmlFor="email" aria-describedby="enter your email">Your Email</label>
          <input type="email" name='email' placeholder='Enter your email' required />

          <label htmlFor="message" aria-describedby="leave a message">Leave a message</label>
          <textarea name="message" rows="7" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>


    </section>
</Fade>
  )
}

export default Contact