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
          text: 'Gracias por el mensaje, me contactare pronto contigo.',
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

    <section id="contact" className=' bg-dark' >

      <h5>¿Que esperas?</h5>
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BiMap className='contact__option-icon' />
            <h4>Ubicacion</h4>
            <h5>Buenos Aires, Argentina.</h5>
            <a href="https://www.google.com/maps/place/Buenos+Aires,+CABA/@-34.6299298,-58.6010142,12z/data=!4m5!3m4!1s0x95bcca3b4ef90cbd:0xa0b3812e88e88e87!8m2!3d-34.6036844!4d-58.3815591" target="_blank" rel="noopener noreferrer">Ver el mapa</a>
          </article>

          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>feralarcon1995@gmail.com</h5>
            <a href="mailto:feralarcon1995@gmail.com" target="_blank" rel="noopener noreferrer">Enviar Mensaje</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name" aria-describedby="full name">Nombre Completo </label>
          <input type="text" name='name' placeholder='Escribe tu nombre completo' required />

          <label htmlFor="email" aria-describedby="Tu email">Tu Email</label>
          <input type="email" name='email' placeholder='escribe tu email' required />

          <label htmlFor="message" aria-describedby="Dejame un mensaje">Dejame Un Mensaje</label>
          <textarea name="message" rows="7" placeholder='Deja tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>


    </section>
</Fade>
  )
}

export default Contact