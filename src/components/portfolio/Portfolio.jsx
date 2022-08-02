import React from 'react';
import './portfolio.css';
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {

  const workData = [
    {
      id: 1,
      title: 'Linkin Park Web',
      img: 'https://i.ibb.co/4mYYfdk/lp.png',
      descrip: 'Web realiada como proyecto final en el curso de desarrollo web en coderhouse, en el cual es un tributo a la banda de rock alternativo de Estados Unidos llamada Linkin Park. En este proyecto encontraras, informacion de la banda, discos , una galeria. El maquetado se realizaco con HTML5, CSS y SASS para los estilos, bootstrap para un mayor dinamismo, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.',
      demo: 'https://feralarcon1995.github.io/ProyectoFinalCoderHouse/',
      class: 'p-dark portfolio__item',
      class_item: 'portfolio__content dark'
    },
    {
      id: 2,
      title: 'Viaja Ya',
      img: 'https://i.ibb.co/bb6XGFz/v1.png',
      descrip: 'Web realiada como proyecto final en el curso de Javascript en coderhouse, el cual es un simulador de gastos con la tematica de viajes. En este proyecto encontraras, informacion de distintos destinos, en el cual haciendo ciertas combinaciones encontras descuentos. El maquetado se realizaco con HTML5, CSS y SASS para los estilos, javascript para manejo del DOM y junto a la api del dolar podes ver actualizado el precio del mismo en el momento que vicites la pagina, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.',
      demo: 'https://feralarcon1995.github.io/ViajaYa/',
      class: 'p-dark portfolio__item p-green',
      class_item: 'portfolio__content dark'
    },
    {
      id: 3,
      title: 'Tienda Blu',
      img: 'https://i.ibb.co/xM50QBC/t1.png',
      descrip: 'Web realiada como proyecto final en el curso de ReactJs en coderhouse, el cual es un Ecommerce de indumentaria deportiva. En este proyecto encontraras, distintos productos. En este proyecto se utilizo firebase para crear la base de datos de los productos, se usaron hooks para traerlos, un carrito de compras y cuando se confirma la compra se envia un ticket con el numero de gestion, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.',
      demo: 'https://feralarcon1995.github.io/TiendaBlu/',
      class: 'p-dark portfolio__item p-blue',
      class_item: 'portfolio__content dark'

    },
    {
      id: 4,
      title: 'Gif App',
      img: 'https://i.ibb.co/hZXC4Kh/g1.png',
      descrip: 'Web realiada como proyecto de practica con ReactJs , el cual esta conectado a una api de giphy. En este proyecto encontraras, una barra de busqueda en el cual podras traer los primeros cinco gif que conecten con las palabras introducidas, se usaron hooks y fetch para la interaccion, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.',
      demo: 'https://feralarcon1995.github.io/Gifs-App/',
      class: 'p-dark portfolio__item',
      class_item: 'portfolio__content dark'

    },
    {
      id: 5,
      title: 'Ka Wirth',
      img: 'https://i.ibb.co/nBGMt9w/kw.png',
      descrip: 'Web realiada para emprendimiento de una estetica ,el cual esta maqueteado con HTML5, CSS para los estilos, animaciones para un mayor dinamismo e interactividad , boton que conecta al whatsapp del local para poder agendar una cita, tambien es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.',
      demo: 'https://feralarcon1995.github.io/kawirthboedo/',
      class: 'p-dark portfolio__item  p-pink',
      class_item: 'portfolio__content dark'

    },
    {
      id: 6,
      title: 'Pet Land',
      img: 'https://i.ibb.co/x5bzVqB/pet.png',
      descrip: 'Web realiada para clase de sass, mostrando como pasar un css armado a codigo sass para compilar correctamente, anidacion y estructura de sass.',
      demo: 'https://feralarcon1995.github.io/pet-land/',
      class: 'p-dark portfolio__item',
      class_item: 'portfolio__content dark'

    },
    {
      id: 7,
      title: 'Handcode',
      img: 'https://i.ibb.co/K9jrStX/h.png',
      descrip: 'Web realiada para emprendimiento de desarrollo web, en la cual se informa y se muestra sus servicios, portfolio de trabajo, datos de contacto y mas. Esta maquetada con HTML5, CSS Y SASS para los estilos, bootstrap y javascript para mas dinamismo, es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.',
      demo: 'https://handcode.com.ar/',
      class: 'p-dark portfolio__item p-pink',
      class_item: 'portfolio__content dark'

    },
    {
      id: 8,
      title: 'Pinder',
      img: 'https://i.ibb.co/0mYBgH9/pinder.png',
      descrip: 'Web realiada como proyecto final en el curso de Python en coderhouse, el cual es un Blog de Mascotas hecho en Django. En este proyecto encontraras, un registro, login, podras postear a tu mascota para presumirla,darla en adopcion o incluso adoptar, dando like a post, comentandolos y siguiendo usuarios. En este proyecto se utilizo Sqlite3 para crear la base de datos, se usaron templates HTML para renderizar los datos, un crud para editar perfil, post y comentarios,es totalmente responsive, se adapta a la pantalla de todos los dispositivos, cuenta con seo y esta optimizado.',
      demo: 'https://pinder-arg.herokuapp.com/',
      class: 'p-dark portfolio__item p-yellow',
      class_item: 'portfolio__content dark'

    },

  ]



  return (

    <section id="portfolio" >
      <h5>Algunos de mis trabajos recientes</h5>
      <h2>Portfolio</h2>

      <article className="portfolio__container">
        {/* SEPARACION DE PROYECTO*/}

        {workData.map((data) => (
          <Fade bottom>
            <div className={data?.class} key={data?.id}>
              <img src={data?.img} alt={data?.title} className="circle" />
              <span className='portfolio__number'>0{data?.id}.</span>
              <div className={data?.class_item}>
                <h3>{data?.title}</h3>
                <p>{data?.descrip}</p>
                <div className="portfolio__btn">
                  <a href={data?.demo} target="_blank" rel="noopener noreferrer" className='btn-link'>Ver Web</a>
                </div>
              </div>
              <div className='portfolio__slider'>
                <img src={data?.img} alt={data?.title} className="img1" />
              </div>
            </div>
          </Fade>
        ))}

      </article>
    </section>

  )
}

export default Portfolio