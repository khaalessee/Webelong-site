'use client'

import React from 'react';
import ContactForm from './ContactForm';


const Contact = () => {
  return (
    <div className="services-container relative flex flex-col items-center" id="contact">
      <h2 className="services-title mt-5 text-4xl">Contactez nous !</h2>
      <div className='card'>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact; 