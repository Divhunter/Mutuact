import { useParams, useNavigate, Navigate, Link as Home } from 'react-router-dom'
import { useState, useEffect } from 'react'
import logo2br from '../../assets/pictures/logo-2br-2.png'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../PagesHeaders'
import arrow from '../../assets/icons/arrow.png'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/Footer'

// Toiture-img
import toitureA1 from '../../assets/pictures/pics/toiture-img/toiture-a1.jpg'
import toitureA2 from '../../assets/pictures/pics/toiture-img/toiture-a2.jpg'
import toitureA3 from '../../assets/pictures/pics/toiture-img/toiture-a3.jpg'
import toitureB1 from '../../assets/pictures/pics/toiture-img/toiture-b1.JPG'
import toitureB2 from '../../assets/pictures/pics/toiture-img/toiture-b2.JPG'
import toitureB3 from '../../assets/pictures/pics/toiture-img/toiture-b3.JPG'
import toitureB4 from '../../assets/pictures/pics/toiture-img/toiture-b4.JPG'
import toitureB5 from '../../assets/pictures/pics/toiture-img/toiture-b5.JPG'
import toitureB6 from '../../assets/pictures/pics/toiture-img/toiture-b6.JPG'
import toitureB7 from '../../assets/pictures/pics/toiture-img/toiture-b7.JPG'
import toitureB8 from '../../assets/pictures/pics/toiture-img/toiture-b8.JPG'
import toitureB9 from '../../assets/pictures/pics/toiture-img/toiture-b9.JPG'
import toitureB10 from '../../assets/pictures/pics/toiture-img/toiture-b10.JPG'
import toitureB11 from '../../assets/pictures/pics/toiture-img/toiture-b11.JPG'
import toitureB12 from '../../assets/pictures/pics/toiture-img/toiture-b12.JPG'
import toitureB13 from '../../assets/pictures/pics/toiture-img/toiture-b13.JPG'
import toitureB14 from '../../assets/pictures/pics/toiture-img/toiture-b14.JPG'
import toitureC1 from '../../assets/pictures/pics/toiture-img/toiture-c1.JPG'
import toitureC2 from '../../assets/pictures/pics/toiture-img/toiture-c2.JPG'
import toitureC3 from '../../assets/pictures/pics/toiture-img/toiture-c3.JPG'
import toitureC4 from '../../assets/pictures/pics/toiture-img/toiture-c4.JPG'
import toitureC5 from '../../assets/pictures/pics/toiture-img/toiture-c5.JPG'
import toitureC6 from '../../assets/pictures/pics/toiture-img/toiture-c6.JPG'
import toitureC7 from '../../assets/pictures/pics/toiture-img/toiture-c7.JPG'
import toitureC8 from '../../assets/pictures/pics/toiture-img/toiture-c8.JPG'
import toitureC9 from '../../assets/pictures/pics/toiture-img/toiture-c9.JPG'
import toitureC10 from '../../assets/pictures/pics/toiture-img/toiture-c10.JPG'
import toitureD1 from '../../assets/pictures/pics/toiture-img/toiture-d1.jpg'
import toitureD2 from '../../assets/pictures/pics/toiture-img/toiture-d2.jpg'
import toitureD3 from '../../assets/pictures/pics/toiture-img/toiture-d3.JPG'
import toitureD4 from '../../assets/pictures/pics/toiture-img/toiture-d4.JPG'
import toitureD5 from '../../assets/pictures/pics/toiture-img/toiture-d5.JPG'
import toitureD6 from '../../assets/pictures/pics/toiture-img/toiture-d6.jpg'

// Terrasse-img
import terrasseA1 from '../../assets/pictures/pics/terrasse-img/terrasse-a1.jpg'
import terrasseA2 from '../../assets/pictures/pics/terrasse-img/terrasse-a2.jpg'
import terrasseA3 from '../../assets/pictures/pics/terrasse-img/terrasse-a3.jpg'

// Revetement-sol-img
import revetementSolA1 from '../../assets/pictures/pics/revetement-sol-img/revetement-sol-a1.jpg'
import revetementSolA2 from '../../assets/pictures/pics/revetement-sol-img/revetement-sol-a2.jpg'
import revetementSolA3 from '../../assets/pictures/pics/revetement-sol-img/revetement-sol-a3.jpg'

// Platrerie-img
import platrerieA1 from '../../assets/pictures/pics/platrerie-img/platrerie-a1.jpg'
import platrerieA2 from '../../assets/pictures/pics/platrerie-img/platrerie-a2.jpg'
import platrerieA3 from '../../assets/pictures/pics/platrerie-img/platrerie-a3.jpg'
import platrerieA4 from '../../assets/pictures/pics/platrerie-img/platrerie-a4.jpg'
import platrerieB1 from '../../assets/pictures/pics/platrerie-img/platrerie-b1.jpg'
import platrerieB2 from '../../assets/pictures/pics/platrerie-img/platrerie-b2.jpg'
import platrerieB3 from '../../assets/pictures/pics/platrerie-img/platrerie-b3.jpg'

// Piscine-img
import piscineA1 from '../../assets/pictures/pics/piscine-img/piscine-a1.jpg'
import piscineA2 from '../../assets/pictures/pics/piscine-img/piscine-a2.jpg'
import piscineA3 from '../../assets/pictures/pics/piscine-img/piscine-a3.jpg'
import piscineA4 from '../../assets/pictures/pics/piscine-img/piscine-a4.jpg'
import piscineB1 from '../../assets/pictures/pics/piscine-img/piscine-b1.jpg'
import piscineB2 from '../../assets/pictures/pics/piscine-img/piscine-b2.jpg'
import piscineB3 from '../../assets/pictures/pics/piscine-img/piscine-b3.jpg'
import piscineC1 from '../../assets/pictures/pics/piscine-img/piscine-c1.JPG'
import piscineC2 from '../../assets/pictures/pics/piscine-img/piscine-c2.JPG'
import piscineC3 from '../../assets/pictures/pics/piscine-img/piscine-c3.JPG'
import piscineC4 from '../../assets/pictures/pics/piscine-img/piscine-c4.JPG'
import piscineC5 from '../../assets/pictures/pics/piscine-img/piscine-c5.JPG'
import piscineC6 from '../../assets/pictures/pics/piscine-img/piscine-c6.JPG'
import piscineC7 from '../../assets/pictures/pics/piscine-img/piscine-c7.JPG'
import piscineD1 from '../../assets/pictures/pics/piscine-img/piscine-d1.jpg'
import piscineD2 from '../../assets/pictures/pics/piscine-img/piscine-d2.jpg'
import piscineD3 from '../../assets/pictures/pics/piscine-img/piscine-d3.jpg'
import piscineD4 from '../../assets/pictures/pics/piscine-img/piscine-d4.jpg'
import piscineD5 from '../../assets/pictures/pics/piscine-img/piscine-d5.jpg'
import piscineE1 from '../../assets/pictures/pics/piscine-img/piscine-e1.jpg'
import piscineE2 from '../../assets/pictures/pics/piscine-img/piscine-e2.jpg'
import piscineE3 from '../../assets/pictures/pics/piscine-img/piscine-e3.jpg'
import piscineE4 from '../../assets/pictures/pics/piscine-img/piscine-e4.jpg'
import piscineF1 from '../../assets/pictures/pics/piscine-img/piscine-f1.jpg'
import piscineF2 from '../../assets/pictures/pics/piscine-img/piscine-f2.jpg'
import piscineF3 from '../../assets/pictures/pics/piscine-img/piscine-f3.jpg'
import piscineF4 from '../../assets/pictures/pics/piscine-img/piscine-f4.jpg'
import piscineF5 from '../../assets/pictures/pics/piscine-img/piscine-f5.jpg'

// Peinture-facade-img
import peintureFacadeA1 from '../../assets/pictures/pics/peinture-facade-img/peinture-facade-a1.jpg'
import peintureFacadeA2 from '../../assets/pictures/pics/peinture-facade-img/peinture-facade-a2.jpg'
import peintureFacadeA3 from '../../assets/pictures/pics/peinture-facade-img/peinture-facade-a3.jpg'
import peintureFacadeA4 from '../../assets/pictures/pics/peinture-facade-img/peinture-facade-a4.jpg'

// Maisons-img
import maisonsA1 from '../../assets/pictures/pics/maisons-img/maisons-a1.jpg'
import maisonsA2 from '../../assets/pictures/pics/maisons-img/maisons-a2.jpg'
import maisonsA3 from '../../assets/pictures/pics/maisons-img/maisons-a3.jpg'
import maisonsA4 from '../../assets/pictures/pics/maisons-img/maisons-a4.jpg'
import maisonsB1 from '../../assets/pictures/pics/maisons-img/maisons-b1.jpg'
import maisonsB2 from '../../assets/pictures/pics/maisons-img/maisons-b2.jpg'
import maisonsB3 from '../../assets/pictures/pics/maisons-img/maisons-b3.jpg'
import maisonsB4 from '../../assets/pictures/pics/maisons-img/maisons-b4.jpg'
import maisonsC1 from '../../assets/pictures/pics/maisons-img/maisons-c1.jpg'
import maisonsC2 from '../../assets/pictures/pics/maisons-img/maisons-c2.jpg'
import maisonsC3 from '../../assets/pictures/pics/maisons-img/maisons-c3.jpg'
import maisonsC4 from '../../assets/pictures/pics/maisons-img/maisons-c4.jpg'
import maisonsD1 from '../../assets/pictures/pics/maisons-img/maisons-d1.jpg'

// Fondations-img
import fondationsA1 from '../../assets/pictures/pics/fondations-img/fondations-a1.jpg'
import fondationsA2 from '../../assets/pictures/pics/fondations-img/fondations-a2.jpg'
import fondationsA3 from '../../assets/pictures/pics/fondations-img/fondations-a3.jpg'
import fondationsA4 from '../../assets/pictures/pics/fondations-img/fondations-a4.jpg'
import fondationsA5 from '../../assets/pictures/pics/fondations-img/fondations-a5.jpg'
import fondationsA6 from '../../assets/pictures/pics/fondations-img/fondations-a6.jpg'
import fondationsA7 from '../../assets/pictures/pics/fondations-img/fondations-a7.jpg'
import fondationsA8 from '../../assets/pictures/pics/fondations-img/fondations-a8.jpg'
import fondationsA9 from '../../assets/pictures/pics/fondations-img/fondations-a9.jpg'
import fondationsB1 from '../../assets/pictures/pics/fondations-img/fondations-b1.jpg'
import fondationsB2 from '../../assets/pictures/pics/fondations-img/fondations-b2.jpg'
import fondationsB3 from '../../assets/pictures/pics/fondations-img/fondations-b3.jpg'
import fondationsB4 from '../../assets/pictures/pics/fondations-img/fondations-b4.jpg'
import fondationsB5 from '../../assets/pictures/pics/fondations-img/fondations-b5.jpg'
import fondationsC1 from '../../assets/pictures/pics/fondations-img/fondations-c1.jpg'
import fondationsC2 from '../../assets/pictures/pics/fondations-img/fondations-c2.jpg'
import fondationsC3 from '../../assets/pictures/pics/fondations-img/fondations-c3.jpg'
import fondationsC4 from '../../assets/pictures/pics/fondations-img/fondations-c4.jpg'

// styles
import './m-card.css'
import './d-card.css'

const Card = () => {

  localStorage.removeItem('token')
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const galerieListArray = [
    {
      "id": "00002",
      "title": "Maçonnerie",
      "cover": `${maisonsA1}`,
      "pictures": [
          `${fondationsA1}`,
          `${fondationsA2}`,
          `${fondationsA3}`,
          `${fondationsA4}`,
          `${fondationsA5}`,
          `${fondationsA6}`,
          `${fondationsA7}`,
          `${fondationsA8}`,
          `${fondationsA9}`,
          `${fondationsB1}`,
          `${fondationsB2}`,
          `${fondationsB3}`,
          `${fondationsB4}`,
          `${fondationsB5}`,
          `${fondationsC1}`,
          `${fondationsC2}`,
          `${fondationsC3}`,
          `${fondationsC4}`,
          `${maisonsA1}`,
          `${maisonsA2}`,
          `${maisonsA3}`,
          `${maisonsA4}`,
          `${maisonsB1}`,
          `${maisonsB2}`,
          `${maisonsB3}`,
          `${maisonsB4}`,
          `${maisonsC1}`,
          `${maisonsC2}`,
          `${maisonsC3}`,
          `${maisonsC4}`,
          `${maisonsD1}`
      ],
      "description": "Galerie : Maçonnerie"
  },

  {
      "id": "00003",
      "title": "Peinture façade",
      "cover": `${peintureFacadeA1}`,
      "pictures": [
        `${peintureFacadeA1}`,
        `${peintureFacadeA2}`,
        `${peintureFacadeA3}`,
        `${peintureFacadeA4}`
      ],
      "description": "Galerie : Peinture façade"
  },

  {
      "id": "00004",
      "title": "Piscine",
      "cover": `${piscineA1}`,
      "pictures": [
        `${piscineA1}`,
        `${piscineA2}`,
        `${piscineA3}`,
        `${piscineA4}`,
        `${piscineB1}`,
        `${piscineB2}`,
        `${piscineB3}`,
        `${piscineC1}`,
        `${piscineC2}`,
        `${piscineC3}`,
        `${piscineC4}`,
        `${piscineC5}`,
        `${piscineC6}`,
        `${piscineC7}`,
        `${piscineD1}`,
        `${piscineD2}`,
        `${piscineD3}`,
        `${piscineD4}`,
        `${piscineD5}`,
        `${piscineE1}`,
        `${piscineE2}`,
        `${piscineE3}`,
        `${piscineE4}`,
        `${piscineF1}`,
        `${piscineF2}`,
        `${piscineF3}`,
        `${piscineF4}`,
        `${piscineF5}`
      ],
      "description": "Galerie : Piscine"
  },

  {
      "id": "00005",
      "title": "Plâtrerie",
      "cover": `${platrerieA1}`,
      "pictures": [
        `${platrerieA1}`,
        `${platrerieA2}`,
        `${platrerieA3}`,
        `${platrerieA4}`,
        `${platrerieB1}`,
        `${platrerieB2}`,
        `${platrerieB3}`
      ],
      "description": "Galerie : Plâtrerie"
  },

  {
      "id": "00006",
      "title": "Revêtement sol",
      "cover": `${revetementSolA1}`,
      "pictures": [
        `${revetementSolA1}`,
        `${revetementSolA2}`,
        `${revetementSolA3}`
      ],
      "description": "Galerie : Revêtement sol"
  },

  {
      "id": "00007",
      "title": "Terrasse",
      "cover": `${terrasseA1}`,
      "pictures": [
        `${terrasseA1}`,
        `${terrasseA2}`,
        `${terrasseA3}`
      ],
      "description": "Galerie : Terrasse"
  },

  {
      "id": "00008",
      "title": "Toiture",
      "cover": `${toitureA1}`,
      "pictures": [
        `${toitureA1}`,
        `${toitureA2}`,
        `${toitureA3}`,
        `${toitureB1}`,
        `${toitureB2}`,
        `${toitureB3}`,
        `${toitureB4}`,
        `${toitureB5}`,
        `${toitureB6}`,
        `${toitureB7}`,
        `${toitureB8}`,
        `${toitureB9}`,
        `${toitureB10}`,
        `${toitureB11}`,
        `${toitureB12}`,
        `${toitureB13}`,
        `${toitureB14}`,
        `${toitureC1}`,
        `${toitureC2}`,
        `${toitureC3}`,
        `${toitureC4}`,
        `${toitureC5}`,
        `${toitureC6}`,
        `${toitureC7}`,
        `${toitureC8}`,
        `${toitureC9}`,
        `${toitureC10}`,
        `${toitureD1}`,
        `${toitureD2}`,
        `${toitureD3}`,
        `${toitureD4}`,
        `${toitureD5}`,
        `${toitureD6}`
      ],
      "description": "Galerie : Toiture"
    },
]

const GaleriesHeader = pagesHeadersArray.find(el => el.title === "7")
const GaleriesHeaderArray = []
GaleriesHeaderArray.push(GaleriesHeader)

const navigate = useNavigate()
const backToSite1 = () => navigate('/GalerieCard')
// Récupération de la fiche correspondante
const id = useParams()
const galerieCard = galerieListArray.find(galerie => galerie.id === id.id)

let picsLength = galerieCard.pictures.length // Définition de la longueur de l'objet Carrousel

const [currentPic, setCurrentPic] = useState(0) // Définition du state

// Définition de la fonction pour aller à l'image suivante du carrousel (+1 à currentPic)
const nextPic = () => {
  setCurrentPic(currentPic === picsLength - 1 ? 0 : currentPic + 1);
}

// Définition de la fonction pour aller à l'image précédente du carrousel (-1 à currentPic)
const prevPic = () => {
  setCurrentPic(currentPic === 0 ? picsLength - 1 : currentPic - 1);
}

  return galerieCard ? (
    <>
      <section id='galeries' className='galeries'>
        <FontAwesomeIcon
          onClick={backToSite1}
          className="arrow-left arrow-position"
          icon={faArrowLeft}
        />
        <Home to='https://www.2brealisation.com'>
          <img   
            className='navbar__logo-2br logo-margin-bottom' 
            src={logo2br} alt='2br-icon'   
          />
        </Home> 
        {GaleriesHeaderArray.map((item, index) => ( 
          <PagesHeaders 
            key={index}
            titleCol1={
              <p>{galerieCard.description}</p>
            }
            subTitle1={item.subTitle1}
            subTitle2={item.subTitle2}
            text1={
              <div className='carrousel'>
                {galerieCard.pictures.map((pic, index) => {
                  return (
                    <div
                      // On ajoute l'index à la div et les class active/inactive pour afficher/cacher 
                      key={index}
                      className={
                      index === currentPic ?
                        'carrousel carrousel__pictures__active':
                        'carrousel carrousel__pictures__inactive'
                      }
                    >
                      {/* Si l'index est égal à currentPic, alors on ajoute l'image au carrousel*/}
                      {index === currentPic && (
                          <img src={pic} 
                            alt='photos de chantiers en travaux' 
                            className='carrousel__pictures carrousel__pictures__current' 
                          />
                        )
                      }
                    </div>
                  )
                })}

                {/* affiche les boutons next/previous et du compteur si il y a plus d'un élément dans le carrousel */}
                {picsLength > 1 ? (
                  <>
                    <button className='carrousel__button carrousel__button__left' onClick={prevPic}>
                      <img src={arrow} alt='left' 
                        className='carrousel__button__arrow carrousel__button__arrow__left' 
                      />
                    </button>
                    <button className='carrousel__button carrousel__button__right' onClick={nextPic}>
                      <img src={arrow} alt='right' 
                        className='carrousel__button__arrow carrousel__button__arrow__right' 
                      />
                    </button>
                    <p className='carrousel__count'>
                      {currentPic + 1} / {picsLength} 
                    </p>
                  </>
                ) : null}
              </div>
            }
          />
        ))}
      </section>
      <Footer />
    </>
  ):(

    < Navigate replace to ="/Error" />

  )
}

export default Card