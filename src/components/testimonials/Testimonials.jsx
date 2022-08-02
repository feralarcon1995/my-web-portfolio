import React from 'react';
import './testimonials.css';
import PER1 from '../../assets/martin.png';
import PER3 from '../../assets/luis.jpg';
import PER4 from '../../assets/luciano.jpg';
import { Fade } from "react-awesome-reveal";
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Testimonials = () => {

  const data = [
    {
      id: 0,
      avatar: PER1,
      name: 'Martin Leon - Ingeniero de Software en Globant',
      review: 'Fernando ha contribuido de manera increíble a los proyectos en los que participa, manteniéndose activo ante cualquier duda o sugerencia y aportando nuevos temas en las discusiones y reuniones.'
    }
    ,
    {
      id: 1,
      avatar: PER3,
      name: 'Luis Pirela - Frontend Developer en Fulljaus ',
      review: 'Buen desarrollador, autodidacta y versado en estilos CCS con mucha iniciativa y conocimientos que puede aplicar de manera práctica a los proyectos en los que se involucra.'
    }
    ,
    {
      id: 3,
      avatar: PER4,
      name: 'Luciano Andrés Ceballos - Sector Comercial en SanCor Salud ',
      review: 'Excelente Tutor, que me acompañó tanto con conocimientos, como también siempre alentándome a mejorar. Lo eligiría sin dudar como tutor, y lo recomendaría como Profesor, ya que posee sobrados conocimientos técnicos, como así también enseña de manera simple y práctica, para que uno comprenda y aprenda las herramientas que está utilizando en el aprendizaje.'
    }

  ]


  return (
    <Fade bottom>
      <section className='testimonial-section bg-dark' id="testimonials">
        <h5>Comentarios de otros devs</h5>
        <h2>Testimonios</h2>
        <div className="square-b"></div>
        <div className="square-c"></div>
        <Swiper className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }} >

          {
            data.map(({ avatar, name, review, id }, index) => {
              return (

                <SwiperSlide className="testimonial" key={id}>
                  <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                  </div>
                  <h5 className='testimonial__name'>{name}</h5>
                  <small className='testimonial__review'>{review}
                  </small>
                </SwiperSlide>
              )
            })
          }

        </Swiper>

      </section>
    </Fade>
  )
}

export default Testimonials