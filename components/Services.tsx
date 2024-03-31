'use client'

import { useState, useEffect } from 'react';

const Services = () => {
  const [isIdentityModalOpen, setIsIdentityModalOpen] = useState(false);
  const [isDevelopmentModalOpen, setIsDevelopmentModalOpen] = useState(false); 
  const [isComModalOpen, setIsComModalOpen] = useState(false); 
  const [isStratModalOpen, setIsStratModalOpen] = useState(false); 
  const [isMarketingModalOpen, setIsMarketingModalOpen] = useState(false); 
  const [isDesignModalOpen, setIsDesignModalOpen] = useState(false); 
  const [isRefModalOpen, setIsRefModalOpen] = useState(false); 
  const [isMiniatureModalOpen, setIsMiniatureModalOpen] = useState(false); 
  const [isExcelModalOpen, setIsExcelModalOpen] = useState(false); 



  const handleCloseModal = () => {
    setIsIdentityModalOpen(false);
    setIsDevelopmentModalOpen(false);
    setIsComModalOpen(false);
    setIsStratModalOpen(false);
    setIsMarketingModalOpen(false);
    setIsDesignModalOpen(false);
    setIsRefModalOpen(false);
    setIsMiniatureModalOpen(false);
    setIsExcelModalOpen(false);

  }; 

  const handleModal = (modal: string) => () => {
    handleCloseModal();
    if (modal === 'identity') {
      setIsIdentityModalOpen(true);
    } else if (modal === 'development') {
      setIsDevelopmentModalOpen(true);
    } else if (modal === 'com') {
      setIsComModalOpen(true);
    } else if (modal === 'strat') {
      setIsStratModalOpen(true);
    } else if (modal === 'marketing') {
      setIsMarketingModalOpen(true);
    } else if (modal === 'design') {
      setIsDesignModalOpen(true);
    } else if (modal === 'ref') {
      setIsRefModalOpen(true);
    } else if (modal === 'miniature') {
      setIsMiniatureModalOpen(true);
    } else if (modal === 'excel') {
      setIsExcelModalOpen(true);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.modal')) {
      setIsIdentityModalOpen(false);
      setIsDevelopmentModalOpen(false);
      setIsComModalOpen(false);
      setIsStratModalOpen(false);
      setIsMarketingModalOpen(false);
      setIsDesignModalOpen(false);
      setIsRefModalOpen(false);
      setIsMiniatureModalOpen(false);
      setIsExcelModalOpen(false);

        }
  };

  useEffect(() => {
    const handleCloseOnEscape = (event: KeyboardEvent) => {
      if (event.keyCode === 27) { // Vérifie si la touche appuyée est "Échap" (code 27)
        setIsIdentityModalOpen(false);
        setIsDevelopmentModalOpen(false);
        setIsComModalOpen(false);
        setIsStratModalOpen(false);
        setIsMarketingModalOpen(false);
        setIsDesignModalOpen(false);
        setIsRefModalOpen(false);
        setIsMiniatureModalOpen(false);
        setIsExcelModalOpen(false);

      }
    };
  
    if (
      isIdentityModalOpen ||
      isDevelopmentModalOpen ||
      isComModalOpen ||
      isStratModalOpen ||
      isMarketingModalOpen ||
      isDesignModalOpen ||
      isRefModalOpen ||
      isMiniatureModalOpen ||
      isExcelModalOpen
    ) {
      document.addEventListener('keydown', handleCloseOnEscape);
      document.addEventListener('click', handleOutsideClick);
    }
  
    return () => {
      document.removeEventListener('keydown', handleCloseOnEscape);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [
    isIdentityModalOpen,
    isDevelopmentModalOpen,
    isComModalOpen,
    isStratModalOpen,
    isMarketingModalOpen,
    isDesignModalOpen,
    isRefModalOpen,
    isMiniatureModalOpen,
    isExcelModalOpen,
  ]);
  
  return (
    <div className="services-container" id="services">
    <h2 className="services-title mt-5 text-4xl">Services</h2>
    <div className="cards-container grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Carte 1 */}
        <a href="#id-modal">
        <div className="service-card transition duration-300 ease-in-out hover:scale-105" id="id-card" onClick={handleModal('identity')}>
            <div className="card-content">
            <div className="image-container w-full max-w-md mx-auto mt-2">
            <svg className="svg-container max-w-[50%] mx-auto" xmlns="http://www.w3.org/2000/svg" width="268" height="227" viewBox="0 0 268 227">
                {<svg xmlns="http://www.w3.org/2000/svg" width="268.369" height="227.879" viewBox="0 0 268.369 227.879" className='w-full'>
  <g id="Tracé_39" data-name="Tracé 39" fill="#fff">
    <path d="M 185.0929870605469 227.3786468505859 C 179.582763671875 227.3786468505859 173.7744903564453 227.330078125 167.6251831054688 227.2786407470703 C 160.6944274902344 227.2206420898438 153.5277252197266 227.1607055664062 145.8684234619141 227.1607055664062 C 138.3666534423828 227.1607055664062 131.0921936035156 227.2188720703125 124.057258605957 227.275146484375 C 117.4020538330078 227.328369140625 111.1159210205078 227.3786468505859 104.9799194335938 227.3786468505859 C 91.06758880615234 227.3786468505859 74.98142242431641 227.1424713134766 61.15705490112305 225.3908386230469 C 54.41259002685547 224.5362701416016 48.5626220703125 223.3889007568359 43.27278900146484 221.8832092285156 C 37.58708953857422 220.2648010253906 32.69162368774414 218.2759399414062 28.30658912658691 215.8029327392578 C 18.97358894348145 210.5394439697266 12.23215579986572 203.1511993408203 7.697089672088623 193.2160339355469 C 5.323089599609375 188.0152740478516 3.517789602279663 181.9773406982422 2.331289529800415 175.2700347900391 C 1.116122841835022 168.4007415771484 0.4999895691871643 160.5490112304688 0.4999895691871643 151.9328765869141 C 0.4999895691871643 141.6600036621094 1.597289562225342 131.3937072753906 3.761456251144409 121.4191055297852 C 5.870623111724854 111.6979751586914 9.017823219299316 102.135871887207 13.11565589904785 92.99833679199219 C 17.13938903808594 84.02606964111328 22.11982345581055 75.37213897705078 27.91855621337891 67.27693939208984 C 33.66268920898438 59.25793838500977 40.25955581665039 51.71710586547852 47.52595520019531 44.86387252807617 C 54.79288864135742 38.01013946533203 62.78922271728516 31.78770637512207 71.29285430908203 26.36944007873535 C 79.87845611572266 20.89890670776367 89.05692291259766 16.20027351379395 98.57332611083984 12.40407276153564 C 108.2659912109375 8.537506103515625 118.4093246459961 5.567872524261475 128.7215270996094 3.577672719955444 C 139.3031616210938 1.535472631454468 150.1943206787109 0.5000059604644775 161.092529296875 0.5000059604644775 C 171.9404907226562 0.5000059604644775 182.0486907958984 1.534439325332642 191.1363525390625 3.574605941772461 C 199.8997192382812 5.541939258575439 207.9792938232422 8.504339218139648 215.1505889892578 12.37953948974609 C 222.0425872802734 16.10377311706543 228.3098602294922 20.78727340698242 233.7782897949219 26.29987335205078 C 239.0136871337891 31.57757186889648 243.6841888427734 37.78440475463867 247.6601257324219 44.74803924560547 C 251.4446563720703 51.37647247314453 254.724853515625 58.91050720214844 257.4096374511719 67.14083862304688 C 259.9430236816406 74.90724182128906 262.0344543457031 83.56647491455078 263.6258239746094 92.87797546386719 C 266.4813537597656 109.5863418579102 267.8694458007812 128.9033660888672 267.8694458007812 151.9328765869141 C 267.8694458007812 186.5281066894531 262.1815185546875 205.6403045654297 248.8503875732422 215.8393707275391 C 242.5865936279297 220.6315002441406 234.4533538818359 223.6669006347656 223.2546539306641 225.3919067382812 C 211.9198608398438 227.1379089355469 198.2148284912109 227.3786010742188 185.0929870605469 227.3786468505859 Z" stroke="none"/>
    <path d="M 161.092529296875 1 C 150.2260589599609 1 139.3667602539062 2.032440185546875 128.8162536621094 4.068634033203125 C 118.5349273681641 6.052871704101562 108.4220581054688 9.013565063476562 98.75856018066406 12.86846923828125 C 89.27119445800781 16.65310668945312 80.12078857421875 21.33737182617188 71.5615234375 26.79110717773438 C 63.08439636230469 32.1925048828125 55.11308288574219 38.39544677734375 47.8690185546875 45.22760009765625 C 40.62599182128906 52.05880737304688 34.05046081542969 59.57521057128906 28.32502746582031 67.56809997558594 C 22.54568481445312 75.63624572753906 17.58198547363281 84.26103210449219 13.57188415527344 93.20294189453125 C 9.48822021484375 102.3088684082031 6.351898193359375 111.8378372192383 4.250091552734375 121.5251388549805 C 2.093475341796875 131.4649353027344 1 141.6955718994141 1 151.932861328125 C 1 160.5198669433594 1.613555908203125 168.3423461914062 2.8236083984375 175.1829376220703 C 4.002777099609375 181.8486633300781 5.795501708984375 187.8460388183594 8.15191650390625 193.0084075927734 C 12.64152526855469 202.8440093994141 19.31448364257812 210.1576690673828 28.5521240234375 215.3674011230469 C 32.90238952636719 217.8207702636719 37.76228332519531 219.7947998046875 43.40959167480469 221.4022674560547 C 48.67489624023438 222.9010009765625 54.50065612792969 224.0434112548828 61.21978759765625 224.894775390625 C 75.01655578613281 226.6429138183594 91.08305358886719 226.8786010742188 104.9797821044922 226.8786010742188 C 111.1138153076172 226.8786010742188 117.3989868164062 226.8283386230469 124.0531921386719 226.775146484375 C 131.0891571044922 226.7188720703125 138.3646545410156 226.6606750488281 145.8684234619141 226.6606750488281 C 153.5302581787109 226.6606750488281 160.698486328125 226.7206420898438 167.6306457519531 226.7786102294922 C 173.7784576416016 226.8300323486328 179.5853271484375 226.8786010742188 185.0930786132812 226.8786010742188 C 198.1950225830078 226.8786010742188 211.8770599365234 226.6386413574219 223.1786193847656 224.8977661132812 C 234.2911987304688 223.18603515625 242.35205078125 220.1815032958984 248.546630859375 215.4423065185547 C 261.7402038574219 205.3484344482422 267.3694458007812 186.35498046875 267.3694458007812 151.932861328125 C 267.3694458007812 128.9319152832031 265.9837036132812 109.6424407958984 263.1329956054688 92.96220397949219 C 261.5456848144531 83.67460632324219 259.4601440429688 75.03919982910156 256.9342651367188 67.29586791992188 C 254.2600250244141 59.0977783203125 250.99365234375 51.594970703125 247.2259216308594 44.99594116210938 C 243.271728515625 38.07037353515625 238.6278533935547 31.89857482910156 233.4233245849609 26.65200805664062 C 227.9894866943359 21.17427062988281 221.7616882324219 16.52030944824219 214.9128875732422 12.81941223144531 C 207.7819213867188 8.966033935546875 199.7454833984375 6.019775390625 191.0268249511719 4.062469482421875 C 181.9750671386719 2.030380249023438 171.9036865234375 1 161.092529296875 1 M 161.092529296875 0 C 250.0614166259766 0 268.3694458007812 68.02267456054688 268.3694458007812 151.932861328125 C 268.3694458007812 235.8430786132812 234.8373413085938 227.6606750488281 145.8684234619141 227.6606750488281 C 131.3534088134766 227.6606750488281 117.6797943115234 227.8786010742188 104.9797821044922 227.8786010742188 C 39.8358154296875 227.8786010742188 0 222.1533813476562 0 151.932861328125 C 0 68.02267456054688 72.12359619140625 0 161.092529296875 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
}
                <clipPath id="clip-path">
                  <rect width="268" height="227" rx="23" fill="#fff"/>
                </clipPath>
                <image x="5%" y="5%" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref="/id.png" clip-path="url(#clip-path)"/>
              </svg>
            </div>
            <div className="card-text">
              <h3 className="card-title text-white text-2xl font-bold mb-2 mt-1 ml-2 opacity-100 " style={{fontFamily: 'bello-caps, sans-serif'}}>Identité Visuelle</h3>
              <p className="card-description text-white text-xs mb-4 ml-2" style={{fontFamily: 'arial, sans-serif'}}>Créons ensemble les éléments
              primordiaux de votre projet :
              son logo et ses déclinaisons, 
              sa charte graphique et plus 
              encore</p>
            </div>
          </div>
        </div>
        </a>

        {isIdentityModalOpen && (
      <div className="modal-overlay fixed top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-6">
      <div id='id-modal'className="modal w-4/5 lg:w-3/5 h-80vh overflow-y-auto bg-gray-800 text-white rounded-lg mt-10 overflow-x-hidden fixed top-0 justify-center items-center h-[calc(100%-1rem)] overflow-hidden">
      <div className="modal-header text-xl text-white-10 py-4 text-center p-6 mx-auto" style={{ fontFamily: 'Variex, sans-serif' }}>
        <h3>Identité visuelle</h3>
      </div>
      <div className="modal-body text-white-10 px-6 justify-center">
        <div className="text-content mt-4 whitespace-pre-line break-words lg:break-normal justify-center">
          {/* Contenu texte de la modale */}
          <p className="text-white-10 leading-relaxed text-center">
          L’identité visuelle représente véritablement l’ADN de votre marque, ce qui permet de la reconnaître en un coup d'œil. En la développant à nos côtés, vous vous offrez l’opportunité de donner une personnalité unique à votre marque !
          </p>
          <div className="categories-container flex justify-between space-between mt-4">
            <div className="category-item">
              <div className="category-content flex flex-col items-center">
              <svg height="3.5vw" width="3.5vw">
                <image href="modal/graphic.png" width="100%" height="100%" />
              </svg>
              <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Identité visuelle complète</p>
            </div>
            </div>
            <div className="category-item">
            <div className="category-content flex flex-col items-center">
            <svg height="3.5vw" width="3.5vw">
                <image href="modal/logo.png" width="100%" height="100%" />
              </svg>
              <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Logos</p>            
              </div>
              </div>
            <div className="category-item">
            <div className="category-content flex flex-col items-center">
            <svg height="3.5vw" width="3.5vw">
                <image href="modal/identite.png" width="100%" height="100%" />
              </svg>
              <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Charte graphique</p>            
              </div>
              </div>
            <div className="category-item">
            <div className="category-content flex flex-col items-center">
            <svg height="3.5vw" width="3.5vw">
                <image href="modal/packaging.png" width="100%" height="100%" />
              </svg>
              <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Packaging</p>            
              </div>
          </div>
          </div>
          <div className="container-service-modal">
          <div className="background-image-service-modal">
            <h1 className="title-service-modal">Identité visuelle complète</h1>
            <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
            Votre identité visuelle, c’est ce qui donne sa <strong>personnalité</strong> à votre marque et permet à vos clients de <strong>l’identifier en un coup d'œil</strong>. <br></br>On a tendance à penser que ça ne concerne que votre logo, mais c’est en réalité <strong>bien plus large que ça !</strong> <br></br><br></br>Le logo est certes un élément graphique central, mais votre identité visuelle se compose de <strong>plusieurs pièces de puzzle qui ensemble créent votre image de marque</strong>.
            Pour obtenir cette image, nous combinons vos <strong>déclinaisons de logo</strong>, <strong>éléments graphiques dérivés</strong>, <strong>familles de polices</strong>, éléments <strong>typographiques</strong>, respect de <strong>marges</strong> et <strong>palette de couleur spécifique</strong>. <br></br>Après cela, vous avez tous les outils en main pour communiquer sur votre <strong>marque devenue unique !</strong> 
            <br></br><br></br>Tous ces éléments seront formalisés dans une charte graphique. 
            </p>
           </div>
          </div>
          <div className="container-service-modal">
          <div className="background-image-service-modal">
            <h1 className="title-service-modal">Logos</h1>
            <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
            Le premier élément qui permettra à vos clients <strong>d’identifier votre marque</strong>, c’est votre logo, car c’est le <strong>premier élément qui reflète votre marque</strong>. <br></br><br></br>Pour le construire, nous devons travailler ensemble pour <strong>retranscrire l’intégralité de votre marque en un seul élément visuel</strong>.<br></br>
            Notre équipe va donc vous accompagner dans la recherche de votre <strong>vision</strong>, de vos <strong>valeurs</strong> et des <strong>messages que vous voulez véhiculer à travers votre marque</strong> et ainsi créer le logo qui vous correspond. 
            </p>
           </div>
          </div>
          <div className="container-service-modal">
          <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
            <h1 className="title-service-modal">Charte graphique</h1>
            <p className="content-text-service-modal">
            Si vous avez déjà quelques éléments visuels, et en particulier un logo, nous pouvons <strong>formaliser votre charte graphique</strong>. <br></br><br></br>
            Qu’est-ce que c’est ? Il s’agit d’un <strong>document reprenant les différents modes d’utilisation</strong> de votre logo et de ses <strong>déclinaisons</strong> (par exemple, quelle déclinaison sera utilisée sur fond noir), les marges à respecter, les polices à utiliser, et la palette de couleur. <br></br>Ce document vous sera très utile dès lors que vous souhaitez <strong>sous-traiter des missions de communication</strong>. En effet, munis de cette charte graphique, vos prestataires sauront exactement <strong>quelles sont les bonnes pratiques pour refléter efficacement votre image de marque !</strong>
            </p>
           </div>
          </div>
          <div className="container-service-modal">
          <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
            <h1 className="title-service-modal">Packaging</h1>
            <p className="content-text-service-modal">
            Vous commercialisez des <strong>produits physiques</strong> et vous rêvez d’un <strong>packaging unique ?</strong> Vous êtes au bon endroit ! <br></br><br></br>A partir de vos éléments visuels, notre équipe vous proposera un design qui vous correspond pour <strong>tous vos types de packaging ! </strong>
            </p>
           </div>
          </div>
        </div>
        </div>
        <div className="modal-footer flex">
          {/* Bouton pour fermer la modale */}
          <button className="modal-close bg-white text-white px-4 py-2 rounded" onClick={() => setIsIdentityModalOpen(false)}>Fermer</button>
        </div>
    </div>
  </div>
)}

        {/* Carte 2 */}
        <a href="#dvp-modal">
        <div className="service-card transition duration-300 ease-in-out hover:scale-105" id="dvp-card" onClick={handleModal('development')}>
        <div className="card-content">
        <div className="image-container w-full max-w-md mx-auto mt-2">
        <svg className="svg-container max-w-[50%] mx-auto" xmlns="http://www.w3.org/2000/svg" width="268" height="227" viewBox="0 0 268 227">
                {<svg xmlns="http://www.w3.org/2000/svg" width="268.369" height="227.879" viewBox="0 0 268.369 227.879">
  <g id="Tracé_39" data-name="Tracé 39" fill="#fff">
    <path d="M 185.0929870605469 227.3786468505859 C 179.582763671875 227.3786468505859 173.7744903564453 227.330078125 167.6251831054688 227.2786407470703 C 160.6944274902344 227.2206420898438 153.5277252197266 227.1607055664062 145.8684234619141 227.1607055664062 C 138.3666534423828 227.1607055664062 131.0921936035156 227.2188720703125 124.057258605957 227.275146484375 C 117.4020538330078 227.328369140625 111.1159210205078 227.3786468505859 104.9799194335938 227.3786468505859 C 91.06758880615234 227.3786468505859 74.98142242431641 227.1424713134766 61.15705490112305 225.3908386230469 C 54.41259002685547 224.5362701416016 48.5626220703125 223.3889007568359 43.27278900146484 221.8832092285156 C 37.58708953857422 220.2648010253906 32.69162368774414 218.2759399414062 28.30658912658691 215.8029327392578 C 18.97358894348145 210.5394439697266 12.23215579986572 203.1511993408203 7.697089672088623 193.2160339355469 C 5.323089599609375 188.0152740478516 3.517789602279663 181.9773406982422 2.331289529800415 175.2700347900391 C 1.116122841835022 168.4007415771484 0.4999895691871643 160.5490112304688 0.4999895691871643 151.9328765869141 C 0.4999895691871643 141.6600036621094 1.597289562225342 131.3937072753906 3.761456251144409 121.4191055297852 C 5.870623111724854 111.6979751586914 9.017823219299316 102.135871887207 13.11565589904785 92.99833679199219 C 17.13938903808594 84.02606964111328 22.11982345581055 75.37213897705078 27.91855621337891 67.27693939208984 C 33.66268920898438 59.25793838500977 40.25955581665039 51.71710586547852 47.52595520019531 44.86387252807617 C 54.79288864135742 38.01013946533203 62.78922271728516 31.78770637512207 71.29285430908203 26.36944007873535 C 79.87845611572266 20.89890670776367 89.05692291259766 16.20027351379395 98.57332611083984 12.40407276153564 C 108.2659912109375 8.537506103515625 118.4093246459961 5.567872524261475 128.7215270996094 3.577672719955444 C 139.3031616210938 1.535472631454468 150.1943206787109 0.5000059604644775 161.092529296875 0.5000059604644775 C 171.9404907226562 0.5000059604644775 182.0486907958984 1.534439325332642 191.1363525390625 3.574605941772461 C 199.8997192382812 5.541939258575439 207.9792938232422 8.504339218139648 215.1505889892578 12.37953948974609 C 222.0425872802734 16.10377311706543 228.3098602294922 20.78727340698242 233.7782897949219 26.29987335205078 C 239.0136871337891 31.57757186889648 243.6841888427734 37.78440475463867 247.6601257324219 44.74803924560547 C 251.4446563720703 51.37647247314453 254.724853515625 58.91050720214844 257.4096374511719 67.14083862304688 C 259.9430236816406 74.90724182128906 262.0344543457031 83.56647491455078 263.6258239746094 92.87797546386719 C 266.4813537597656 109.5863418579102 267.8694458007812 128.9033660888672 267.8694458007812 151.9328765869141 C 267.8694458007812 186.5281066894531 262.1815185546875 205.6403045654297 248.8503875732422 215.8393707275391 C 242.5865936279297 220.6315002441406 234.4533538818359 223.6669006347656 223.2546539306641 225.3919067382812 C 211.9198608398438 227.1379089355469 198.2148284912109 227.3786010742188 185.0929870605469 227.3786468505859 Z" stroke="none"/>
    <path d="M 161.092529296875 1 C 150.2260589599609 1 139.3667602539062 2.032440185546875 128.8162536621094 4.068634033203125 C 118.5349273681641 6.052871704101562 108.4220581054688 9.013565063476562 98.75856018066406 12.86846923828125 C 89.27119445800781 16.65310668945312 80.12078857421875 21.33737182617188 71.5615234375 26.79110717773438 C 63.08439636230469 32.1925048828125 55.11308288574219 38.39544677734375 47.8690185546875 45.22760009765625 C 40.62599182128906 52.05880737304688 34.05046081542969 59.57521057128906 28.32502746582031 67.56809997558594 C 22.54568481445312 75.63624572753906 17.58198547363281 84.26103210449219 13.57188415527344 93.20294189453125 C 9.48822021484375 102.3088684082031 6.351898193359375 111.8378372192383 4.250091552734375 121.5251388549805 C 2.093475341796875 131.4649353027344 1 141.6955718994141 1 151.932861328125 C 1 160.5198669433594 1.613555908203125 168.3423461914062 2.8236083984375 175.1829376220703 C 4.002777099609375 181.8486633300781 5.795501708984375 187.8460388183594 8.15191650390625 193.0084075927734 C 12.64152526855469 202.8440093994141 19.31448364257812 210.1576690673828 28.5521240234375 215.3674011230469 C 32.90238952636719 217.8207702636719 37.76228332519531 219.7947998046875 43.40959167480469 221.4022674560547 C 48.67489624023438 222.9010009765625 54.50065612792969 224.0434112548828 61.21978759765625 224.894775390625 C 75.01655578613281 226.6429138183594 91.08305358886719 226.8786010742188 104.9797821044922 226.8786010742188 C 111.1138153076172 226.8786010742188 117.3989868164062 226.8283386230469 124.0531921386719 226.775146484375 C 131.0891571044922 226.7188720703125 138.3646545410156 226.6606750488281 145.8684234619141 226.6606750488281 C 153.5302581787109 226.6606750488281 160.698486328125 226.7206420898438 167.6306457519531 226.7786102294922 C 173.7784576416016 226.8300323486328 179.5853271484375 226.8786010742188 185.0930786132812 226.8786010742188 C 198.1950225830078 226.8786010742188 211.8770599365234 226.6386413574219 223.1786193847656 224.8977661132812 C 234.2911987304688 223.18603515625 242.35205078125 220.1815032958984 248.546630859375 215.4423065185547 C 261.7402038574219 205.3484344482422 267.3694458007812 186.35498046875 267.3694458007812 151.932861328125 C 267.3694458007812 128.9319152832031 265.9837036132812 109.6424407958984 263.1329956054688 92.96220397949219 C 261.5456848144531 83.67460632324219 259.4601440429688 75.03919982910156 256.9342651367188 67.29586791992188 C 254.2600250244141 59.0977783203125 250.99365234375 51.594970703125 247.2259216308594 44.99594116210938 C 243.271728515625 38.07037353515625 238.6278533935547 31.89857482910156 233.4233245849609 26.65200805664062 C 227.9894866943359 21.17427062988281 221.7616882324219 16.52030944824219 214.9128875732422 12.81941223144531 C 207.7819213867188 8.966033935546875 199.7454833984375 6.019775390625 191.0268249511719 4.062469482421875 C 181.9750671386719 2.030380249023438 171.9036865234375 1 161.092529296875 1 M 161.092529296875 0 C 250.0614166259766 0 268.3694458007812 68.02267456054688 268.3694458007812 151.932861328125 C 268.3694458007812 235.8430786132812 234.8373413085938 227.6606750488281 145.8684234619141 227.6606750488281 C 131.3534088134766 227.6606750488281 117.6797943115234 227.8786010742188 104.9797821044922 227.8786010742188 C 39.8358154296875 227.8786010742188 0 222.1533813476562 0 151.932861328125 C 0 68.02267456054688 72.12359619140625 0 161.092529296875 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
}
                <clipPath id="clip-path">
                  <rect width="268" height="227" rx="23" fill="#fff"/>
                </clipPath>
                <image x="0%" y="0%" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref="/dvp.png" clip-path="url(#clip-path)"/>
              </svg>
            </div>
            <div className="card-text">
              <h3 className="card-title text-white text-2xl font-bold mb-2 mt-1 ml-2 opacity-100 " style={{fontFamily: 'bello-caps, sans-serif'}}>Développement web</h3>
              <p className="card-description text-white text-xs mb-4 ml-2" style={{fontFamily: 'arial, sans-serif'}}>Développement sur mesure de sites web, intégration e-commerce, et optimisation pour une visibilité maximale.</p>
            </div>
          </div>
        </div>
        </a>
        {isDevelopmentModalOpen && (
            <div className="modal-overlay fixed top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-6">
            <div id='id-modal'className="modal w-4/5 lg:w-3/5 h-80vh overflow-y-auto bg-gray-800 text-white rounded-lg mt-10 overflow-x-hidden fixed top-0 justify-center items-center h-[calc(100%-1rem)] overflow-hidden">
            <div className="modal-header text-xl text-white-10 py-4 text-center p-6 mx-auto" style={{ fontFamily: 'Variex, sans-serif' }}>
              <h3>Développement web</h3>
            </div>
            <div className="modal-body text-white-10 px-6 justify-center">
              <div className="text-content mt-4 whitespace-pre-line break-words lg:break-normal justify-center">
                {/* Contenu texte de la modale */}
                <p className="text-white-10 leading-relaxed text-center">
                A l’ère du numérique, la présence web devient déterminante et ce pour chaque secteur d’activité. Grâce à notre service de développement web, offrez à votre entreprise une superbe présence en ligne !
                </p>
                <div className="categories-container flex justify-between space-between mt-4">
                  <div className="category-item">
                    <div className="category-content flex flex-col items-center">
                    <svg height="3.5vw" width="3.5vw">
                      <image href="modal/website.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-xs">Sites & applications web</p>
                  </div>
                  </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/eshop.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs lg:text-xs">E-commerces</p>            
                    </div>
                    </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/qrcode.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-xs">Contenu via QR code</p>            
                    </div>
                    </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/wordpress.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-xs">Service Wordpress</p>            
                    </div>
                    </div>
                    <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/maintenance.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xxs lg:text-xs">Maintenance</p>            
                    </div>
                    </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Développement de sites et applications web</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  En étroite collaboration avec vous, nous <strong>créons un site web qui vous correspond</strong>. <br></br><br></br>Que ce soit pour votre <strong>entreprise</strong>, une <strong>association</strong> ou à titre <strong>personnel</strong>, nous mettrons tout en place pour un <strong>résultat dépassant vos espérances</strong>. <br></br><br></br>
                  Nous pouvons, au-delà du site dit “vitrine”, développer des <strong>applications web</strong>, c’est-à-dire des sites web avec des <strong>fonctionnalités particulières</strong> (chat entre utilisateurs, édition de contenus, streaming vidéo…).
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">E-commerce</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  Votre site web sera votre <strong>support de vente en ligne ?</strong> Pas de problèmes ! <br></br>Nous vous créons une <strong>boutique en ligne à votre image</strong>, et dont vous pourrez <strong>éditer les produits très facilement</strong>, avec notre aide ou non. <br></br><br></br>Nous pouvons également prendre à notre charge la <strong>maintenance</strong> et <strong>l’édition régulière</strong> de votre boutique en ligne à 100%, pour ne vous laisser que les commandes à gérer. <br></br>
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Contenu accessible via QR code</h1>
                  <p className="content-text-service-modal">
                  Nous vous proposons également un service de <strong>création de contenu web accessible uniquement via QR code</strong>. <br></br><br></br>
                  Dans quels cas c’est utile ? C’est le cas si vous avez des <strong>informations spécifiques à un lieu</strong> à afficher. <br></br>Par exemple, vous avez un <strong>airBnB</strong> et vous voulez <strong>afficher son book numériquement ?</strong> <br></br>Le QR code est la solution pour vous !
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Service Wordpress</h1>
                  <p className="content-text-service-modal">
                  Ce service est réservé aux clients ayant fait <strong>l’acquisition de l’un de nos templates Webelong</strong> sur Wordpress. <br></br>Une fois notre template installé, nous assurerons le <strong>paramétrage et la construction complète</strong> de votre site web, maintenance comprise.<br></br><br></br>
                  Nous pouvons également vous <strong>créer un template Wordpress sur mesure.</strong>
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Maintenance</h1>
                  <p className="content-text-service-modal">
                  Nous proposons des <strong>services de maintenance de site web</strong> pour vous <strong>libérer des contraintes techniques</strong>, vous permettant ainsi de vous concentrer uniquement sur le développement de votre activité principale.
                  </p>
                 </div>
                </div>
              </div>
              </div>
              <div className="modal-footer flex">
          {/* Bouton pour fermer la modale */}
          <button className="modal-close bg-white text-white px-4 py-2 rounded" onClick={() => setIsDevelopmentModalOpen(false)}>Fermer</button>
        </div>
      </div>
    </div>
)}

        {/* Carte 3 */}
        <a href="#com-modal">
        <div className="service-card transition duration-300 ease-in-out hover:scale-105" id="com-card" onClick={handleModal('com')}>
        <div className="card-content">
        <div className="image-container w-full max-w-md mx-auto mt-2">
        <svg className="svg-container max-w-[50%] mx-auto" xmlns="http://www.w3.org/2000/svg" width="268" height="227" viewBox="0 0 268 227">
                {<svg xmlns="http://www.w3.org/2000/svg" width="268.369" height="227.879" viewBox="0 0 268.369 227.879">
  <g id="Tracé_39" data-name="Tracé 39" fill="#fff">
    <path d="M 185.0929870605469 227.3786468505859 C 179.582763671875 227.3786468505859 173.7744903564453 227.330078125 167.6251831054688 227.2786407470703 C 160.6944274902344 227.2206420898438 153.5277252197266 227.1607055664062 145.8684234619141 227.1607055664062 C 138.3666534423828 227.1607055664062 131.0921936035156 227.2188720703125 124.057258605957 227.275146484375 C 117.4020538330078 227.328369140625 111.1159210205078 227.3786468505859 104.9799194335938 227.3786468505859 C 91.06758880615234 227.3786468505859 74.98142242431641 227.1424713134766 61.15705490112305 225.3908386230469 C 54.41259002685547 224.5362701416016 48.5626220703125 223.3889007568359 43.27278900146484 221.8832092285156 C 37.58708953857422 220.2648010253906 32.69162368774414 218.2759399414062 28.30658912658691 215.8029327392578 C 18.97358894348145 210.5394439697266 12.23215579986572 203.1511993408203 7.697089672088623 193.2160339355469 C 5.323089599609375 188.0152740478516 3.517789602279663 181.9773406982422 2.331289529800415 175.2700347900391 C 1.116122841835022 168.4007415771484 0.4999895691871643 160.5490112304688 0.4999895691871643 151.9328765869141 C 0.4999895691871643 141.6600036621094 1.597289562225342 131.3937072753906 3.761456251144409 121.4191055297852 C 5.870623111724854 111.6979751586914 9.017823219299316 102.135871887207 13.11565589904785 92.99833679199219 C 17.13938903808594 84.02606964111328 22.11982345581055 75.37213897705078 27.91855621337891 67.27693939208984 C 33.66268920898438 59.25793838500977 40.25955581665039 51.71710586547852 47.52595520019531 44.86387252807617 C 54.79288864135742 38.01013946533203 62.78922271728516 31.78770637512207 71.29285430908203 26.36944007873535 C 79.87845611572266 20.89890670776367 89.05692291259766 16.20027351379395 98.57332611083984 12.40407276153564 C 108.2659912109375 8.537506103515625 118.4093246459961 5.567872524261475 128.7215270996094 3.577672719955444 C 139.3031616210938 1.535472631454468 150.1943206787109 0.5000059604644775 161.092529296875 0.5000059604644775 C 171.9404907226562 0.5000059604644775 182.0486907958984 1.534439325332642 191.1363525390625 3.574605941772461 C 199.8997192382812 5.541939258575439 207.9792938232422 8.504339218139648 215.1505889892578 12.37953948974609 C 222.0425872802734 16.10377311706543 228.3098602294922 20.78727340698242 233.7782897949219 26.29987335205078 C 239.0136871337891 31.57757186889648 243.6841888427734 37.78440475463867 247.6601257324219 44.74803924560547 C 251.4446563720703 51.37647247314453 254.724853515625 58.91050720214844 257.4096374511719 67.14083862304688 C 259.9430236816406 74.90724182128906 262.0344543457031 83.56647491455078 263.6258239746094 92.87797546386719 C 266.4813537597656 109.5863418579102 267.8694458007812 128.9033660888672 267.8694458007812 151.9328765869141 C 267.8694458007812 186.5281066894531 262.1815185546875 205.6403045654297 248.8503875732422 215.8393707275391 C 242.5865936279297 220.6315002441406 234.4533538818359 223.6669006347656 223.2546539306641 225.3919067382812 C 211.9198608398438 227.1379089355469 198.2148284912109 227.3786010742188 185.0929870605469 227.3786468505859 Z" stroke="none"/>
    <path d="M 161.092529296875 1 C 150.2260589599609 1 139.3667602539062 2.032440185546875 128.8162536621094 4.068634033203125 C 118.5349273681641 6.052871704101562 108.4220581054688 9.013565063476562 98.75856018066406 12.86846923828125 C 89.27119445800781 16.65310668945312 80.12078857421875 21.33737182617188 71.5615234375 26.79110717773438 C 63.08439636230469 32.1925048828125 55.11308288574219 38.39544677734375 47.8690185546875 45.22760009765625 C 40.62599182128906 52.05880737304688 34.05046081542969 59.57521057128906 28.32502746582031 67.56809997558594 C 22.54568481445312 75.63624572753906 17.58198547363281 84.26103210449219 13.57188415527344 93.20294189453125 C 9.48822021484375 102.3088684082031 6.351898193359375 111.8378372192383 4.250091552734375 121.5251388549805 C 2.093475341796875 131.4649353027344 1 141.6955718994141 1 151.932861328125 C 1 160.5198669433594 1.613555908203125 168.3423461914062 2.8236083984375 175.1829376220703 C 4.002777099609375 181.8486633300781 5.795501708984375 187.8460388183594 8.15191650390625 193.0084075927734 C 12.64152526855469 202.8440093994141 19.31448364257812 210.1576690673828 28.5521240234375 215.3674011230469 C 32.90238952636719 217.8207702636719 37.76228332519531 219.7947998046875 43.40959167480469 221.4022674560547 C 48.67489624023438 222.9010009765625 54.50065612792969 224.0434112548828 61.21978759765625 224.894775390625 C 75.01655578613281 226.6429138183594 91.08305358886719 226.8786010742188 104.9797821044922 226.8786010742188 C 111.1138153076172 226.8786010742188 117.3989868164062 226.8283386230469 124.0531921386719 226.775146484375 C 131.0891571044922 226.7188720703125 138.3646545410156 226.6606750488281 145.8684234619141 226.6606750488281 C 153.5302581787109 226.6606750488281 160.698486328125 226.7206420898438 167.6306457519531 226.7786102294922 C 173.7784576416016 226.8300323486328 179.5853271484375 226.8786010742188 185.0930786132812 226.8786010742188 C 198.1950225830078 226.8786010742188 211.8770599365234 226.6386413574219 223.1786193847656 224.8977661132812 C 234.2911987304688 223.18603515625 242.35205078125 220.1815032958984 248.546630859375 215.4423065185547 C 261.7402038574219 205.3484344482422 267.3694458007812 186.35498046875 267.3694458007812 151.932861328125 C 267.3694458007812 128.9319152832031 265.9837036132812 109.6424407958984 263.1329956054688 92.96220397949219 C 261.5456848144531 83.67460632324219 259.4601440429688 75.03919982910156 256.9342651367188 67.29586791992188 C 254.2600250244141 59.0977783203125 250.99365234375 51.594970703125 247.2259216308594 44.99594116210938 C 243.271728515625 38.07037353515625 238.6278533935547 31.89857482910156 233.4233245849609 26.65200805664062 C 227.9894866943359 21.17427062988281 221.7616882324219 16.52030944824219 214.9128875732422 12.81941223144531 C 207.7819213867188 8.966033935546875 199.7454833984375 6.019775390625 191.0268249511719 4.062469482421875 C 181.9750671386719 2.030380249023438 171.9036865234375 1 161.092529296875 1 M 161.092529296875 0 C 250.0614166259766 0 268.3694458007812 68.02267456054688 268.3694458007812 151.932861328125 C 268.3694458007812 235.8430786132812 234.8373413085938 227.6606750488281 145.8684234619141 227.6606750488281 C 131.3534088134766 227.6606750488281 117.6797943115234 227.8786010742188 104.9797821044922 227.8786010742188 C 39.8358154296875 227.8786010742188 0 222.1533813476562 0 151.932861328125 C 0 68.02267456054688 72.12359619140625 0 161.092529296875 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
}
                <clipPath id="clip-path">
                  <rect width="268" height="227" rx="23" fill="#fff"/>
                </clipPath>
                <image x="15%" y="10%" width="80%" height="80%" preserveAspectRatio="xMidYMid slice" xlinkHref="/com.png" clip-path="url(#clip-path)"/>
              </svg>
            </div>
            <div className="card-text">
              <h3 className="card-title text-white text-2xl font-bold mb-2 mt-1 ml-2 opacity-100 " style={{fontFamily: 'bello-caps, sans-serif'}}>Communication</h3>
              <p className="card-description text-white text-xs mb-4 ml-2" style={{fontFamily: 'arial, sans-serif'}}>Pour positionner votre marque de manière stratégique sur les plateformes en ligne et renforcer votre visibilité et l'engagement auprès de votre public cible.</p>
            </div>
          </div>
        </div>
        </a>
        {isComModalOpen && (
            <div className="modal-overlay fixed top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-6">
            <div id='id-modal'className="modal w-4/5 lg:w-3/5 h-80vh overflow-y-auto bg-gray-800 text-white rounded-lg mt-10 overflow-x-hidden fixed top-0 justify-center items-center h-[calc(100%-1rem)] overflow-hidden">
            <div className="modal-header text-xl text-white-10 py-4 text-center p-6 mx-auto" style={{ fontFamily: 'Variex, sans-serif' }}>
              <h3>Identité visuelle</h3>
            </div>
            <div className="modal-body text-white-10 px-6 justify-center">
              <div className="text-content mt-4 whitespace-pre-line break-words lg:break-normal justify-center">
                {/* Contenu texte de la modale */}
                <p className="text-white-10 leading-relaxed text-center">
                L’identité visuelle représente véritablement l’ADN de votre marque, ce qui permet de la reconnaître en un coup d'œil. En la développant à nos côtés, vous vous offrez l’opportunité de donner une personnalité unique à votre marque !
                </p>
                <div className="categories-container grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                  <div className="category-item">
                    <div className="category-content flex flex-col items-center">
                    <svg height="3.5vw" width="3.5vw">
                      <image href="modal/plancom.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Plan de communication</p>
                  </div>
                  </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/audit.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Audit communication</p>            
                    </div>
                    </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/ads.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Google & Facebook Ads</p>            
                    </div>
                    </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/video.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Montage vidéo</p>            
                    </div>
                    </div>
                    <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/blog.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Articles blog</p>            
                    </div>
                    </div>
                    <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/poster.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Templates réseaux sociaux</p>            
                    </div>
                    </div>
                    <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/feed.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Feed optimisation</p>            
                    </div>
                    </div>
                    <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/motion.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Motion Design</p>            
                    </div>
                    </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Plan de communication</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                    Le plan de communication prévoit une <strong>planification</strong> sur une durée définie de la publication de <strong>différents contenus préparés à l'avance par nos soins.</strong><br></br><br></br>
                    Cela vous permet de jouer sur la <strong>saisonnalité</strong> en ayant des contenus déjà tous prêts, mais également <strong>d'être régulier dans vos communications, et jamais à court d'inspiration !</strong>
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Audit de communication</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                    Un audit de vos réseaux sociaux nous permet <strong>d'évaluer votre stratégie actuelle</strong> et d'identifier des <strong>pistes d'amélioration</strong> pour toucher votre public cible. 
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Google & Facebook Ads</h1>
                  <p className="content-text-service-modal">
                    Nous créons pour vous vos campagnes <strong>Facebook et Google Ads</strong> afin de <strong>maximiser votre portée sur votre audience cible.</strong> <br></br> Qu'il s'agisse d'une seule annonce ou d'un groupe d'annonce composant une campagne, on s'occupe de tout !
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Montage vidéo</h1>
                  <p className="content-text-service-modal">
                      Nous réalisons à partir de vos rush des vidéos <strong>promotionnelles</strong> ou bien <strong>pour les réseaux sociaux</strong>. <br></br> <br></br> 
                      Nous prenons également en charge la réalisation de <strong>vidéos promotionnelles pour des produits physiques</strong> avec utilisation de vos échantillons.
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Articles de blog</h1>
                  <p className="content-text-service-modal">
                      Les articles de blog sont de bons outils pour <strong>donner de la vie à votre site web</strong> et contribuent également à son <strong>bon référencement dans les moteurs de recherche</strong>. <br></br><br></br>
                      Nous prenons en charge la rédaction de vos articles de blog, que ceux-ci soient à des fins <strong>informatives</strong>, <strong>divertissantes</strong> ou <strong>liées au référencement.</strong>
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Templates réseaux sociaux</h1>
                  <p className="content-text-service-modal">
                    Pour que vous puissiez <strong>communiquer efficacement</strong> et conserver une <strong>cohérence graphique entre vos communications</strong>, nous pouvons vous fournir des templates de posts pour les différents réseaux sociaux. <br>
                    </br>
                    Ceux-ci vous permettent de suivre une <strong>trame définie</strong> et donc de <strong>gagner en temps et cohérence.</strong>
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Feed optimisation</h1>
                  <p className="content-text-service-modal">
                    Vous rêvez d'un <strong>feed harmonieux et organisé</strong> pour vos réseaux sociaux ? Nous vous aidons à en construire un en élaborant un <strong>schéma et une liste de règles</strong> à respecter pour un feed professionnel !
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Motion design</h1>
                  <p className="content-text-service-modal">
                    Vous souhaitez communiquer à l'aider d'une <strong>courte animation ?</strong> Nous réalisons pour vous de petites vidéos ou GIF en motion design afin de faire passer votre message !
                  </p>
                 </div>
                </div>
              </div>
              </div>
              <div className="modal-footer flex">
          {/* Bouton pour fermer la modale */}
          <button className="modal-close bg-white text-white px-4 py-2 rounded" onClick={() => setIsComModalOpen(false)}>Fermer</button>
        </div>
      </div>
    </div>
)}


        {/* Carte 4 */}
        <a href="#strat-modal">
        <div className="service-card transition duration-300 ease-in-out hover:scale-105" id="strat-card" onClick={handleModal('strat')}>
        <div className="card-content">
        <div className="image-container w-full max-w-md mx-auto mt-2">
        <svg className="svg-container max-w-[50%] mx-auto" xmlns="http://www.w3.org/2000/svg" width="268" height="227" viewBox="0 0 268 227">
                {<svg xmlns="http://www.w3.org/2000/svg" width="268.369" height="227.879" viewBox="0 0 268.369 227.879">
  <g id="Tracé_39" data-name="Tracé 39" fill="#fff">
    <path d="M 185.0929870605469 227.3786468505859 C 179.582763671875 227.3786468505859 173.7744903564453 227.330078125 167.6251831054688 227.2786407470703 C 160.6944274902344 227.2206420898438 153.5277252197266 227.1607055664062 145.8684234619141 227.1607055664062 C 138.3666534423828 227.1607055664062 131.0921936035156 227.2188720703125 124.057258605957 227.275146484375 C 117.4020538330078 227.328369140625 111.1159210205078 227.3786468505859 104.9799194335938 227.3786468505859 C 91.06758880615234 227.3786468505859 74.98142242431641 227.1424713134766 61.15705490112305 225.3908386230469 C 54.41259002685547 224.5362701416016 48.5626220703125 223.3889007568359 43.27278900146484 221.8832092285156 C 37.58708953857422 220.2648010253906 32.69162368774414 218.2759399414062 28.30658912658691 215.8029327392578 C 18.97358894348145 210.5394439697266 12.23215579986572 203.1511993408203 7.697089672088623 193.2160339355469 C 5.323089599609375 188.0152740478516 3.517789602279663 181.9773406982422 2.331289529800415 175.2700347900391 C 1.116122841835022 168.4007415771484 0.4999895691871643 160.5490112304688 0.4999895691871643 151.9328765869141 C 0.4999895691871643 141.6600036621094 1.597289562225342 131.3937072753906 3.761456251144409 121.4191055297852 C 5.870623111724854 111.6979751586914 9.017823219299316 102.135871887207 13.11565589904785 92.99833679199219 C 17.13938903808594 84.02606964111328 22.11982345581055 75.37213897705078 27.91855621337891 67.27693939208984 C 33.66268920898438 59.25793838500977 40.25955581665039 51.71710586547852 47.52595520019531 44.86387252807617 C 54.79288864135742 38.01013946533203 62.78922271728516 31.78770637512207 71.29285430908203 26.36944007873535 C 79.87845611572266 20.89890670776367 89.05692291259766 16.20027351379395 98.57332611083984 12.40407276153564 C 108.2659912109375 8.537506103515625 118.4093246459961 5.567872524261475 128.7215270996094 3.577672719955444 C 139.3031616210938 1.535472631454468 150.1943206787109 0.5000059604644775 161.092529296875 0.5000059604644775 C 171.9404907226562 0.5000059604644775 182.0486907958984 1.534439325332642 191.1363525390625 3.574605941772461 C 199.8997192382812 5.541939258575439 207.9792938232422 8.504339218139648 215.1505889892578 12.37953948974609 C 222.0425872802734 16.10377311706543 228.3098602294922 20.78727340698242 233.7782897949219 26.29987335205078 C 239.0136871337891 31.57757186889648 243.6841888427734 37.78440475463867 247.6601257324219 44.74803924560547 C 251.4446563720703 51.37647247314453 254.724853515625 58.91050720214844 257.4096374511719 67.14083862304688 C 259.9430236816406 74.90724182128906 262.0344543457031 83.56647491455078 263.6258239746094 92.87797546386719 C 266.4813537597656 109.5863418579102 267.8694458007812 128.9033660888672 267.8694458007812 151.9328765869141 C 267.8694458007812 186.5281066894531 262.1815185546875 205.6403045654297 248.8503875732422 215.8393707275391 C 242.5865936279297 220.6315002441406 234.4533538818359 223.6669006347656 223.2546539306641 225.3919067382812 C 211.9198608398438 227.1379089355469 198.2148284912109 227.3786010742188 185.0929870605469 227.3786468505859 Z" stroke="none"/>
    <path d="M 161.092529296875 1 C 150.2260589599609 1 139.3667602539062 2.032440185546875 128.8162536621094 4.068634033203125 C 118.5349273681641 6.052871704101562 108.4220581054688 9.013565063476562 98.75856018066406 12.86846923828125 C 89.27119445800781 16.65310668945312 80.12078857421875 21.33737182617188 71.5615234375 26.79110717773438 C 63.08439636230469 32.1925048828125 55.11308288574219 38.39544677734375 47.8690185546875 45.22760009765625 C 40.62599182128906 52.05880737304688 34.05046081542969 59.57521057128906 28.32502746582031 67.56809997558594 C 22.54568481445312 75.63624572753906 17.58198547363281 84.26103210449219 13.57188415527344 93.20294189453125 C 9.48822021484375 102.3088684082031 6.351898193359375 111.8378372192383 4.250091552734375 121.5251388549805 C 2.093475341796875 131.4649353027344 1 141.6955718994141 1 151.932861328125 C 1 160.5198669433594 1.613555908203125 168.3423461914062 2.8236083984375 175.1829376220703 C 4.002777099609375 181.8486633300781 5.795501708984375 187.8460388183594 8.15191650390625 193.0084075927734 C 12.64152526855469 202.8440093994141 19.31448364257812 210.1576690673828 28.5521240234375 215.3674011230469 C 32.90238952636719 217.8207702636719 37.76228332519531 219.7947998046875 43.40959167480469 221.4022674560547 C 48.67489624023438 222.9010009765625 54.50065612792969 224.0434112548828 61.21978759765625 224.894775390625 C 75.01655578613281 226.6429138183594 91.08305358886719 226.8786010742188 104.9797821044922 226.8786010742188 C 111.1138153076172 226.8786010742188 117.3989868164062 226.8283386230469 124.0531921386719 226.775146484375 C 131.0891571044922 226.7188720703125 138.3646545410156 226.6606750488281 145.8684234619141 226.6606750488281 C 153.5302581787109 226.6606750488281 160.698486328125 226.7206420898438 167.6306457519531 226.7786102294922 C 173.7784576416016 226.8300323486328 179.5853271484375 226.8786010742188 185.0930786132812 226.8786010742188 C 198.1950225830078 226.8786010742188 211.8770599365234 226.6386413574219 223.1786193847656 224.8977661132812 C 234.2911987304688 223.18603515625 242.35205078125 220.1815032958984 248.546630859375 215.4423065185547 C 261.7402038574219 205.3484344482422 267.3694458007812 186.35498046875 267.3694458007812 151.932861328125 C 267.3694458007812 128.9319152832031 265.9837036132812 109.6424407958984 263.1329956054688 92.96220397949219 C 261.5456848144531 83.67460632324219 259.4601440429688 75.03919982910156 256.9342651367188 67.29586791992188 C 254.2600250244141 59.0977783203125 250.99365234375 51.594970703125 247.2259216308594 44.99594116210938 C 243.271728515625 38.07037353515625 238.6278533935547 31.89857482910156 233.4233245849609 26.65200805664062 C 227.9894866943359 21.17427062988281 221.7616882324219 16.52030944824219 214.9128875732422 12.81941223144531 C 207.7819213867188 8.966033935546875 199.7454833984375 6.019775390625 191.0268249511719 4.062469482421875 C 181.9750671386719 2.030380249023438 171.9036865234375 1 161.092529296875 1 M 161.092529296875 0 C 250.0614166259766 0 268.3694458007812 68.02267456054688 268.3694458007812 151.932861328125 C 268.3694458007812 235.8430786132812 234.8373413085938 227.6606750488281 145.8684234619141 227.6606750488281 C 131.3534088134766 227.6606750488281 117.6797943115234 227.8786010742188 104.9797821044922 227.8786010742188 C 39.8358154296875 227.8786010742188 0 222.1533813476562 0 151.932861328125 C 0 68.02267456054688 72.12359619140625 0 161.092529296875 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
}
                <clipPath id="clip-path">
                  <rect width="268" height="227" rx="23" fill="#fff"/>
                </clipPath>
                <image x="5%" y="5%" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref="/strategie.png" clip-path="url(#clip-path)"/>
              </svg>
            </div>
            <div className="card-text">
              <h3 className="card-title text-white text-2xl font-bold mb-2 mt-1 ml-2 opacity-100 " style={{fontFamily: 'bello-caps, sans-serif'}}>Stratégie et financements</h3>
              <p className="card-description text-white text-xs mb-4 ml-2" style={{fontFamily: 'arial, sans-serif'}}>Pour identifier des sources de financement adéquates et en orchestrant des campagnes de financement participatif si nécessaire.</p>
            </div>
          </div>
        </div>
        </a>
        {isStratModalOpen && (
                    <div className="modal-overlay fixed top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-6">
                    <div id='id-modal'className="modal w-4/5 lg:w-3/5 h-80vh overflow-y-auto bg-gray-800 text-white rounded-lg mt-10 overflow-x-hidden fixed top-0 justify-center items-center h-[calc(100%-1rem)] overflow-hidden">
                    <div className="modal-header text-xl text-white-10 py-4 text-center p-6 mx-auto" style={{ fontFamily: 'Variex, sans-serif' }}>
                      <h3>Stratégie & financements</h3>
                    </div>
                    <div className="modal-body text-white-10 px-6 justify-center">
                      <div className="text-content mt-4 whitespace-pre-line break-words lg:break-normal justify-center">
                        {/* Contenu texte de la modale */}
                        <p className="text-white-10 leading-relaxed text-center">
                          Vous souhaitez démarrer un projet nécessitant des investissements ? Nous vous accompagnons dans la recherche de vos fonds ! En plus des financements, la stratégie est un élément crucial qui sera déterminante sur la réussite de votre projet, c'est pourquoi nous vous accompagnons également sur bien des points à ce niveau-là !
                        </p>
                        <div className="categories-container grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4 items-center">
                          <div className="category-item">
                            <div className="category-content flex flex-col items-center">
                            <svg height="3.5vw" width="3.5vw">
                              <image href="modal/europe.png" width="100%" height="100%" />
                            </svg>
                            <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Financements Européens</p>
                          </div>
                          </div>
                          <div className="category-item">
                          <div className="category-content flex flex-col items-center">
                          <svg height="3.5vw" width="3.5vw">
                              <image href="modal/concours.png" width="100%" height="100%" />
                            </svg>
                            <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Concours de projets</p>            
                            </div>
                            </div>
                          <div className="category-item">
                          <div className="category-content flex flex-col items-center">
                          <svg height="3.5vw" width="3.5vw">
                              <image href="modal/ecology.png" width="100%" height="100%" />
                            </svg>
                            <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Politique environnementales & RSE</p>            
                            </div>
                            </div>
                          <div className="category-item">
                          <div className="category-content flex flex-col items-center">
                          <svg height="3.5vw" width="3.5vw">
                              <image href="modal/cagnotte.png" width="100%" height="100%" />
                            </svg>
                            <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Financements participatifs</p>            
                            </div>
                            </div>
                            <div className="category-item">
                          <div className="category-content flex flex-col items-center">
                          <svg height="3.5vw" width="3.5vw">
                              <image href="modal/brevet.png" width="100%" height="100%" />
                            </svg>
                            <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Aide au brevetage</p>            
                            </div>
                            </div>
                            <div className="category-item">
                          <div className="category-content flex flex-col items-center">
                          <svg height="3.5vw" width="3.5vw">
                              <image href="modal/roadmap.png" width="100%" height="100%" />
                            </svg>
                            <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Roadmaps</p>            
                            </div>
                            </div>
                            <div className="category-item">
                          <div className="category-content flex flex-col items-center">
                          <svg height="3.5vw" width="3.5vw">
                              <image href="modal/businessplan.png" width="100%" height="100%" />
                            </svg>
                            <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Business plan & études de marché</p>            
                            </div>
                            </div>
                        </div>
                        <div className="container-service-modal">
                        <div className="background-image-service-modal">
                          <h1 className="title-service-modal">Financements Européens</h1>
                          <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                          Aide à la recherche d’aides financières dans le <strong>périmètre Européen</strong>, et accompagnement à la <strong>mise en place du dossier</strong>. 
                          </p>
                         </div>
                        </div>
                        <div className="container-service-modal">
                        <div className="background-image-service-modal">
                          <h1 className="title-service-modal">Concours de projets</h1>
                          <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                          Aide à la recherche de concours de projets et <strong>analyse de l'éligibilité</strong>, accompagnement à la constitution du dossier.          
                          </p>
                         </div>
                        </div>
                        <div className="container-service-modal">
                        <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                          <h1 className="title-service-modal">Politique environnementale et RSE</h1>
                          <p className="content-text-service-modal">
                            Partez du bon pied et conquérissez un plus large public en élaborant des <strong>politiques environnementales</strong> et une <strong>politique RSE !</strong>
                          </p>
                         </div>
                        </div>
                        <div className="container-service-modal">
                        <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                          <h1 className="title-service-modal">Financements participatifs</h1>
                          <p className="content-text-service-modal">
                          Création de campagnes de financements sur des <strong>plateformes dédiées</strong>. Une animation de cette campagne sur les réseaux est possible avec notre service communication. 
                          </p>
                         </div>
                        </div>
                        <div className="container-service-modal">
                        <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                          <h1 className="title-service-modal">Aide au brevetage</h1>
                          <p className="content-text-service-modal">
                          Accompagnement dans la démarche de brevetage INPI et dans la <strong>rédaction du brevet</strong>.
                          </p>
                         </div>
                        </div>
                        <div className="container-service-modal">
                        <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                          <h1 className="title-service-modal">Roadmaps</h1>
                          <p className="content-text-service-modal">
                          Création d’une stratégie de développement de votre business avec établissement <strong>d'actions et d'objectifs chiffrés</strong> (KPI) sur minimum 2 ans.
                          </p>
                         </div>
                        </div>
                        <div className="container-service-modal">
                        <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                          <h1 className="title-service-modal">Business plan et études de marché</h1>
                          <p className="content-text-service-modal">
                          Accompagnement à la création de business plan et études de marché spécifiques à vos projets
                          </p>
                         </div>
                        </div>
                      </div>
                      </div>
                      <div className="modal-footer flex">
          {/* Bouton pour fermer la modale */}
          <button className="modal-close bg-white text-white px-4 py-2 rounded" onClick={() => setIsStratModalOpen(false)}>Fermer</button>
        </div>
      </div>
    </div>
)}


        {/* Carte 5 */}
        <a href="#marketing-modal">
        <div className="service-card transition duration-300 ease-in-out hover:scale-105" id="marketing-card" onClick={handleModal('marketing')}>
        <div className="card-content">
        <div className="image-container w-full max-w-md mx-auto mt-2">
        <svg className="svg-container max-w-[50%] mx-auto" xmlns="http://www.w3.org/2000/svg" width="268" height="227" viewBox="0 0 268 227">
                {<svg xmlns="http://www.w3.org/2000/svg" width="268.369" height="227.879" viewBox="0 0 268.369 227.879">
  <g id="Tracé_39" data-name="Tracé 39" fill="#fff">
    <path d="M 185.0929870605469 227.3786468505859 C 179.582763671875 227.3786468505859 173.7744903564453 227.330078125 167.6251831054688 227.2786407470703 C 160.6944274902344 227.2206420898438 153.5277252197266 227.1607055664062 145.8684234619141 227.1607055664062 C 138.3666534423828 227.1607055664062 131.0921936035156 227.2188720703125 124.057258605957 227.275146484375 C 117.4020538330078 227.328369140625 111.1159210205078 227.3786468505859 104.9799194335938 227.3786468505859 C 91.06758880615234 227.3786468505859 74.98142242431641 227.1424713134766 61.15705490112305 225.3908386230469 C 54.41259002685547 224.5362701416016 48.5626220703125 223.3889007568359 43.27278900146484 221.8832092285156 C 37.58708953857422 220.2648010253906 32.69162368774414 218.2759399414062 28.30658912658691 215.8029327392578 C 18.97358894348145 210.5394439697266 12.23215579986572 203.1511993408203 7.697089672088623 193.2160339355469 C 5.323089599609375 188.0152740478516 3.517789602279663 181.9773406982422 2.331289529800415 175.2700347900391 C 1.116122841835022 168.4007415771484 0.4999895691871643 160.5490112304688 0.4999895691871643 151.9328765869141 C 0.4999895691871643 141.6600036621094 1.597289562225342 131.3937072753906 3.761456251144409 121.4191055297852 C 5.870623111724854 111.6979751586914 9.017823219299316 102.135871887207 13.11565589904785 92.99833679199219 C 17.13938903808594 84.02606964111328 22.11982345581055 75.37213897705078 27.91855621337891 67.27693939208984 C 33.66268920898438 59.25793838500977 40.25955581665039 51.71710586547852 47.52595520019531 44.86387252807617 C 54.79288864135742 38.01013946533203 62.78922271728516 31.78770637512207 71.29285430908203 26.36944007873535 C 79.87845611572266 20.89890670776367 89.05692291259766 16.20027351379395 98.57332611083984 12.40407276153564 C 108.2659912109375 8.537506103515625 118.4093246459961 5.567872524261475 128.7215270996094 3.577672719955444 C 139.3031616210938 1.535472631454468 150.1943206787109 0.5000059604644775 161.092529296875 0.5000059604644775 C 171.9404907226562 0.5000059604644775 182.0486907958984 1.534439325332642 191.1363525390625 3.574605941772461 C 199.8997192382812 5.541939258575439 207.9792938232422 8.504339218139648 215.1505889892578 12.37953948974609 C 222.0425872802734 16.10377311706543 228.3098602294922 20.78727340698242 233.7782897949219 26.29987335205078 C 239.0136871337891 31.57757186889648 243.6841888427734 37.78440475463867 247.6601257324219 44.74803924560547 C 251.4446563720703 51.37647247314453 254.724853515625 58.91050720214844 257.4096374511719 67.14083862304688 C 259.9430236816406 74.90724182128906 262.0344543457031 83.56647491455078 263.6258239746094 92.87797546386719 C 266.4813537597656 109.5863418579102 267.8694458007812 128.9033660888672 267.8694458007812 151.9328765869141 C 267.8694458007812 186.5281066894531 262.1815185546875 205.6403045654297 248.8503875732422 215.8393707275391 C 242.5865936279297 220.6315002441406 234.4533538818359 223.6669006347656 223.2546539306641 225.3919067382812 C 211.9198608398438 227.1379089355469 198.2148284912109 227.3786010742188 185.0929870605469 227.3786468505859 Z" stroke="none"/>
    <path d="M 161.092529296875 1 C 150.2260589599609 1 139.3667602539062 2.032440185546875 128.8162536621094 4.068634033203125 C 118.5349273681641 6.052871704101562 108.4220581054688 9.013565063476562 98.75856018066406 12.86846923828125 C 89.27119445800781 16.65310668945312 80.12078857421875 21.33737182617188 71.5615234375 26.79110717773438 C 63.08439636230469 32.1925048828125 55.11308288574219 38.39544677734375 47.8690185546875 45.22760009765625 C 40.62599182128906 52.05880737304688 34.05046081542969 59.57521057128906 28.32502746582031 67.56809997558594 C 22.54568481445312 75.63624572753906 17.58198547363281 84.26103210449219 13.57188415527344 93.20294189453125 C 9.48822021484375 102.3088684082031 6.351898193359375 111.8378372192383 4.250091552734375 121.5251388549805 C 2.093475341796875 131.4649353027344 1 141.6955718994141 1 151.932861328125 C 1 160.5198669433594 1.613555908203125 168.3423461914062 2.8236083984375 175.1829376220703 C 4.002777099609375 181.8486633300781 5.795501708984375 187.8460388183594 8.15191650390625 193.0084075927734 C 12.64152526855469 202.8440093994141 19.31448364257812 210.1576690673828 28.5521240234375 215.3674011230469 C 32.90238952636719 217.8207702636719 37.76228332519531 219.7947998046875 43.40959167480469 221.4022674560547 C 48.67489624023438 222.9010009765625 54.50065612792969 224.0434112548828 61.21978759765625 224.894775390625 C 75.01655578613281 226.6429138183594 91.08305358886719 226.8786010742188 104.9797821044922 226.8786010742188 C 111.1138153076172 226.8786010742188 117.3989868164062 226.8283386230469 124.0531921386719 226.775146484375 C 131.0891571044922 226.7188720703125 138.3646545410156 226.6606750488281 145.8684234619141 226.6606750488281 C 153.5302581787109 226.6606750488281 160.698486328125 226.7206420898438 167.6306457519531 226.7786102294922 C 173.7784576416016 226.8300323486328 179.5853271484375 226.8786010742188 185.0930786132812 226.8786010742188 C 198.1950225830078 226.8786010742188 211.8770599365234 226.6386413574219 223.1786193847656 224.8977661132812 C 234.2911987304688 223.18603515625 242.35205078125 220.1815032958984 248.546630859375 215.4423065185547 C 261.7402038574219 205.3484344482422 267.3694458007812 186.35498046875 267.3694458007812 151.932861328125 C 267.3694458007812 128.9319152832031 265.9837036132812 109.6424407958984 263.1329956054688 92.96220397949219 C 261.5456848144531 83.67460632324219 259.4601440429688 75.03919982910156 256.9342651367188 67.29586791992188 C 254.2600250244141 59.0977783203125 250.99365234375 51.594970703125 247.2259216308594 44.99594116210938 C 243.271728515625 38.07037353515625 238.6278533935547 31.89857482910156 233.4233245849609 26.65200805664062 C 227.9894866943359 21.17427062988281 221.7616882324219 16.52030944824219 214.9128875732422 12.81941223144531 C 207.7819213867188 8.966033935546875 199.7454833984375 6.019775390625 191.0268249511719 4.062469482421875 C 181.9750671386719 2.030380249023438 171.9036865234375 1 161.092529296875 1 M 161.092529296875 0 C 250.0614166259766 0 268.3694458007812 68.02267456054688 268.3694458007812 151.932861328125 C 268.3694458007812 235.8430786132812 234.8373413085938 227.6606750488281 145.8684234619141 227.6606750488281 C 131.3534088134766 227.6606750488281 117.6797943115234 227.8786010742188 104.9797821044922 227.8786010742188 C 39.8358154296875 227.8786010742188 0 222.1533813476562 0 151.932861328125 C 0 68.02267456054688 72.12359619140625 0 161.092529296875 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
}
                <clipPath id="clip-path">
                  <rect width="268" height="227" rx="23" fill="#fff"/>
                </clipPath>
                <image x="15%" y="15%" width="80%" height="80%" preserveAspectRatio="xMidYMid slice" xlinkHref="/marketing.png" clip-path="url(#clip-path)"/>
              </svg>
            </div>
            <div className="card-text">
              <h3 className="card-title text-white text-2xl font-bold mb-2 mt-1 ml-2 opacity-100 " style={{fontFamily: 'bello-caps, sans-serif'}}>Marketing</h3>
              <p className="card-description text-white text-xs mb-4 ml-2" style={{fontFamily: 'arial, sans-serif'}}>Des outils de communication visuelle et écrite percutants, tant pour promouvoir votre marque vers l'extérieur que pour renforcer votre efficacité.</p>
            </div>
          </div>
        </div>
        </a>
        {isMarketingModalOpen && (
            <div className="modal-overlay fixed top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-6">
            <div id='id-modal'className="modal w-4/5 lg:w-3/5 h-80vh overflow-y-auto bg-gray-800 text-white rounded-lg mt-10 overflow-x-hidden fixed top-0 justify-center items-center h-[calc(100%-1rem)] overflow-hidden">
            <div className="modal-header text-xl text-white-10 py-4 text-center p-6 mx-auto" style={{ fontFamily: 'Variex, sans-serif' }}>
              <h3>Marketing</h3>
            </div>
            <div className="modal-body text-white-10 px-6 justify-center">
              <div className="text-content mt-4 whitespace-pre-line break-words lg:break-normal justify-center">
                {/* Contenu texte de la modale */}
                <p className="text-white-10 leading-relaxed text-center">
                Le marketing regroupe tous vos supports de prospection et documents internes. Ceux-ci sont cruciaux pour une bonne compréhension des messages transmis à vos clients, ou à votre équipe en interne.                 </p>
                <div className="categories-container flex justify-between space-between mt-4">
                  <div className="category-item">
                    <div className="category-content flex flex-col items-center">
                    <svg height="3.5vw" width="3.5vw">
                      <image href="modal/flyers.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-xs">Flyers</p>
                  </div>
                  </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/interne.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs lg:text-xs">Documents internes</p>            
                    </div>
                    </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/pdf.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-xs">Plaquettes PDF</p>            
                    </div>
                    </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/cartevisite.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-xs">Cartes de visite</p>            
                    </div>
                    </div>
                    <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/infographie.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xxs lg:text-xs">Infographies</p>            
                    </div>
                    </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Flyers</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  Les flyers peuvent être un moyen de <strong>prospection</strong> très efficace, ce dont nous nous assurons en vous créant des flyers aux <strong>designs créatifs et efficaces</strong>. <br></br>Nous créons tous types de flyer, recto/verso, recto uniquement, deux volets, etc. 
                 </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Documents internes</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  Création de documents internes avec les <strong>mêmes codes de design</strong> (procédures, brochure, chartes…). <br></br>Encouragez vos collaborateurs à lire vos documents internes avec un design simple, épuré mais efficace, et montrez à vos clients que <strong>vous avez soigné votre identité jusqu’au bout !</strong>
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Plaquettes PDF, interactives ou non</h1>
                  <p className="content-text-service-modal">
                  Nous vous créons des documents de prospection ou formulaires au format PDF, qui peuvent être interactifs ou non. <br></br>Le PDF interactif, <strong>plus facilement accessible au client</strong>, représente une belle opportunité d’amélioration de vos formulaires !
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Cartes de visite</h1>
                  <p className="content-text-service-modal">
                  Nous créons pour vous des cartes de visite au design qui vous convient le mieux (épuré, élégant, créatif…) afin d’y <strong>refléter votre image</strong> et de faire belle impression !
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Infographies</h1>
                  <p className="content-text-service-modal">
                  Nous réalisons vos infographies pour mettre en valeur, et surtout <strong>rendre accessible à tous</strong> vos données. 
                  </p>
                 </div>
                </div>
              </div>
              </div>
              <div className="modal-footer flex">
          {/* Bouton pour fermer la modale */}
          <button className="modal-close bg-white text-white px-4 py-2 rounded" onClick={() => setIsDevelopmentModalOpen(false)}>Fermer</button>
        </div>
      </div>
    </div>
)}

        {/* Carte 6 */}
        <a href="#design-modal">
        <div className="service-card transition duration-300 ease-in-out hover:scale-105" id="design-card" onClick={handleModal('design')}>
        <div className="card-content">
        <div className="image-container w-full max-w-md mx-auto mt-2">
        <svg className="svg-container max-w-[50%] mx-auto" xmlns="http://www.w3.org/2000/svg" width="268" height="227" viewBox="0 0 268 227">
                {<svg xmlns="http://www.w3.org/2000/svg" width="268.369" height="227.879" viewBox="0 0 268.369 227.879">
  <g id="Tracé_39" data-name="Tracé 39" fill="#fff">
    <path d="M 185.0929870605469 227.3786468505859 C 179.582763671875 227.3786468505859 173.7744903564453 227.330078125 167.6251831054688 227.2786407470703 C 160.6944274902344 227.2206420898438 153.5277252197266 227.1607055664062 145.8684234619141 227.1607055664062 C 138.3666534423828 227.1607055664062 131.0921936035156 227.2188720703125 124.057258605957 227.275146484375 C 117.4020538330078 227.328369140625 111.1159210205078 227.3786468505859 104.9799194335938 227.3786468505859 C 91.06758880615234 227.3786468505859 74.98142242431641 227.1424713134766 61.15705490112305 225.3908386230469 C 54.41259002685547 224.5362701416016 48.5626220703125 223.3889007568359 43.27278900146484 221.8832092285156 C 37.58708953857422 220.2648010253906 32.69162368774414 218.2759399414062 28.30658912658691 215.8029327392578 C 18.97358894348145 210.5394439697266 12.23215579986572 203.1511993408203 7.697089672088623 193.2160339355469 C 5.323089599609375 188.0152740478516 3.517789602279663 181.9773406982422 2.331289529800415 175.2700347900391 C 1.116122841835022 168.4007415771484 0.4999895691871643 160.5490112304688 0.4999895691871643 151.9328765869141 C 0.4999895691871643 141.6600036621094 1.597289562225342 131.3937072753906 3.761456251144409 121.4191055297852 C 5.870623111724854 111.6979751586914 9.017823219299316 102.135871887207 13.11565589904785 92.99833679199219 C 17.13938903808594 84.02606964111328 22.11982345581055 75.37213897705078 27.91855621337891 67.27693939208984 C 33.66268920898438 59.25793838500977 40.25955581665039 51.71710586547852 47.52595520019531 44.86387252807617 C 54.79288864135742 38.01013946533203 62.78922271728516 31.78770637512207 71.29285430908203 26.36944007873535 C 79.87845611572266 20.89890670776367 89.05692291259766 16.20027351379395 98.57332611083984 12.40407276153564 C 108.2659912109375 8.537506103515625 118.4093246459961 5.567872524261475 128.7215270996094 3.577672719955444 C 139.3031616210938 1.535472631454468 150.1943206787109 0.5000059604644775 161.092529296875 0.5000059604644775 C 171.9404907226562 0.5000059604644775 182.0486907958984 1.534439325332642 191.1363525390625 3.574605941772461 C 199.8997192382812 5.541939258575439 207.9792938232422 8.504339218139648 215.1505889892578 12.37953948974609 C 222.0425872802734 16.10377311706543 228.3098602294922 20.78727340698242 233.7782897949219 26.29987335205078 C 239.0136871337891 31.57757186889648 243.6841888427734 37.78440475463867 247.6601257324219 44.74803924560547 C 251.4446563720703 51.37647247314453 254.724853515625 58.91050720214844 257.4096374511719 67.14083862304688 C 259.9430236816406 74.90724182128906 262.0344543457031 83.56647491455078 263.6258239746094 92.87797546386719 C 266.4813537597656 109.5863418579102 267.8694458007812 128.9033660888672 267.8694458007812 151.9328765869141 C 267.8694458007812 186.5281066894531 262.1815185546875 205.6403045654297 248.8503875732422 215.8393707275391 C 242.5865936279297 220.6315002441406 234.4533538818359 223.6669006347656 223.2546539306641 225.3919067382812 C 211.9198608398438 227.1379089355469 198.2148284912109 227.3786010742188 185.0929870605469 227.3786468505859 Z" stroke="none"/>
    <path d="M 161.092529296875 1 C 150.2260589599609 1 139.3667602539062 2.032440185546875 128.8162536621094 4.068634033203125 C 118.5349273681641 6.052871704101562 108.4220581054688 9.013565063476562 98.75856018066406 12.86846923828125 C 89.27119445800781 16.65310668945312 80.12078857421875 21.33737182617188 71.5615234375 26.79110717773438 C 63.08439636230469 32.1925048828125 55.11308288574219 38.39544677734375 47.8690185546875 45.22760009765625 C 40.62599182128906 52.05880737304688 34.05046081542969 59.57521057128906 28.32502746582031 67.56809997558594 C 22.54568481445312 75.63624572753906 17.58198547363281 84.26103210449219 13.57188415527344 93.20294189453125 C 9.48822021484375 102.3088684082031 6.351898193359375 111.8378372192383 4.250091552734375 121.5251388549805 C 2.093475341796875 131.4649353027344 1 141.6955718994141 1 151.932861328125 C 1 160.5198669433594 1.613555908203125 168.3423461914062 2.8236083984375 175.1829376220703 C 4.002777099609375 181.8486633300781 5.795501708984375 187.8460388183594 8.15191650390625 193.0084075927734 C 12.64152526855469 202.8440093994141 19.31448364257812 210.1576690673828 28.5521240234375 215.3674011230469 C 32.90238952636719 217.8207702636719 37.76228332519531 219.7947998046875 43.40959167480469 221.4022674560547 C 48.67489624023438 222.9010009765625 54.50065612792969 224.0434112548828 61.21978759765625 224.894775390625 C 75.01655578613281 226.6429138183594 91.08305358886719 226.8786010742188 104.9797821044922 226.8786010742188 C 111.1138153076172 226.8786010742188 117.3989868164062 226.8283386230469 124.0531921386719 226.775146484375 C 131.0891571044922 226.7188720703125 138.3646545410156 226.6606750488281 145.8684234619141 226.6606750488281 C 153.5302581787109 226.6606750488281 160.698486328125 226.7206420898438 167.6306457519531 226.7786102294922 C 173.7784576416016 226.8300323486328 179.5853271484375 226.8786010742188 185.0930786132812 226.8786010742188 C 198.1950225830078 226.8786010742188 211.8770599365234 226.6386413574219 223.1786193847656 224.8977661132812 C 234.2911987304688 223.18603515625 242.35205078125 220.1815032958984 248.546630859375 215.4423065185547 C 261.7402038574219 205.3484344482422 267.3694458007812 186.35498046875 267.3694458007812 151.932861328125 C 267.3694458007812 128.9319152832031 265.9837036132812 109.6424407958984 263.1329956054688 92.96220397949219 C 261.5456848144531 83.67460632324219 259.4601440429688 75.03919982910156 256.9342651367188 67.29586791992188 C 254.2600250244141 59.0977783203125 250.99365234375 51.594970703125 247.2259216308594 44.99594116210938 C 243.271728515625 38.07037353515625 238.6278533935547 31.89857482910156 233.4233245849609 26.65200805664062 C 227.9894866943359 21.17427062988281 221.7616882324219 16.52030944824219 214.9128875732422 12.81941223144531 C 207.7819213867188 8.966033935546875 199.7454833984375 6.019775390625 191.0268249511719 4.062469482421875 C 181.9750671386719 2.030380249023438 171.9036865234375 1 161.092529296875 1 M 161.092529296875 0 C 250.0614166259766 0 268.3694458007812 68.02267456054688 268.3694458007812 151.932861328125 C 268.3694458007812 235.8430786132812 234.8373413085938 227.6606750488281 145.8684234619141 227.6606750488281 C 131.3534088134766 227.6606750488281 117.6797943115234 227.8786010742188 104.9797821044922 227.8786010742188 C 39.8358154296875 227.8786010742188 0 222.1533813476562 0 151.932861328125 C 0 68.02267456054688 72.12359619140625 0 161.092529296875 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
}
                <clipPath id="clip-path">
                  <rect width="268" height="227" rx="23" fill="#fff"/>
                </clipPath>
                <image x="5%" y="5%" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref="/design.png" clip-path="url(#clip-path)"/>
              </svg>
            </div>
            <div className="card-text">
              <h3 className="card-title text-white text-2xl font-bold mb-2 mt-1 ml-2 opacity-100 " style={{fontFamily: 'bello-caps, sans-serif'}}>Design web & mobile</h3>
              <p className="card-description text-white text-xs mb-4 ml-2" style={{fontFamily: 'arial, sans-serif'}}>Création d'interfaces utilisateur intuitives et esthétiques, optimisées pour offrir une expérience engageante sur tous les appareils.</p>
            </div>
          </div>
        </div>
        </a>
        {isDesignModalOpen && (
            <div className="modal-overlay fixed top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-6">
            <div id='id-modal'className="modal w-4/5 lg:w-3/5 h-80vh overflow-y-auto bg-gray-800 text-white rounded-lg mt-10 overflow-x-hidden fixed top-0 justify-center items-center h-[calc(100%-1rem)] overflow-hidden">
            <div className="modal-header text-xl text-white-10 py-4 text-center p-6 mx-auto" style={{ fontFamily: 'Variex, sans-serif' }}>
              <h3>Design web, mobile and mockup</h3>
            </div>
            <div className="modal-body text-white-10 px-6 justify-center">
              <div className="text-content mt-4 whitespace-pre-line break-words lg:break-normal justify-center">
                {/* Contenu texte de la modale */}
                <p className="text-white-10 leading-relaxed text-center">
                  Démarquez vous de vos concurrents avec un design exceptionnel !             
                </p>
                <div className="categories-container flex justify-between space-between mt-4">
                  <div className="category-item">
                    <div className="category-content flex flex-col items-center">
                    <svg height="3.5vw" width="3.5vw">
                      <image href="modal/refonte.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Refonte de site internet</p>
                  </div>
                  </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/webdesign.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Webdesign</p>            
                    </div>
                    </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/app.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Mobile Design</p>            
                    </div>
                    </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/mockup.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Mockups produits</p>            
                    </div>
                </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Refonte de site internet</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  Le design de votre site web ne vous convient plus ? En étroite collaboration avec vous, nous lui donnons une <strong>nouvelle vie</strong> que nous retranscrivons dans une <strong>maquette interactive</strong> afin que vous puissiez visualiser le résultat. <br></br>Ensuite, notre service de développement pourra l'intégrer sur votre site !
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Webdesign</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  Créez un <strong>design web unique</strong> pour votre entreprise grâce à notre service de webdesign, en combinant esthétique, créativité et convivialité pour offrir une <strong>expérience utilisateur remarquable</strong> ! <br></br>Nous collaborons étroitement avec vous pour créer une <strong>maquette interactive</strong> sur laquelle vous pouvez épingler des zones afin de les commenter, et d’être certain d’obtenir un résultat dépassant vos attentes !                   </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Mobile design</h1>
                  <p className="content-text-service-modal">
                  Au travers de ce service, nous collaborons étroitement avec vous pour créer un design mobile <strong>accessible</strong>, <strong>optimal</strong>, <strong>créatif</strong> et <strong>esthétique</strong> pour votre application mobile ! <br></br>Nous créons une <strong>maquette interactive accessible directement depuis votre téléphone</strong>, afin de la tester en situation réelle. 
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Packaging</h1>
                  <p className="content-text-service-modal">
                  Vous commercialisez des <strong>produits physiques</strong> et vous rêvez d’un <strong>packaging unique ?</strong> Vous êtes au bon endroit ! <br></br><br></br>A partir de vos éléments visuels, notre équipe vous proposera un design qui vous correspond pour <strong>tous vos types de packaging ! </strong>
                  </p>
                 </div>
                </div>
              </div>
              </div>
              <div className="modal-footer flex">
          {/* Bouton pour fermer la modale */}
          <button className="modal-close bg-white text-white px-4 py-2 rounded" onClick={() => setIsDesignModalOpen(false)}>Fermer</button>
        </div>
      </div>
    </div>
)}


        {/* Carte 7 */}
        <a href="#ref-modal">
        <div className="service-card transition duration-300 ease-in-out hover:scale-105" id="ref-card" onClick={handleModal('ref')}>
        <div className="card-content">
        <div className="image-container w-full max-w-md mx-auto mt-2">
        <svg className="svg-container max-w-[50%] mx-auto" xmlns="http://www.w3.org/2000/svg" width="268" height="227" viewBox="0 0 268 227">
                {<svg xmlns="http://www.w3.org/2000/svg" width="268.369" height="227.879" viewBox="0 0 268.369 227.879">
  <g id="Tracé_39" data-name="Tracé 39" fill="#fff">
    <path d="M 185.0929870605469 227.3786468505859 C 179.582763671875 227.3786468505859 173.7744903564453 227.330078125 167.6251831054688 227.2786407470703 C 160.6944274902344 227.2206420898438 153.5277252197266 227.1607055664062 145.8684234619141 227.1607055664062 C 138.3666534423828 227.1607055664062 131.0921936035156 227.2188720703125 124.057258605957 227.275146484375 C 117.4020538330078 227.328369140625 111.1159210205078 227.3786468505859 104.9799194335938 227.3786468505859 C 91.06758880615234 227.3786468505859 74.98142242431641 227.1424713134766 61.15705490112305 225.3908386230469 C 54.41259002685547 224.5362701416016 48.5626220703125 223.3889007568359 43.27278900146484 221.8832092285156 C 37.58708953857422 220.2648010253906 32.69162368774414 218.2759399414062 28.30658912658691 215.8029327392578 C 18.97358894348145 210.5394439697266 12.23215579986572 203.1511993408203 7.697089672088623 193.2160339355469 C 5.323089599609375 188.0152740478516 3.517789602279663 181.9773406982422 2.331289529800415 175.2700347900391 C 1.116122841835022 168.4007415771484 0.4999895691871643 160.5490112304688 0.4999895691871643 151.9328765869141 C 0.4999895691871643 141.6600036621094 1.597289562225342 131.3937072753906 3.761456251144409 121.4191055297852 C 5.870623111724854 111.6979751586914 9.017823219299316 102.135871887207 13.11565589904785 92.99833679199219 C 17.13938903808594 84.02606964111328 22.11982345581055 75.37213897705078 27.91855621337891 67.27693939208984 C 33.66268920898438 59.25793838500977 40.25955581665039 51.71710586547852 47.52595520019531 44.86387252807617 C 54.79288864135742 38.01013946533203 62.78922271728516 31.78770637512207 71.29285430908203 26.36944007873535 C 79.87845611572266 20.89890670776367 89.05692291259766 16.20027351379395 98.57332611083984 12.40407276153564 C 108.2659912109375 8.537506103515625 118.4093246459961 5.567872524261475 128.7215270996094 3.577672719955444 C 139.3031616210938 1.535472631454468 150.1943206787109 0.5000059604644775 161.092529296875 0.5000059604644775 C 171.9404907226562 0.5000059604644775 182.0486907958984 1.534439325332642 191.1363525390625 3.574605941772461 C 199.8997192382812 5.541939258575439 207.9792938232422 8.504339218139648 215.1505889892578 12.37953948974609 C 222.0425872802734 16.10377311706543 228.3098602294922 20.78727340698242 233.7782897949219 26.29987335205078 C 239.0136871337891 31.57757186889648 243.6841888427734 37.78440475463867 247.6601257324219 44.74803924560547 C 251.4446563720703 51.37647247314453 254.724853515625 58.91050720214844 257.4096374511719 67.14083862304688 C 259.9430236816406 74.90724182128906 262.0344543457031 83.56647491455078 263.6258239746094 92.87797546386719 C 266.4813537597656 109.5863418579102 267.8694458007812 128.9033660888672 267.8694458007812 151.9328765869141 C 267.8694458007812 186.5281066894531 262.1815185546875 205.6403045654297 248.8503875732422 215.8393707275391 C 242.5865936279297 220.6315002441406 234.4533538818359 223.6669006347656 223.2546539306641 225.3919067382812 C 211.9198608398438 227.1379089355469 198.2148284912109 227.3786010742188 185.0929870605469 227.3786468505859 Z" stroke="none"/>
    <path d="M 161.092529296875 1 C 150.2260589599609 1 139.3667602539062 2.032440185546875 128.8162536621094 4.068634033203125 C 118.5349273681641 6.052871704101562 108.4220581054688 9.013565063476562 98.75856018066406 12.86846923828125 C 89.27119445800781 16.65310668945312 80.12078857421875 21.33737182617188 71.5615234375 26.79110717773438 C 63.08439636230469 32.1925048828125 55.11308288574219 38.39544677734375 47.8690185546875 45.22760009765625 C 40.62599182128906 52.05880737304688 34.05046081542969 59.57521057128906 28.32502746582031 67.56809997558594 C 22.54568481445312 75.63624572753906 17.58198547363281 84.26103210449219 13.57188415527344 93.20294189453125 C 9.48822021484375 102.3088684082031 6.351898193359375 111.8378372192383 4.250091552734375 121.5251388549805 C 2.093475341796875 131.4649353027344 1 141.6955718994141 1 151.932861328125 C 1 160.5198669433594 1.613555908203125 168.3423461914062 2.8236083984375 175.1829376220703 C 4.002777099609375 181.8486633300781 5.795501708984375 187.8460388183594 8.15191650390625 193.0084075927734 C 12.64152526855469 202.8440093994141 19.31448364257812 210.1576690673828 28.5521240234375 215.3674011230469 C 32.90238952636719 217.8207702636719 37.76228332519531 219.7947998046875 43.40959167480469 221.4022674560547 C 48.67489624023438 222.9010009765625 54.50065612792969 224.0434112548828 61.21978759765625 224.894775390625 C 75.01655578613281 226.6429138183594 91.08305358886719 226.8786010742188 104.9797821044922 226.8786010742188 C 111.1138153076172 226.8786010742188 117.3989868164062 226.8283386230469 124.0531921386719 226.775146484375 C 131.0891571044922 226.7188720703125 138.3646545410156 226.6606750488281 145.8684234619141 226.6606750488281 C 153.5302581787109 226.6606750488281 160.698486328125 226.7206420898438 167.6306457519531 226.7786102294922 C 173.7784576416016 226.8300323486328 179.5853271484375 226.8786010742188 185.0930786132812 226.8786010742188 C 198.1950225830078 226.8786010742188 211.8770599365234 226.6386413574219 223.1786193847656 224.8977661132812 C 234.2911987304688 223.18603515625 242.35205078125 220.1815032958984 248.546630859375 215.4423065185547 C 261.7402038574219 205.3484344482422 267.3694458007812 186.35498046875 267.3694458007812 151.932861328125 C 267.3694458007812 128.9319152832031 265.9837036132812 109.6424407958984 263.1329956054688 92.96220397949219 C 261.5456848144531 83.67460632324219 259.4601440429688 75.03919982910156 256.9342651367188 67.29586791992188 C 254.2600250244141 59.0977783203125 250.99365234375 51.594970703125 247.2259216308594 44.99594116210938 C 243.271728515625 38.07037353515625 238.6278533935547 31.89857482910156 233.4233245849609 26.65200805664062 C 227.9894866943359 21.17427062988281 221.7616882324219 16.52030944824219 214.9128875732422 12.81941223144531 C 207.7819213867188 8.966033935546875 199.7454833984375 6.019775390625 191.0268249511719 4.062469482421875 C 181.9750671386719 2.030380249023438 171.9036865234375 1 161.092529296875 1 M 161.092529296875 0 C 250.0614166259766 0 268.3694458007812 68.02267456054688 268.3694458007812 151.932861328125 C 268.3694458007812 235.8430786132812 234.8373413085938 227.6606750488281 145.8684234619141 227.6606750488281 C 131.3534088134766 227.6606750488281 117.6797943115234 227.8786010742188 104.9797821044922 227.8786010742188 C 39.8358154296875 227.8786010742188 0 222.1533813476562 0 151.932861328125 C 0 68.02267456054688 72.12359619140625 0 161.092529296875 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
}
                <clipPath id="clip-path">
                  <rect width="268" height="227" rx="23" fill="#fff"/>
                </clipPath>
                <image x="5%" y="5%" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" xlinkHref="/ref.png" clip-path="url(#clip-path)"/>
              </svg>
            </div>
            <div className="card-text">
              <h3 className="card-title text-white text-2xl font-bold mb-2 mt-1 ml-2 opacity-100 " style={{fontFamily: 'bello-caps, sans-serif'}}>Référencement</h3>
              <p className="card-description text-white text-xs mb-4 ml-2" style={{fontFamily: 'arial, sans-serif'}}>Pour améliorer la visibilité de votre site web sur les moteurs de recherche, attirant ainsi un trafic qualifié et pertinent pour votre activité.</p>
            </div>
          </div>
        </div>
        </a>
        {isRefModalOpen && (
            <div className="modal-overlay fixed top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-6">
            <div id='id-modal'className="modal w-4/5 lg:w-3/5 h-80vh overflow-y-auto bg-gray-800 text-white rounded-lg mt-10 overflow-x-hidden fixed top-0 justify-center items-center h-[calc(100%-1rem)] overflow-hidden">
            <div className="modal-header text-xl text-white-10 py-4 text-center p-6 mx-auto" style={{ fontFamily: 'Variex, sans-serif' }}>
              <h3>Référencement SEO</h3>
            </div>
            <div className="modal-body text-white-10 px-6 justify-center">
              <div className="text-content mt-4 whitespace-pre-line break-words lg:break-normal justify-center">
                {/* Contenu texte de la modale */}
                <p className="text-white-10 leading-relaxed text-center">
                L'optimisation du SEO permet d'optimiser le référencement de votre site dans les moteurs de recherche, et ainsi d'apparaître le plus haut possible dans les résultats de recherche. 
                </p>
                <div className="categories-container flex justify-around space-around mt-4">
                  <div className="category-item">
                    <div className="category-content flex flex-col items-center">
                    <svg height="3.5vw" width="3.5vw">
                      <image href="modal/html.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Code source</p>
                  </div>
                  </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/seo.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Articles SEO</p>            
                    </div>
                    </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/key.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Mots clés</p>            
                    </div>
                    </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Optimisation du code source</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  Optimisation des <strong>balises HTML</strong>, des <strong>mots clés pertinents</strong> et des <strong>descriptions précises</strong> pour améliorer la compréhension du contenu par les moteurs de recherche et des sémantiques.
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Articles SEO</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  Rédaction d’articles de blog <strong>riches en mots clés</strong> permettant de booster votre référencement. 
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal text-xs md:text-xs lg:text-sm">
                  <h1 className="title-service-modal">Recherche de mots clés</h1>
                  <p className="content-text-service-modal">
                  Analyse des <strong>mots clés les plus performants</strong> dans votre niche afin de cibler les pistes d'amélioration dans la rédaction de votre contenu.
                  </p>
                 </div>
                </div>
              </div>
              </div>
              <div className="modal-footer flex">
          {/* Bouton pour fermer la modale */}
          <button className="modal-close bg-white text-white px-4 py-2 rounded" onClick={() => setIsRefModalOpen(false)}>Fermer</button>
        </div>
      </div>
    </div>
)}


        {/* Carte 8 */}
        <a href="#miniature-modal">
        <div className="service-card transition duration-300 ease-in-out hover:scale-105" id="miniature-card" onClick={handleModal('miniature')}>
        <div className="card-content">
        <div className="image-container w-full max-w-md mx-auto mt-2">
        <svg className="svg-container max-w-[50%] mx-auto" xmlns="http://www.w3.org/2000/svg" width="268" height="227" viewBox="0 0 268 227">
                {<svg xmlns="http://www.w3.org/2000/svg" width="268.369" height="227.879" viewBox="0 0 268.369 227.879">
  <g id="Tracé_39" data-name="Tracé 39" fill="#fff">
    <path d="M 185.0929870605469 227.3786468505859 C 179.582763671875 227.3786468505859 173.7744903564453 227.330078125 167.6251831054688 227.2786407470703 C 160.6944274902344 227.2206420898438 153.5277252197266 227.1607055664062 145.8684234619141 227.1607055664062 C 138.3666534423828 227.1607055664062 131.0921936035156 227.2188720703125 124.057258605957 227.275146484375 C 117.4020538330078 227.328369140625 111.1159210205078 227.3786468505859 104.9799194335938 227.3786468505859 C 91.06758880615234 227.3786468505859 74.98142242431641 227.1424713134766 61.15705490112305 225.3908386230469 C 54.41259002685547 224.5362701416016 48.5626220703125 223.3889007568359 43.27278900146484 221.8832092285156 C 37.58708953857422 220.2648010253906 32.69162368774414 218.2759399414062 28.30658912658691 215.8029327392578 C 18.97358894348145 210.5394439697266 12.23215579986572 203.1511993408203 7.697089672088623 193.2160339355469 C 5.323089599609375 188.0152740478516 3.517789602279663 181.9773406982422 2.331289529800415 175.2700347900391 C 1.116122841835022 168.4007415771484 0.4999895691871643 160.5490112304688 0.4999895691871643 151.9328765869141 C 0.4999895691871643 141.6600036621094 1.597289562225342 131.3937072753906 3.761456251144409 121.4191055297852 C 5.870623111724854 111.6979751586914 9.017823219299316 102.135871887207 13.11565589904785 92.99833679199219 C 17.13938903808594 84.02606964111328 22.11982345581055 75.37213897705078 27.91855621337891 67.27693939208984 C 33.66268920898438 59.25793838500977 40.25955581665039 51.71710586547852 47.52595520019531 44.86387252807617 C 54.79288864135742 38.01013946533203 62.78922271728516 31.78770637512207 71.29285430908203 26.36944007873535 C 79.87845611572266 20.89890670776367 89.05692291259766 16.20027351379395 98.57332611083984 12.40407276153564 C 108.2659912109375 8.537506103515625 118.4093246459961 5.567872524261475 128.7215270996094 3.577672719955444 C 139.3031616210938 1.535472631454468 150.1943206787109 0.5000059604644775 161.092529296875 0.5000059604644775 C 171.9404907226562 0.5000059604644775 182.0486907958984 1.534439325332642 191.1363525390625 3.574605941772461 C 199.8997192382812 5.541939258575439 207.9792938232422 8.504339218139648 215.1505889892578 12.37953948974609 C 222.0425872802734 16.10377311706543 228.3098602294922 20.78727340698242 233.7782897949219 26.29987335205078 C 239.0136871337891 31.57757186889648 243.6841888427734 37.78440475463867 247.6601257324219 44.74803924560547 C 251.4446563720703 51.37647247314453 254.724853515625 58.91050720214844 257.4096374511719 67.14083862304688 C 259.9430236816406 74.90724182128906 262.0344543457031 83.56647491455078 263.6258239746094 92.87797546386719 C 266.4813537597656 109.5863418579102 267.8694458007812 128.9033660888672 267.8694458007812 151.9328765869141 C 267.8694458007812 186.5281066894531 262.1815185546875 205.6403045654297 248.8503875732422 215.8393707275391 C 242.5865936279297 220.6315002441406 234.4533538818359 223.6669006347656 223.2546539306641 225.3919067382812 C 211.9198608398438 227.1379089355469 198.2148284912109 227.3786010742188 185.0929870605469 227.3786468505859 Z" stroke="none"/>
    <path d="M 161.092529296875 1 C 150.2260589599609 1 139.3667602539062 2.032440185546875 128.8162536621094 4.068634033203125 C 118.5349273681641 6.052871704101562 108.4220581054688 9.013565063476562 98.75856018066406 12.86846923828125 C 89.27119445800781 16.65310668945312 80.12078857421875 21.33737182617188 71.5615234375 26.79110717773438 C 63.08439636230469 32.1925048828125 55.11308288574219 38.39544677734375 47.8690185546875 45.22760009765625 C 40.62599182128906 52.05880737304688 34.05046081542969 59.57521057128906 28.32502746582031 67.56809997558594 C 22.54568481445312 75.63624572753906 17.58198547363281 84.26103210449219 13.57188415527344 93.20294189453125 C 9.48822021484375 102.3088684082031 6.351898193359375 111.8378372192383 4.250091552734375 121.5251388549805 C 2.093475341796875 131.4649353027344 1 141.6955718994141 1 151.932861328125 C 1 160.5198669433594 1.613555908203125 168.3423461914062 2.8236083984375 175.1829376220703 C 4.002777099609375 181.8486633300781 5.795501708984375 187.8460388183594 8.15191650390625 193.0084075927734 C 12.64152526855469 202.8440093994141 19.31448364257812 210.1576690673828 28.5521240234375 215.3674011230469 C 32.90238952636719 217.8207702636719 37.76228332519531 219.7947998046875 43.40959167480469 221.4022674560547 C 48.67489624023438 222.9010009765625 54.50065612792969 224.0434112548828 61.21978759765625 224.894775390625 C 75.01655578613281 226.6429138183594 91.08305358886719 226.8786010742188 104.9797821044922 226.8786010742188 C 111.1138153076172 226.8786010742188 117.3989868164062 226.8283386230469 124.0531921386719 226.775146484375 C 131.0891571044922 226.7188720703125 138.3646545410156 226.6606750488281 145.8684234619141 226.6606750488281 C 153.5302581787109 226.6606750488281 160.698486328125 226.7206420898438 167.6306457519531 226.7786102294922 C 173.7784576416016 226.8300323486328 179.5853271484375 226.8786010742188 185.0930786132812 226.8786010742188 C 198.1950225830078 226.8786010742188 211.8770599365234 226.6386413574219 223.1786193847656 224.8977661132812 C 234.2911987304688 223.18603515625 242.35205078125 220.1815032958984 248.546630859375 215.4423065185547 C 261.7402038574219 205.3484344482422 267.3694458007812 186.35498046875 267.3694458007812 151.932861328125 C 267.3694458007812 128.9319152832031 265.9837036132812 109.6424407958984 263.1329956054688 92.96220397949219 C 261.5456848144531 83.67460632324219 259.4601440429688 75.03919982910156 256.9342651367188 67.29586791992188 C 254.2600250244141 59.0977783203125 250.99365234375 51.594970703125 247.2259216308594 44.99594116210938 C 243.271728515625 38.07037353515625 238.6278533935547 31.89857482910156 233.4233245849609 26.65200805664062 C 227.9894866943359 21.17427062988281 221.7616882324219 16.52030944824219 214.9128875732422 12.81941223144531 C 207.7819213867188 8.966033935546875 199.7454833984375 6.019775390625 191.0268249511719 4.062469482421875 C 181.9750671386719 2.030380249023438 171.9036865234375 1 161.092529296875 1 M 161.092529296875 0 C 250.0614166259766 0 268.3694458007812 68.02267456054688 268.3694458007812 151.932861328125 C 268.3694458007812 235.8430786132812 234.8373413085938 227.6606750488281 145.8684234619141 227.6606750488281 C 131.3534088134766 227.6606750488281 117.6797943115234 227.8786010742188 104.9797821044922 227.8786010742188 C 39.8358154296875 227.8786010742188 0 222.1533813476562 0 151.932861328125 C 0 68.02267456054688 72.12359619140625 0 161.092529296875 0 Z" stroke="none" fill="#707070"/>
  </g>
</svg>
}
                <clipPath id="clip-path">
                  <rect width="268" height="227" rx="23" fill="#fff"/>
                </clipPath>
                <image x="6%" y="6%" width="92%" height="92%" preserveAspectRatio="xMidYMid slice" xlinkHref="/vid.png" clip-path="url(#clip-path)"/>
              </svg>
            </div>
            <div className="card-text">
              <h3 className="card-title text-white text-2xl font-bold mb-2 mt-1 ml-2 opacity-100 " style={{fontFamily: 'bello-caps, sans-serif'}}>Miniatures</h3>
              <p className="card-description text-white text-xs mb-4 ml-2" style={{fontFamily: 'arial, sans-serif'}}>Des miniatures attrayantes, captivantes et optimisées pour votre contenu vidéo, pour YouTube, TikTok, LinkedIn et Instagram.</p>
            </div>
          </div>
        </div>
        </a>
        {isMiniatureModalOpen && (
            <div className="modal-overlay fixed top-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center p-6">
            <div id='id-modal'className="modal w-4/5 lg:w-3/5 h-80vh overflow-y-auto bg-gray-800 text-white rounded-lg mt-10 overflow-x-hidden fixed top-0 justify-center items-center h-[calc(100%-1rem)] overflow-hidden">
            <div className="modal-header text-xl text-white-10 py-4 text-center p-6 mx-auto" style={{ fontFamily: 'Variex, sans-serif' }}>
              <h3>Miniatures vidéos</h3>
            </div>
            <div className="modal-body text-white-10 px-6 justify-center">
              <div className="text-content mt-4 whitespace-pre-line break-words lg:break-normal justify-center">
                {/* Contenu texte de la modale */}
                <p className="text-white-10 leading-relaxed text-center">
                  Les miniatures de vos vidéos sont le premier élément à être vu par votre public, et ainsi un support dont le design doit être soigné pour attirer votre public cible.              
                </p>
                <div className="categories-container flex justify-around space-around mt-4">
                  <div className="category-item">
                    <div className="category-content flex flex-col items-center">
                    <svg height="3.5vw" width="3.5vw">
                      <image href="modal/youtube.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Miniatures Youtube</p>
                  </div>
                  </div>
                  <div className="category-item">
                  <div className="category-content flex flex-col items-center">
                  <svg height="3.5vw" width="3.5vw">
                      <image href="modal/instagram.png" width="100%" height="100%" />
                    </svg>
                    <p className="text-center text-white mt-2 text-xs md:text-xs lg:text-sm">Miniatures Instagram</p>            
                    </div>
                    </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Miniatures Youtube</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  Création de miniatures de vidéos pour Youtube.
                  </p>
                 </div>
                </div>
                <div className="container-service-modal">
                <div className="background-image-service-modal">
                  <h1 className="title-service-modal">Miniatures Instagram</h1>
                  <p className="content-text-service-modal text-xs md:text-xs lg:text-sm">
                  Création de miniatures pour vos réels Instagram.
                  </p>
                 </div>
                </div>
              </div>
              </div>
              <div className="modal-footer flex">
          {/* Bouton pour fermer la modale */}
          <button className="modal-close bg-white text-white px-4 py-2 rounded" onClick={() => setIsMiniatureModalOpen(false)}>Fermer</button>
        </div>
      </div>
    </div>
)}
</div>
</div>
  );
    };

    export default Services;
