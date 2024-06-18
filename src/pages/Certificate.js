import React from 'react';
import image from './image.png'; 
import cert from './cert.png'; 
import '../styles/Certificate.css'
const Certificate = () => {
  return (
    <div className='certificates-container'>
      <div className='certificate'>
        <img src={image} alt='Upgrade Course by Napoleon' className='certificate-image' />
        <p className='certificate-caption'>Upgrade курс от Napoleon</p>
      </div>
      <div className='certificate'>
        <img src={cert} alt='Analytics Course' className='certificate-image' />
        <p className='certificate-caption'>Data Analytics курс от Napoleon</p>
      </div>
    </div>
  )
}

export default Certificate;
