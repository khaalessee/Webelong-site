'use client'

import React, { useState, useEffect } from 'react';

const Avis = () => {
  const avisData = [
    {
      prenom: 'Alice',
      entreprise: 'Entreprise A',
      commentaire: 'Très satisfait du service fourni par Webelong. Je recommande vivement!'
    },
    {
      prenom: 'Bob',
      entreprise: 'Entreprise B',
      commentaire: 'Une expérience exceptionnelle avec Webelong. Des professionnels compétents!'
    },
    {
      prenom: 'Charlie',
      entreprise: 'Entreprise C',
      commentaire: 'Webelong a dépassé mes attentes. Service client remarquable!'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % avisData.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + avisData.length) % avisData.length);
    };

    // Attach event listeners here if needed

    return () => {
      // Clean up event listeners if needed
    };
  }, [currentIndex, avisData.length]);

  return (
    <div className="services-container relative flex flex-col items-center">
      <h2 className="services-title mt-5 text-4xl">Témoignages</h2>
      <p className="text-sm m-10 text-white-10" style={{ fontFamily: 'Arial' }}>
        Retrouvez ici les derniers témoignages de nos clients :
      </p>

      <div className="carousel-container">
        <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + avisData.length) % avisData.length)}>Précédent</button>
        <div className="avis-card">
          <p>{avisData[currentIndex].commentaire}</p>
          <p>- {avisData[currentIndex].prenom}, {avisData[currentIndex].entreprise}</p>
        </div>
        <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % avisData.length)}>Suivant</button>
      </div>
    </div>
  );
};

export default Avis;
