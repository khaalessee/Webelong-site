'use client'


import React from 'react';


const Affiliation = () => {
  const pdfFileName = "Affiliation.pdf"; // Nom de votre fichier PDF

  const handleDownloadClick = () => {
    const pdfPath = pdfFileName;
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <div className="services-container relative flex flex-col items-center" id="affiliation">
    <h2 className="services-title mt-5 text-4xl">Affiliation</h2>
    <p className="text-sm m-10 text-white-10" style={{ fontFamily: 'Arial' }}>
    Recommandez-nous et soyez récompensé ! Chez Webelong, nous apprécions votre confiance et votre soutien. 
    C'est pourquoi nous avons mis en place un programme d'affiliation qui vous permet de gagner de l'argent en nous recommandant à d'autres clients potentiels.

    Voici comment cela fonctionne : si vous nous recommandez à quelqu'un et que nous décrochons un contrat grâce à votre recommandation, nous vous reversons une commission. Le montant de cette commission dépend du montant de la prestation réalisée par le client.
    </p>
    <div className="relative sm:w-1/5 md:w-1/5 lg:w-1/5">
        <div className="mx-auto">
          <img src="affiliation.png" alt="Affiliation" className="img-affiliation w-full" />
          {/* Ajouter le lien de téléchargement */}
            <div className="absolute bottom-0 left-0 w-full bg-gray-700 bg-opacity-80 flex items-center justify-between px-4 text-white cursor-pointer">
            <span className="underline text-white-10" onClick={handleDownloadClick}>
              Télécharger la plaquette
            </span>
              <img src="download.png" alt="Télécharger" className="w-6 h-6" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;