'use client'

import React, { useState } from 'react';

const PrivacyPolicyModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay fixed top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-6">
          <div className="modal w-4/5 lg:w-3/5 h-80vh overflow-y-auto bg-gray-800 text-white rounded-lg mt-10 overflow-x-hidden fixed top-0 justify-center items-center h-[calc(100%-1rem)] overflow-hidden">
            <div className="modal-header text-xl text-white-10 py-4 text-center p-6 mx-auto" style={{ fontFamily: 'Variex, sans-serif' }}>
              <h3>Mentions légales & politique de confidentialité</h3>
            </div>
            <div className="modal-body text-white-10 px-6 justify-center">
              <div className="text-content mt-4 whitespace-pre-line break-words lg:break-normal justify-center">
                {/* Ajoutez le contenu de votre politique de confidentialité ici */}
                <p className="text-white-10 leading-relaxed text-center">
                  Nous vous informons sur nos pratiques en matière de collecte, d'utilisation et de protection de vos informations personnelles conformément à la réglementation en vigueur. Veuillez lire attentivement cette politique de confidentialité.
                </p>
                <br></br>
                <h2>1. Informations Légales</h2>
                <p>
                  <strong>Raison Sociale :</strong> SALARD-DESCHANDOL CHLOE (WEBELONG)<br></br>
                  <strong>Numéro SIREN :</strong> 883 220 113<br></br>
                  <strong>Numéro SIRET (siège) :</strong> 883 220 113 00038<br></br>
                  <strong>Forme Juridique :</strong> Entrepreneur individuel<br></br>
                  <strong>Numéro de TVA :</strong> FR09883220113<br></br>
                  <strong>Inscription au RCS :</strong> INSCRIT (au greffe de NICE, le 02/09/2021)<br></br>
                  <strong>Inscription au RNE :</strong> INSCRIT<br></br>
                  <strong>Numéro RCS :</strong> 883 220 113 R.C.S. Nice
                </p>
                <br></br>
                <h2>2. Activité</h2>
                <p>
                  Notre activité principale est la <strong>Programmation informatique</strong>. Nous avons actuellement <strong>0 salarié</strong> (donnée 2024).
                </p>
                <br></br>
                <h2>3. Création</h2>
                <p>
                  Notre entreprise a été créée le <strong>25/04/2020</strong>.
                </p>
                <br></br>  
                <h2>4. Dirigeant</h2>
                <p>
                  Le dirigeant de l'entreprise est <strong>CHLOE SALARD-DESCHANDOL</strong>.
                </p>
                <br></br>        
                <h2>5. Collecte d'Informations Personnelles</h2>
                <p>
                  Nous collectons des informations personnelles dans le cadre de notre activité conformément aux lois applicables. Ces informations sont utilisées uniquement dans le but spécifié lors de la collecte.
                </p>
              </div>
            </div>
            <div className="modal-footer flex">
              {/* Bouton pour fermer la modale */}
              <button className="modal-close bg-white text-white px-4 py-2 rounded mb-10" onClick={onClose}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacyPolicyModal;
