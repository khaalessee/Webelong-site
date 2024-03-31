'use client'

import React, { useEffect, useState, useRef } from 'react';
import PrivacyPolicyModal from './PrivacyPolicyModal'; // Assurez-vous d'importer correctement le chemin du fichier PrivacyPolicyModal

const Footer = () => {

  const [isPrivacyPolicyModalOpen, setIsPrivacyPolicyModalOpen] = useState(false);

  const handlePrivacyPolicyClick = () => {
    setIsPrivacyPolicyModalOpen(true);
  };
  
  const closePrivacyPolicyModal = () => {
    setIsPrivacyPolicyModalOpen(false);
  };

  const svgStyle = {
    transform: 'translateX(-10%) translateY(-60%)',
  };

  const TiktokEmbed = ({ profileUrl }: { profileUrl: string }) => {
    const embedContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const fetchEmbedCode = async () => {
        try {
          const response = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(profileUrl)}`);
          const data = await response.json();

          if (embedContainerRef.current) {
            // Inject the HTML and script into the container
            embedContainerRef.current.innerHTML = data.html;

            // Append the TikTok embed script dynamically
            const tiktokEmbedScript = document.createElement('script');
            tiktokEmbedScript.src = 'https://www.tiktok.com/embed.js';
            tiktokEmbedScript.async = true;

            // Append the script to the body
            document.body.appendChild(tiktokEmbedScript);
          }
        } catch (error) {
          console.error('Error fetching TikTok embed code:', error);
        }
      };

      fetchEmbedCode();
    }, [profileUrl]);

    return <div ref={embedContainerRef} style={{ maxWidth: '780px', minWidth: '288px', width: '100%', height: '100%' }} />;
  };

  return (
    <footer className="bg-purple-10 relative">
      <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="100%" // Couvre 100% de la largeur de la page
    height="338" // Hauteur fixe
    viewBox="0 0 1920 338" // Vue en fonction de la taille originale du SVG
>
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_110" data-name="Rectangle 110" width="1920" height="338" transform="translate(0 11234)" fill="#fff" stroke="#707070" stroke-width="1"/>
    </clipPath>
    <linearGradient id="linear-gradient" x1="0.923" y1="-0.102" x2="0.082" y2="0.141" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#d4b6d3"/>
      <stop offset="1" stop-color="#d4b6d3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="0.079" y1="0.211" x2="0.884" y2="0.154" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#f2ebef"/>
      <stop offset="1" stop-color="#ebdfe7"/>
    </linearGradient>
    <linearGradient id="linear-gradient-3" x1="0.884" y1="0.284" x2="0.029" y2="0.289" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#e4d4e0"/>
      <stop offset="1" stop-color="#d4b6d3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-4" x1="0.072" y1="0.365" x2="0.933" y2="0.218" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#392952"/>
      <stop offset="0.199" stop-color="#58456c"/>
      <stop offset="1" stop-color="#d4b6d3"/>
    </linearGradient>
    <linearGradient id="linear-gradient-5" x1="0.884" y1="0.284" x2="0.029" y2="0.289" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#392952"/>
      <stop offset="1" stop-color="#f2ebef"/>
    </linearGradient>
  </defs>
  <g id="Groupe_de_masques_3" data-name="Groupe de masques 3" transform="translate(0 -11234)" clip-path="url(#clip-path)">
    <g id="Groupe_28" data-name="Groupe 28" transform="translate(-88.054 10773.881)">
      <path id="Tracé_2" data-name="Tracé 2" d="M-38.489,261.4s54.337-66.55,292.061-48.5,482.24,102.646,636.195,111.669,423.375-2.256,692.8-63.167,321.493-67.678,436.959-58.655S2130.46,324.569,2130.46,324.569s-206.027-19.176-348.662,30.455-683.74,108.285-860.335,85.726S369.038,323.441,230.932,331.337s-269.421,28.2-269.421,28.2Z" transform="translate(0 275.956)" fill="url(#linear-gradient)"/>
      <path id="Tracé_3" data-name="Tracé 3" d="M-38.489,249.728s52.073-35.8,289.8-17.752,484.5,71.895,638.459,80.919,421.111-38.056,690.532-98.966,323.757-31.879,439.223-22.855S2130.46,312.894,2130.46,312.894s-206.027-19.176-348.662,30.455-683.74,108.285-860.335,85.726S369.038,311.766,230.932,319.662s-269.421,28.2-269.421,28.2Z" transform="translate(0 308.767)" fill="url(#linear-gradient-2)"/>
      <path id="Tracé_4" data-name="Tracé 4" d="M-38.489,261.4s54.337-66.55,292.061-48.5,482.24,102.646,636.195,111.669,423.375-2.256,692.8-63.167,321.493-67.678,436.959-58.655S2130.46,324.569,2130.46,324.569s-206.027-19.176-348.662,30.455-683.74,108.285-860.335,85.726S369.038,323.441,230.932,331.337s-269.421,28.2-269.421,28.2Z" transform="translate(-14 335.654)" fill="url(#linear-gradient-3)"/>
      <path id="Tracé_5" data-name="Tracé 5" d="M-38.489,263.722s52.073-35.8,289.8-17.752S738.077,330.386,882.975,350.69s332.814,23.687,602.234-37.223,418.847-117.423,534.313-108.4S2130.46,326.889,2130.46,326.889s-206.027-19.176-348.662,30.455S1098.059,465.63,921.464,443.07,369.038,325.761,230.932,333.657s-269.421,28.2-269.421,28.2Z" transform="translate(18.112 333.334)" fill="url(#linear-gradient-4)"/>
      <path id="Tracé_6" data-name="Tracé 6" d="M-38.489,233.525s54.337-36.583,292.061-26.662,482.24,56.425,636.195,61.386,423.375-1.24,692.8-34.723,321.493-37.2,436.959-32.243,110.938,66.966,110.938,66.966S1924.433,257.707,1781.8,284.99s-683.74,59.526-860.335,47.124-552.425-64.486-690.532-60.146-269.421,15.5-269.421,15.5Z" transform="translate(0 458.77)" fill="url(#linear-gradient-5)"/>
    </g>
  </g>
</svg>

<div className="bg-purple-10 pb-10 relative text-white text-center lg:flex lg:justify-center lg:mt-[-130px]">
<div className="flex flex-col items-center lg:flex-row">
    {/* Instagram Section */}
    <div className="lg:w-1/2 lg:ml-20 mb-6 lg:mb-0">
      <div
        className="elfsight-app-0e4583db-18d0-4bab-a1d9-67f6540543a3"
        data-elfsight-app-lazy
      ></div>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Add your Instagram link content */}
      </a>
    </div>


    {/* TikTok Section */}
    <div className="lg:w-1/2 lg:mr-40 ml-5">
      <TiktokEmbed profileUrl="https://www.tiktok.com/@webelong.fr" />
    </div>
  </div>


        {/* Colonne de droite : Liens et Informations légales */}
                <div className="lg:w-1/2 mt-8 lg:mt-0 ml-5">
            <h3 className="font-atocha text-left text-white-10 text-6xl" style={{ fontFamily: 'atocha, sans-serif' }}>Plan du site</h3>
            {/* Plan du site Links */}
            <div className="text-left">
              <ul>
                <li className='mt-10'>
                  <a href="#hero" className="font-bello-caps text-white-10 text-2xl" style={{ fontFamily: 'bello-caps, sans-serif' }}>Accueil</a>
                </li>
                <li>
                  <a href="#services" className="font-bello-caps text-white-10 text-2xl" style={{ fontFamily: 'bello-caps, sans-serif' }}>Services</a>
                </li>
                <li>
                  <a href="#portfolio" className="font-bello-caps text-white-10 text-2xl" style={{ fontFamily: 'bello-caps, sans-serif' }} >Portfolio</a>
                </li>
                <li>
                  <a href="#affiliation" className="font-bello-caps text-white-10 text-2xl" style={{ fontFamily: 'bello-caps, sans-serif' }}>Affiliation</a>
                </li>
                <li>
                  <a href="#contact" className="font-bello-caps text-white-10 text-2xl" style={{ fontFamily: 'bello-caps, sans-serif' }}>Contact</a>
                </li>
              </ul>
            </div>

            {/* Legal Information Links */}
            <div className="text-right mt-8 pt-20 pr-5">
              <h4 className="font-arial text-s text-white-10">Informations légales</h4>
              <a href="#" className="text-xs text-white-10" style={{ fontFamily: 'arial, sans-serif' }} onClick={handlePrivacyPolicyClick}>
              Mentions légales & politique de confidentialité
        </a>
              <br />
            </div>
          </div>
        </div>
      <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
      <PrivacyPolicyModal isOpen={isPrivacyPolicyModalOpen} onClose={closePrivacyPolicyModal} />
    </footer>
  );
};

export default Footer;