import React, { useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const Typed = window.Typed;

    const typed = new Typed('.element', {
      strings: ['frontend development'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='home'>
      <div className='about'>
        <p className='name'>My name is Anastasia</p>
        <div className='prompt'>
          <p>I'm an up and coming <span className='element'></span></p>
          <p className='description'>
            Chelyabinsk is my hometown. Currently, I am preparing to enter the job market,
            which is why I am dedicating myself to learning programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
