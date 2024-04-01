'use client'

import { useState, useEffect, useRef, useCallback } from 'react';
import Flickity from 'react-flickity-component';
import 'flickity/css/flickity.css';


// Interface pour spécifier le type de données pour chaque diapositive
interface Slide {
  id: number;
  image: string;
}

interface ModalSlideProps {
  slide: Slide;
  closeModal: () => void;
}

const flickityOptions = {
  prevNextButtons: true,
  pageDots: true,
  wrapAround: true,
  draggable: true,
  cellAlign: 'center',
  autoPlay: true,
};


const ModalSlide = ({ slide, closeModal }: ModalSlideProps) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      event.preventDefault();
    };

    const modalContentElement = modalContentRef.current;

    if (modalContentElement) {
      modalContentElement.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        modalContentElement.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);

  let modalContent = null;
  
  if (slide.id === 1) {
    modalContent = (
      <div className="modal-content-pf" ref={modalContentRef}>
        <div className="modal-header mb-4">
          <h1 className="text-3xl mb-3">Dog Addict</h1>
            <div className="tags-container mb-9">
              <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Développement web e-commerce</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design produit</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Communication</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Identité visuelle</p>
              </div>
          <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}><strong>"Dog Addict"</strong> est un projet dynamique sur lequel notre équipe s'est investie pleinement. <br></br>
          Cette <strong>boutique en ligne</strong> dédiée aux vêtements pour chiens représente l'une de nos <strong>réalisations les plus complètes</strong>. <br></br> <br></br>
          Nous avons pris en charge <strong>l'intégralité de sa création</strong>, depuis l'élaboration de <strong>l'identité visuelle</strong> jusqu'à la <strong>gestion actuelle du site</strong>.<br></br><br></br>
          Initialement, nous avons développé l'identité visuelle de <strong>Dog Addict</strong> en travaillant sur le logo et l'entièreté de la charte graphique, reflétant parfaitement l'esprit et le style que la boutique souhaite communiquer. Nous avons collaboré étroitement avec l'équipe pour capturer l'essence même de la marque, garantissant ainsi un logo qui incarne l'amour des chiens et le caractère unique de <strong>Dog Addict</strong>.<br></br><br></br>
          En parallèle, notre équipe s'est attelée à la conception des designs de packaging pour les produits de la boutique. Nous avons soigneusement élaboré des designs attrayants tout en tenant compte des particularités des vêtements pour chiens, assurant ainsi une présentation esthétique et fonctionnelle de chaque article.<br></br><br></br>
          Pour la communication visuelle, nous avons produit des vidéos et des photos mettant en valeur les produits de <strong>Dog Addict</strong>. Ces médias ont été soigneusement créés pour susciter l'intérêt des clients et refléter la qualité des vêtements pour chiens proposés par la boutique.<br></br><br></br>
          En plus de ces éléments, notre équipe a conçu et développé le site web de <strong>Dog Addict</strong>, veillant à créer une plateforme conviviale et engageante pour les visiteurs. Nous avons mis l'accent sur une navigation intuitive et des visuels attrayants, garantissant ainsi une expérience d'achat en ligne agréable et pratique pour les amoureux des chiens.<br></br><br></br>
          Aujourd'hui, nous continuons à assurer la gestion et la maintenance du site web de <strong>Dog Addict</strong>, tout en restant engagés à soutenir le succès continu de cette boutique en ligne passionnante."

</p>
        </div>
        <div className="modal-body">
          <div className="horizontal-scroll-container">
            <img src="1.2.png" alt="Image 2" />
            <img src="1.3.png" alt="Image 3" />
            {/* ... Ajoutez d'autres images de la slide */}
          </div>
        </div>
      </div>
      );
  } else if (slide.id === 2) {
    modalContent = (
      <div className="modal-content-pf" ref={modalContentRef}>
        <div className="modal-header mb-4">
          <h1 className="text-3xl mb-3">Ebook Forge</h1>
            <div className="tags-container mb-9">
              <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Développement web</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Identité visuelle</p>
              </div>
              <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                <strong>"Ebook Forge"</strong> représente un projet ambitieux au cœur duquel notre équipe a façonné l'identité visuelle et le design du site. Cette plateforme est destinée à offrir une multitude de services autour de la publication d'ouvrages en ligne. Actuellement en pause, le développement de ce projet prometteur devrait reprendre prochainement.<br></br><br></br>
                Nous avons entamé ce voyage avec la création de l'identité visuelle d'<strong>Ebook Forge</strong>, en concevant un logo qui incarne l'essence de la publication numérique et de la création littéraire en ligne. Ce logo a été pensé pour représenter l'innovation et la facilité d'accès aux outils de publication.<br></br><br></br>
                En parallèle, nous avons travaillé sur le design du site web, en mettant l'accent sur une interface conviviale et intuitive. Notre objectif était de créer une plateforme accueillante, offrant une expérience fluide pour les auteurs et les éditeurs souhaitant publier leurs ouvrages en ligne.<br></br><br></br>
                Bien que le projet soit actuellement en pause, nous restons prêts à reprendre le développement d'<strong>Ebook Forge</strong>. Notre équipe est impatiente de poursuivre ce travail pour faire de cette plateforme une destination incontournable pour tous ceux qui souhaitent partager leurs créations littéraires avec le monde.
              </p>
        </div>
        <div className="modal-body">
          <div className="horizontal-scroll-container">
            <img src="2.1.png" alt="Image 1" />
            <img src="2.2.png" alt="Image 2" />
            <img src="2.3.png" alt="Image 3" />
            {/* ... Ajoutez d'autres images de la slide */}
          </div>
        </div>
      </div>
      );
    } else if (slide.id === 3) {
      modalContent = (
        <div className="modal-content-pf" ref={modalContentRef}>
          <div className="modal-header mb-4">
            <h1 className="text-3xl mb-3">CryptoBlob</h1>
              <div className="tags-container mb-9">
                <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design web</p>
                </div>
                <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                  <strong>"Cryptoblob"</strong> représente une plateforme de suivi des actualités cryptos, pour laquelle notre équipe a conçu le design du site web. Cet espace dédié à l'actualité des cryptomonnaies offre une vue complète sur ce marché en pleine expansion.<br></br><br></br>
                  Notre contribution initiale à ce projet a été la conception du design du site web. Nous avons accordé une attention particulière à la création d'une interface intuitive et visuellement attrayante. L'objectif était de fournir aux utilisateurs une expérience fluide pour suivre les dernières actualités, analyses et tendances du monde des cryptomonnaies.<br></br><br></br>
                  Bien que notre implication actuelle se limite à la conception du site web, nous sommes fiers d'avoir contribué à la création de ce point central pour les passionnés de cryptos. Nous sommes également prêts à soutenir et à collaborer pour le développement futur de cette plateforme, afin d'offrir une expérience d'actualités crypto toujours plus enrichissante et complète.
                </p>
          </div>
          <div className="modal-body">
            <div className="horizontal-scroll-container">
              <img src="3.1.png" alt="Image 1" />
              <img src="3.2.png" alt="Image 2" />
              {/* ... Ajoutez d'autres images de la slide */}
            </div>
          </div>
        </div>
        );
      } else if (slide.id === 4) {
        modalContent = (
          <div className="modal-content-pf" ref={modalContentRef}>
            <div className="modal-header mb-4">
              <h1 className="text-3xl mb-3">Rivaron</h1>
                <div className="tags-container mb-9">
                <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Développement web e-commerce</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Marketing</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Identité visuelle</p>
                  </div>
                  <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                    "<strong>Rivaron</strong>" est une boutique mono-produit spécialisée dans une bougie anti-moustique aux composés naturels, pour laquelle nous avons joué un rôle essentiel. Notre collaboration exhaustive a débuté avec la création de l'identité visuelle de <strong>Rivaron</strong>, suivie par le design, le développement et la gestion de leur site e-commerce, ainsi que la réalisation de plusieurs supports de prospection.<br></br><br></br>
                    Nous avons commencé par développer l'identité visuelle de <strong>Rivaron</strong> en élaborant un logo représentatif de leur bougie anti-moustique naturelle. Ce logo a été conçu pour incarner les valeurs de la marque, mettant en avant l'aspect naturel et efficace de leur produit.<br></br><br></br>
                    En parallèle, nous avons mis en œuvre la conception, le développement et la gestion du site e-commerce de <strong>Rivaron</strong>, offrant ainsi aux clients une plateforme conviviale pour découvrir et acheter cette bougie anti-moustique innovante.<br></br><br></br>
                    Outre le site, nous avons créé plusieurs supports de prospection dédiés à la promotion de ce produit unique. Des brochures, des flyers et des présentations numériques ont été élaborés pour présenter de manière captivante les avantages de la bougie anti-moustique de <strong>Rivaron</strong>.<br></br><br></br>
                    Notre engagement envers <strong>Rivaron</strong> ne se limite pas à la création ; nous assurons également la gestion continue et la maintenance du site e-commerce. Travailler avec <strong>Rivaron</strong> a été une expérience enrichissante, et nous sommes impatients de soutenir leur expansion future dans l'univers des bougies anti-moustiques naturelles.
                  </p>
            </div>
            <div className="modal-body">
              <div className="horizontal-scroll-container">
                <img src="4.1.png" alt="Image 1" />
                <img src="4.2.png" alt="Image 2" />
                <img src="4.3.jpg" alt="Image 2" />
                <img src="4.4.jpg" alt="Image 2" />
                <img src="4.5.png" alt="Image 2" />
                {/* ... Ajoutez d'autres images de la slide */}
              </div>
            </div>
          </div>
          );
        } else if (slide.id === 5) {
          modalContent = (
            <div className="modal-content-pf" ref={modalContentRef}>
              <div className="modal-header mb-4">
                <h1 className="text-3xl mb-3">Antharys</h1>
                  <div className="tags-container mb-9">
                  <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design web</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Développement web</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Marketing</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Identité visuelle</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Communication</p>
                    </div>
                    <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                      "<strong>Antharys</strong>" représente une étape importante dans notre parcours professionnel. En collaborant avec cette ancienne agence web, nous avons pris en charge la conception et le développement web, l'identité visuelle, la gestion de la communication sur les réseaux sociaux, ainsi que la création de multiples supports marketing.<br></br><br></br>
                      Nous avons entamé notre collaboration avec <strong>Antharys</strong> en élaborant une identité visuelle distinctive pour l'agence. Cela incluait la création d'un logo et d'une identité visuelle cohérente, reflétant leur professionnalisme et leur vision innovante.<br></br><br></br>
                      Ensuite, nous avons pris en charge la conception et le développement de leur site web, mettant en avant leur expertise et leurs services avec une interface intuitive et convaincante.<br></br><br></br>
                      Parallèlement, nous avons géré la communication sur les réseaux sociaux pour <strong>Antharys</strong>, utilisant des stratégies ciblées pour accroître leur présence en ligne et renforcer leur notoriété dans le domaine du web.<br></br><br></br>
                      Enfin, nous avons créé divers supports marketing pour <strong>Antharys</strong>, tels que des brochures, des présentations et d'autres outils promotionnels. Chacun de ces supports a été conçu pour mettre en avant les forces et les compétences d'<strong>Antharys</strong> dans le secteur de la création web.<br></br><br></br>
                      Cette collaboration avec <strong>Antharys</strong> a été une expérience précieuse et enrichissante, nous permettant de déployer nos compétences et notre créativité pour soutenir la croissance et le rayonnement de cette agence web.
                    </p>
              </div>
              <div className="modal-body">
                <div className="horizontal-scroll-container">
                  <img src="5.1.png" alt="Image 1" />
                  <img src="5.2.png" alt="Image 2" />
                  {/* ... Ajoutez d'autres images de la slide */}
                </div>
              </div>
            </div>
            );
          } else if (slide.id === 6) {
            modalContent = (
              <div className="modal-content-pf" ref={modalContentRef}>
                <div className="modal-header mb-4">
                  <h1 className="text-3xl mb-3">Destiny</h1>
                    <div className="tags-container mb-9">
                    <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design mobile</p> 
                      </div>
                      <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                        "<strong>Destiny</strong>" est une application de mise en relation professionnelle en cours de développement. Notre équipe a créé la maquette de cette application à l'aide d'Adobe XD dans le but de présenter le projet à des investisseurs et de concrétiser cette idée prometteuse.<br></br><br></br>
                        L'objectif principal de <strong>Destiny</strong> est de faciliter les connexions professionnelles et de permettre aux utilisateurs de trouver des opportunités de carrière, des partenaires commerciaux et des mentors dans leur domaine d'expertise. Grâce à la maquette réalisée, nous avons pu concevoir une interface utilisateur conviviale et intuitive pour offrir une expérience immersive aux utilisateurs.<br></br><br></br>
                        La maquette de <strong>Destiny</strong> met en avant les fonctionnalités clés de l'application, permettant aux utilisateurs de créer un profil professionnel détaillé, de rechercher des contacts et de se connecter avec des professionnels partageant les mêmes intérêts ou besoins. Nous avons également intégré des fonctionnalités avancées dans la maquette, telles que la recommandation de contacts basée sur les intérêts et les compétences, ainsi que des outils de messagerie sécurisés pour faciliter les échanges professionnels. Nous avons veillé à ce que l'application propose une expérience responsive, s'adaptant parfaitement à tous les appareils et tailles d'écran.<br></br><br></br>
                        Bien que notre rôle se limite à la création de la maquette, nous sommes convaincus que <strong>Destiny</strong> a le potentiel de transformer la façon dont les professionnels se connectent et évoluent dans leur carrière. Cette application de mise en relation professionnelle vise à faciliter les opportunités de réseautage et à favoriser la croissance professionnelle de chacun.
                      </p>

                </div>
                <div className="modal-body" ref={modalContentRef}>
                  <div className="horizontal-scroll-container">
                    <img src="6.1.jpg" alt="Image 1" />
                    <img src="6.2.jpg" alt="Image 2" />
                    <img src="6.3.jpg" alt="Image 3" />
                    {/* ... Ajoutez d'autres images de la slide */}
                  </div>
                </div>
              </div>
              );
            } else if (slide.id === 7) {
              modalContent = (
                <div className="modal-content-pf" ref={modalContentRef}>
                  <div className="modal-header mb-4">
                    <h1 className="text-3xl mb-3">No Intox</h1>
                      <div className="tags-container mb-9">
                      <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design web</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Identité visuelle</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Mockups produits</p> 
                        </div>
                        <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                          "<strong>No Intox</strong>" est un projet passionnant sur lequel notre équipe se concentre actuellement. Il s'agit d'une boutique en ligne en cours de développement, spécialisée dans la vente de produits de beauté naturels. Nous avons eu l'opportunité de jouer un rôle essentiel dans la création de ce projet, en fournissant des designs de logos, de packaging produits et de maquette de site web, ainsi qu'en travaillant sur le développement web.<br></br><br></br>
                          Tout d'abord, nous avons contribué à la création des designs de logo pour <strong>No Intox</strong>. Nous avons travaillé en étroite collaboration avec l'équipe pour comprendre leur vision et leur identité de marque, afin de produire le logo qui reflète l'essence naturelle et authentique de leurs produits.<br></br><br></br>
                          En ce qui concerne le packaging des produits, nous avons fourni des designs attrayants et fonctionnels, en tenant compte des spécificités des produits de beauté naturels. Nous avons également créé des mockups réalistes pour donner un aperçu visuel des produits finis, permettant à l'équipe de <strong>No Intox</strong> de visualiser et de partager leurs idées avec les partenaires et les clients potentiels.<br></br><br></br>
                          Pour compléter l'expérience, nous avons travaillé sur la conception de la maquette du site web de <strong>No Intox</strong>. En nous appuyant sur les valeurs de la marque et l'esthétique naturelle des produits, nous avons créé une maquette attrayante et intuitive. Nous avons accordé une attention particulière à l'expérience utilisateur, en veillant à ce que la navigation soit fluide, les informations claires et les appels à l'action bien placés. Notre objectif était de fournir une interface qui mette en valeur les produits tout en offrant une expérience agréable aux visiteurs du site.<br></br><br></br>
                          Actuellement, notre équipe se concentre sur le développement web de <strong>No Intox</strong>.
                        </p>
                  </div>
                  <div className="modal-body">
                    <div className="horizontal-scroll-container">
                      <img src="7.1.png" alt="Image 1" />
                      <img src="7.2.png" alt="Image 2" />
                      <img src="7.3.png" alt="Image 3" />
                      <img src="7.4.jpg" alt="Image 3" />
                      <img src="7.5.jpg" alt="Image 3" />
                      <img src="7.6.jpg" alt="Image 3" />
                      <img src="7.7.jpg" alt="Image 3" />
                      {/* ... Ajoutez d'autres images de la slide */}
                    </div>
                  </div>
                </div>
                );
              } else if (slide.id === 8) {
                modalContent = (
                  <div className="modal-content-pf" ref={modalContentRef}>
                    <div className="modal-header mb-4">
                      <h1 className="text-3xl mb-3">Faire-parterie</h1>
                        <div className="tags-container mb-9">
                        <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design web</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Mockups produits</p> 
                          </div>
                          <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                            "<strong>Faire-parterie</strong>" est un site web e-commerce en cours de développement, spécialisé dans la vente en ligne de faire-parts personnalisés. Notre équipe a créé la maquette de ce site web à l'aide d'Adobe XD dans le but de présenter le projet à des investisseurs et de mettre en valeur notre vision pour cette plateforme unique.<br></br><br></br>
                            L'objectif principal de <strong>Faire-parterie</strong> est d'offrir aux utilisateurs une expérience d'achat en ligne conviviale et personnalisée pour la création de leurs faire-parts. Grâce à la maquette réalisée, nous avons conçu une interface utilisateur esthétique et intuitive qui met en avant la variété de faire-parts proposés et facilite la personnalisation selon les préférences de chaque client.<br></br><br></br>
                            La maquette de <strong>Faire-parterie</strong> met en avant les fonctionnalités clés du site web, permettant aux utilisateurs de naviguer facilement à travers les différentes catégories de faire-parts, d'explorer les designs disponibles et de personnaliser les éléments tels que les couleurs, les polices et les textes. Nous avons accordé une attention particulière à la présentation visuelle des catégories, en créant des images de présentation attrayantes pour aider les utilisateurs à trouver rapidement ce qu'ils recherchent. Nous avons également intégré des fonctionnalités avancées dans la maquette, telles que la possibilité d'importer des photos personnelles, d'ajouter des détails spécifiques tels que les dates et les lieux, ainsi que de prévisualiser et de commander les faire-parts personnalisés directement depuis le site web. Nous avons veillé à ce que la maquette soit responsive, offrant une expérience utilisateur cohérente sur tous les appareils et tailles d'écran.<br></br><br></br>
                            En plus de la maquette, notre équipe a également pris en charge le design des faire-parts et la création de mockups associés, afin de présenter aux investisseurs la qualité et l'esthétique de nos produits. Nous avons mis en valeur la diversité des styles, des thèmes et des motifs pour répondre aux besoins variés des clients et pour leur offrir des faire-parts uniques et mémorables.<br></br><br></br>
                            Bien que notre implication se limite à la création de la maquette, du design des faire-parts et des mockups, nous sommes convaincus que <strong>Faire-parterie</strong> aura un impact significatif dans le domaine des faire-parts personnalisés en ligne. Cette plateforme vise à offrir une expérience d'achat simplifiée et créative, permettant aux utilisateurs de célébrer des moments spéciaux avec des faire-parts uniques et personnalisés.
                          </p>

                    </div>
                    <div className="modal-body">
                      <div className="horizontal-scroll-container">
                        <img src="8.1.png" alt="Image 1" />
                        <img src="8.3.png" alt="Image 2" />
                        <img src="8.4.png" alt="Image 3" />
                        {/* ... Ajoutez d'autres images de la slide */}
                      </div>
                    </div>
                  </div>
                  );
                } else if (slide.id === 9) {
                  modalContent = (
                    <div className="modal-content-pf" ref={modalContentRef}>
                      <div className="modal-header mb-4">
                        <h1 className="text-3xl mb-3">Libbela</h1>
                          <div className="tags-container mb-9">
                          <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design web</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design Mobile</p> <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Supports marketing</p>
                            </div>
                            <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                              "<strong>Libbela</strong>" est un site web vitrine avec un tunnel de souscription en cours de développement, offrant une assurance sur les prothèses auditives. Notre équipe a créé la maquette de ce site web à l'aide d'Adobe XD, en tenant compte de trois tailles d'écran différentes : la version web, la version tablette et la version mobile. Nous avons également étendu notre expertise en créant des flyers promotionnels ainsi qu'une autre maquette de site web pour une assurance spécifique aux locations saisonnières.<br></br><br></br>
                              L'objectif principal de <strong>Libbela</strong> est de proposer une expérience utilisateur fluide et informative pour les personnes cherchant à souscrire à une assurance sur les prothèses auditives. À travers la maquette réalisée, nous avons conçu une interface intuitive et adaptative, qui offre une expérience optimale sur différents appareils et tailles d'écran. Que ce soit sur un ordinateur de bureau, une tablette ou un smartphone, les utilisateurs pourront naviguer facilement sur le site et accéder aux informations importantes.<br></br><br></br>
                              La maquette de <strong>Libbela</strong> pour la version web met en avant les fonctionnalités clés du site, permettant aux utilisateurs de découvrir les avantages de l'assurance, de consulter les différentes formules disponibles, de soumettre des demandes de devis personnalisés et de souscrire en quelques étapes simples. La version tablette et la version mobile ont été spécifiquement adaptées pour offrir une expérience utilisateur optimisée et une navigation intuitive, en tenant compte des contraintes d'espace et des interactions tactiles propres à ces appareils.<br></br><br></br>
                              En plus de la maquette du site web, notre équipe a également conçu des flyers promotionnels attrayants pour <strong>Libbela</strong>, afin de communiquer efficacement les avantages de l'assurance sur les prothèses auditives. Ces flyers sont conçus pour attirer l'attention des clients potentiels et les encourager à explorer davantage les offres de <strong>Libbela</strong>.<br></br><br></br>
                              Par ailleurs, nous avons également créé une autre maquette de site web pour une assurance dédiée aux locations saisonnières, démontrant notre capacité à concevoir des interfaces adaptées à différents domaines d'assurance. Cette autre maquette de site web met en avant les fonctionnalités spécifiques à cette assurance, telles que la couverture des dommages causés par les locataires, la responsabilité civile et les garanties supplémentaires pour les propriétaires.<br></br><br></br>
                              Bien que notre implication se limite à la création des maquettes et des flyers, nous sommes convaincus que <strong>Libbela</strong> et l'assurance pour locations saisonnières bénéficieront d'une interface utilisateur optimisée et d'une présentation visuelle attrayante. Ces maquettes reflètent notre engagement à fournir des expériences utilisateur de qualité, tout en répondant aux besoins spécifiques de chaque domaine d'assurance.
                            </p>
                      </div>
                      <div className="modal-body">
                        <div className="horizontal-scroll-container">
                          <img src="9.1.png" alt="Image 1" />
                          <img src="9.2.png" alt="Image 1" />
                          <img src="9.3.png" alt="Image 2" />
                          <img src="9.4.png" alt="Image 3" />
                          <img src="9.5.png" alt="Image 3" />
                          <img src="9.6.png" alt="Image 3" />
                          <img src="9.7.png" alt="Image 3" />
                          {/* ... Ajoutez d'autres images de la slide */}
                        </div>
                      </div>
                    </div>
                    );
                  } else if (slide.id === 10) {
                    modalContent = (
                      <div className="modal-content-pf" ref={modalContentRef}>
                        <div className="modal-header mb-4">
                          <h1 className="text-3xl mb-3">Sooocute</h1>
                            <div className="tags-container mb-9">
                            <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design mobile</p> 
                              </div>
                              <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                                "<strong>Sooocute</strong>" est une application ecommerce en cours de développement, dédiée à la vente de fournitures de bureau mignonnes. Notre équipe a réalisé la maquette de cette application en utilisant Adobe XD, dans le but de présenter le projet à des investisseurs et de donner vie à cette idée prometteuse.<br></br><br></br>
                                L'objectif principal de <strong>Sooocute</strong> est de proposer aux utilisateurs une expérience d'achat
                              </p>
                        </div>
                        <div className="modal-body">
                          <div className="horizontal-scroll-container">
                            <img src="10.1.png" alt="Image 1" />
                            <img src="10.2.png" alt="Image 2" />
                            <img src="10.3.png" alt="Image 3" />
                            <img src="10.4.png" alt="Image 4" />
                            <img src="10.5.png" alt="Image 5" />
                            {/* ... Ajoutez d'autres images de la slide */}
                          </div>
                        </div>
                      </div>
                      );
                    } else if (slide.id === 11) {
                      modalContent = (
                        <div className="modal-content-pf" ref={modalContentRef}>
                          <div className="modal-header mb-4">
                            <h1 className="text-3xl mb-3">OVM</h1>
                              <div className="tags-container mb-9">
                              <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design mobile</p> 
                                </div>
                                <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                                  "<strong>OVM</strong>" est une application planificatrice de mariages en cours de développement. Notre équipe a créé la maquette de cette application à l'aide d'Adobe XD dans le but de présenter le projet à des investisseurs et de concrétiser cette idée prometteuse.<br></br><br></br>
                                  L'objectif principal d'<strong>OVM</strong> est de simplifier le processus de planification de mariages et de fournir aux futurs mariés une plateforme complète pour organiser leur grand jour. Grâce à la maquette réalisée, nous avons conçu une interface utilisateur conviviale et intuitive pour offrir une expérience immersive aux utilisateurs.<br></br><br></br>
                                  La maquette d'<strong>OVM</strong> met en avant les fonctionnalités clés de l'application, permettant aux utilisateurs de créer des listes de tâches, de gérer les budgets, de trouver des prestataires de mariage, de gérer les invitations et bien plus encore. Nous avons accordé une attention particulière à la facilité de navigation, en veillant à ce que les utilisateurs puissent facilement accéder aux différentes fonctionnalités et les personnaliser en fonction de leurs besoins spécifiques. Nous avons également intégré des fonctionnalités avancées dans la maquette, telles que la possibilité de suivre l'avancement des tâches, d'envoyer des rappels et des notifications importantes, ainsi que de partager des idées et des inspirations avec d'autres utilisateurs. Nous avons veillé à ce que l'application propose une expérience responsive, s'adaptant parfaitement à tous les appareils et tailles d'écran.<br></br><br></br>
                                  Bien que notre rôle se limite à la création de la maquette, nous sommes convaincus qu'<strong>OVM</strong> a le potentiel de simplifier et d'améliorer considérablement le processus de planification de mariages. Cette application planificatrice de mariages vise à offrir aux futurs mariés une plateforme tout-en-un pour organiser et coordonner chaque aspect de leur journée spéciale.
                                </p>
                          </div>
                          <div className="modal-body">
                            <div className="horizontal-scroll-container">
                              <img src="11.1.jpg" alt="Image 1" />
                              <img src="11.2.jpg" alt="Image 2" />
                              <img src="11.3.jpg" alt="Image 3" />
                              <img src="11.4.jpg" alt="Image 4" />
                              {/* ... Ajoutez d'autres images de la slide */}
                            </div>
                          </div>
                        </div>
                        );
                      } else if (slide.id === 12) {
                        modalContent = (
                          <div className="modal-content-pf" ref={modalContentRef}>
                            <div className="modal-header mb-4">
                              <h1 className="text-3xl mb-3">Green Scan</h1>
                                <div className="tags-container mb-9">
                                <p className="tag" style={{fontFamily: 'arial, sans-serif'}}>Design mobile</p> 
                                  </div>
                                  <p className='text-sm' style={{fontFamily: 'arial, sans-serif'}}>
                                  "GreenScan" représente une application engagée dans la sensibilisation aux pratiques écologiques, pour laquelle nous avons contribué en réalisant le design. Cette application a pour objectif de promouvoir des habitudes de vie plus durables et respectueuses de l'environnement.

                                    Notre implication dans GreenScan s'est concentrée sur la conception du design de cette application. Nous avons cherché à créer une interface visuellement attrayante, intuitive et conviviale, facilitant ainsi l'engagement des utilisateurs dans leur transition vers des choix de vie plus écologiques.

                                    Le design de GreenScan a été pensé pour offrir une expérience utilisateur fluide, mettant en avant les informations essentielles de manière claire et accessible. L'objectif était de motiver et d'inspirer les utilisateurs à adopter des comportements plus respectueux de la planète.

                                    Contribuer à GreenScan a été une expérience gratifiante, où notre expertise en design a été mise au service d'une initiative ayant un impact positif sur notre environnement. 
                                    </p>
                            </div>
                            <div className="modal-body z-10">
                              <div className="horizontal-scroll-container">
                                <img src="12.1.jpg" alt="Image 1" />
                                <img src="12.2.jpg" alt="Image 2" />
                                <img src="12.3.jpg" alt="Image 3" />
                                <img src="12.4.jpg" alt="Image 4" />
                                {/* ... Ajoutez d'autres images de la slide */}
                              </div>
                            </div>
                          </div>
                          );
                        }

  return (
    <>
      {modalContent && (
        <div
        className="modal-overlay fixed top-0 left-0 w-full h-full flex justify-center items-start p-6 backdrop-filter backdrop-blur-lg overflow-y-auto"
        onClick={closeModal}
        >
          <div className="modal-wrapper flex flex-col items-center" style={{ marginTop: '60vh' }}>
            <div
              ref={modalContentRef}
              id={`modal-slide-${slide.id}`}
              className="modal bg-gray-800 text-white rounded-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {modalContent}
              <button className="modal-close text-white px-4 py-2 rounded" onClick={closeModal} style={{color: 'white'}}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Portfolio = () => {
  const [selectedSlide, setSelectedSlide] = useState<Slide | null>(null); // Utilisation de l'interface Slide
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (slide: Slide) => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Empêche le défilement de la page
  };

  const closeModal = () => {
    setSelectedSlide(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Réactive le défilement de la page
  };

    const handleClickOutside = useCallback(
      (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          closeModal();
        }
      },
      [closeModal]
    );

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setIsModalOpen(false);
        }
      };
  
      if (isModalOpen) {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isModalOpen, handleClickOutside]);

  const slides =[] = [
    {
      id: 1,
      image: '1.png',
      modalContent: 'Contenu pour la modal 1',
    },
    {
      id: 2,
      image: '2.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 3,
      image: '3.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 4,
      image: '4.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 5,
      image: '5.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 6,
      image: '6.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 7,
      image: '7.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 8,
      image: '8.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 9,
      image: '9.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 10,
      image: '10.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 11,
      image: '11.png',
      modalContent: 'Contenu pour la modal 2',
    },
    {
      id: 12,
      image: '12.png',
      modalContent: 'Contenu pour la modal 2',
    },
    // Ajouter d'autres slides ici...
  ];
  

  const renderSlides = () => {
    return slides.map((slide) => (
      <div key={slide.id}>
        <img
          src={slide.image}
          alt={`Slide ${slide.id}`}
          onClick={() => openModal(slide)}
          style={{ cursor: 'pointer' }}
        />
        
          </div>
    ));
  };

  return (
    <div id="portfolio" className="services-container relative">
        <h2 className="services-title mt-5 text-4xl">Portfolio</h2>
      {/* Slider */}
      <div className="z-20">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <Flickity
            className={'carousel'}
            elementType={'div'}
            options={flickityOptions}
          >
            {renderSlides()}
          </Flickity>
        </div>
        {isModalOpen && selectedSlide && (
        <div className="modal-background fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-lg">
          <ModalSlide slide={selectedSlide} closeModal={closeModal} />
        </div>
      )}
      </div>
    </div>
  );
};



export default Portfolio;
