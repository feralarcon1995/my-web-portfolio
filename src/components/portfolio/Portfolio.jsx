import React from 'react';
import './portfolio.css';
import { Fade } from "react-awesome-reveal";

const Portfolio = () => {

  const workData = [
    {
      id: 1,
      title: 'Fan Web Linkin Park',
      img: 'https://i.ibb.co/Pg3DX2b/lp.png',
      descrip: 'Web in honor of the rock band Linkin Park',
      github: 'https://github.com/feralarcon1995/ProyectoFinalCoderHouse',
      demo: 'https://feralarcon1995.github.io/ProyectoFinalCoderHouse/'
    },
    {
      id: 2,
      title: 'Viaja Ya',
      img: 'https://i.postimg.cc/8cyJqVSW-/vy.png',
      descrip: 'Web budget calculator for travel',
      github: 'https://github.com/feralarcon1995/ViajaYa',
      demo: 'https://feralarcon1995.github.io/ViajaYa/'
    },
    {
      id: 3,
      title: 'Tienda Blu',
      img: 'https://i.postimg.cc/wBht9Nz9/tb.png',
      descrip: 'Apparel spa that brings firebase products',
      github: 'https://github.com/feralarcon1995/TiendaBlu',
      demo: 'https://feralarcon1995.github.io/TiendaBlu/'
    },
    {
      id: 4,
      title: 'Gif App',
      img: 'https://i.postimg.cc/PHVztjMQ/gifapp.png',
      descrip: 'Apparel spa that brings firebase products',
      github: 'https://github.com/feralarcon1995/Gifs-App',
      demo: 'https://feralarcon1995.github.io/Gifs-App/'
    },
    {
      id: 5,
      title: 'Ka Wirth',
      img: 'https://i.postimg.cc/8zZKt79P/kw.png',
      descrip: 'Esthetic website for important Argentine chain',
      github: 'https://github.com/feralarcon1995/kawirthboedo',
      demo: 'https://feralarcon1995.github.io/kawirthboedo/'
    },
    {
      id: 6,
      title: 'Space Moon',
      img: 'https://i.postimg.cc/RvZjnmjV/ls.png',
      descrip: 'Web for technical interview challenge',
      github: 'https://github.com/feralarcon1995/space-moon',
      demo: 'https://space-moon-ozx1wbe5o-feralarcon1995.vercel.app/'
    },
  ]

  return (
    <Fade bottom>

    <section id="portfolio" >
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {workData.map((data) => (
          <article className='portfolio__item' key={data?.id}>
            <img src={data?.img} alt={data?.title} />
            <div className="portfolio__content">
              <h3>{data?.title}</h3>
              <p>{data?.descrip}</p>
              <div className="portfolio__btn">
                <a href={data?.github} target="_blank" rel="noopener noreferrer" className='btn'>View Code</a>
                <a href={data?.demo} target="_blank" rel="noopener noreferrer" className='btn btn-primary'>Demo</a>
              </div>
            </div>
          </article>
        ))}

      </div>
    </section>
    </Fade>
  )
}

export default Portfolio