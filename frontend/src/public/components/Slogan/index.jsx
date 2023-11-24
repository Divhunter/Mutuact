import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-slogan.css'
import './d-slogan.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Slogan = () => {

    const sectionInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                transform: "translateX(-150vw)",
            },
            {
                transform: "translateX(0)",
                delay: delay || .5,
                duration: duration || 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        sectionInTop('#slogan__filtre')
    }, [])

    const slideText = [
        {"text": "Nous vous accompagnons dans vos projets de travaux de rénovation"},
        {"text": "Garantie décennale solide et fiable pour tous vos projets de construction"},
        {"text": "Optez pour le respect de l'environnement : label RGE Qualibat"}
    ]

    const textLength = slideText.length // Définition de la longueur de l'objet Carrousel

	let [currentText, setCurrentText] = useState(0) // Définition du state

	// Définition de la fonction pour aller à l'image suivante du carrousel (+1 à currentPic)
	const nextText = () => {
		setCurrentText(currentText === textLength - 1 ? 0 : currentText + 1);
	}

	// Définition de la fonction pour aller à l'image précédente du carrousel (-1 à currentPic)
	const prevText = () => {
		setCurrentText(currentText === 0 ? textLength - 1 : currentText - 1);
	}

    const dot1 = () => {
        setCurrentText(currentText = 0)
    }

    const dot2 = () => {
        setCurrentText(currentText = 1)
    }

    const dot3 = () => {
        setCurrentText(currentText = 2)
    }

    return (
        <div className='slogan'>
            <div 
                id='slogan__filtre' 
                className='slogan__filtre'
            >
                {textLength > 1 ? (
                    <>
                        <FontAwesomeIcon
                            className='slogan__filtre__arrow slogan__filtre__arrow__left' 
                            icon={faChevronLeft}
                            onClick={prevText} 
                        />
                        <FontAwesomeIcon
                            className='slogan__filtre__arrow slogan__filtre__arrow__right' 
                            icon={faChevronRight}
                            onClick={nextText} 
                        />
                    </>
                ) : null}
                {slideText.map((items, index) => (
                <div key={index}>
                    <p 
                        className={
                        index === currentText ? 'slogan__filtre__text text-visible' : 'slogan__filtre__text text-hidden'}
                        >
                        {items.text}
                    </p>
                    <div className='slogan__filtre__container__dote'>
                        <div 
                            id='dot1' 
                            className={
                            currentText === 0 ? 'dot dot-active' : 'dot dot-inactive'}
                            onClick={dot1} >
                        </div>
                        <div 
                            id='dot2' 
                            className={
                            currentText === 1 ? 'dot dot-active' : 'dot dot-inactive'}
                            onClick={dot2} > 
                        </div>
                        <div 
                            id='dot3' 
                            className={
                            currentText === 2 ? 'dot dot-active' : 'dot dot-inactive'}
                            onClick={dot3} >
                        </div>
                    </div>
                </div>
                ))}
                <Link to='containerAbout'>
                    <span className='slogan__filtre__more button1'>
                        En savoir plus
                    </span>
                </Link>
            </div>
        </div>
    ) 
}

export default Slogan