import React from 'react';
import './testimonials.css';
import PER1 from '../../assets/martin.png';
import PER2 from '../../assets/lucila.jfif';
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
      name: 'Martin Leon - Software Engineer at Globant',
      review: 'Fernando has contributed in an incredible way within the projects in which he takes part, remaining active in the face of any questions or suggestions and contributing new topics in the discussions and meetings.'
    },
    {
      id: 1,
      avatar: PER2,
      name: 'Lucila Fortunato - CT Associate Engineer at EY',
      review: 'Fernando has contributed in an incredible way within the projects in which he takes part, remaining active in the face of any questions or suggestions and contributing new topics in the discussions and meetings.'
    }
  ]


  return (
    <Fade bottom>
    <section className='testimonial-section'>
      <h5>Review from devs</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }} >

        {
          data.map(({ avatar, name, review,id }, index) => {
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