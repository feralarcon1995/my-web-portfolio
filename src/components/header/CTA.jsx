import React from 'react'
import  CV from '../../assets/english-cv-fernando-alarcon.pdf';
const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download Cv</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
    )
}

export default CTA