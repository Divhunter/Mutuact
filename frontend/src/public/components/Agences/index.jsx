import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import office from '../../assets/pictures/office.jpg'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-agences.css'
import './d-agences.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Agences = () => {

    const redirection1 = 'https://www.pagesjaunes.fr/carte?code_etablissement=62462030&code_localite=03155400&code_rubrique=30456100'

    const redirection2 = "https://www.pagesjaunes.fr/carte?code_etablissement=61646825&code_localite=01123400&code_rubrique=30207900"
    
    const agencesHeader = pagesHeadersArray.find(el => el.title === "4")
    const agencesHeaderArray = []
    agencesHeaderArray.push(agencesHeader)

    const officeInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                x: 200,
            },
            {
                opacity: 1,
                x: 0,
                delay: delay || .5,
                duration: duration || 1.5,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        officeInTop('#containerOffice__bloc__office')
    }, [])

    const AgencesSlideText = [
        {
            "name": "SIEGE SOCIAL",
            "director": "Stéphane Benhamou",
            "tel":"06 29 88 73 84",
            "mail":"stephane@2brealisation.com",
            "adress": "3, impasse Palayre - 31100 Toulouse",
            "redirection": `${redirection1}`
        },
        {
            "name": "PLATEFORME",
            "director": "Romain Bourrel",
            "tel":"06 68 07 19 49",
            "mail":"romain@2brealisation.com",
            "adress": "1, place de l'Abreuvoir - 11400 Mireval Lauragais",
            "redirection": `${redirection2}`
        }
    ]

    const agencesTextLength = AgencesSlideText.length 

	let [agencesCurrentText, setAgencesCurrentText] = useState(0) 

	const nextAgencesText = () => {
		setAgencesCurrentText(agencesCurrentText === agencesTextLength - 1 ? 0 : agencesCurrentText + 1);
	}

	const prevAgencesText = () => {
		setAgencesCurrentText(agencesCurrentText === 0 ? agencesTextLength - 1 : agencesCurrentText - 1);
	}

    const dot1Agences = () => {
        setAgencesCurrentText(agencesCurrentText = 0)
    }

    const dot2Agences = () => {
        setAgencesCurrentText(agencesCurrentText = 1)
    }

	return (
		<section id='agences' className='agences'>
            {agencesHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={item.titleCol1}
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={
                        <div 
                            id='containerOfficeBloc' 
                            className='containerOffice__bloc'
                        >
                            <div id='containerOffice__bloc__office'>
                                <img 
                                    className='containerOffice__bloc__office__pic' 
                                    src={office}
                                    alt='bureau'
                                />
                                <div className='containerOffice__bloc__office__text'>
                                    {agencesTextLength > 1 ? (
                                        <>
                                            <FontAwesomeIcon
                                                className='containerOffice__bloc__office__text__arrow containerOffice__bloc__office__text__arrow__left' 
                                                icon={faChevronLeft}
                                                onClick={prevAgencesText} 
                                            />
                                            <FontAwesomeIcon
                                                className='containerOffice__bloc__office__text__arrow containerOffice__bloc__office__text__arrow__right' 
                                                icon={faChevronRight}
                                                onClick={nextAgencesText} 
                                            />
                                        </>
                                    ) : null}
                                    {AgencesSlideText.map((items, index) => (
                                    <div key={index}>
                                        <div 
                                            className={
                                            index === agencesCurrentText ? 'containerOffice__bloc__office__text__content text-visible' : 'containerOffice__bloc__office__text__content text-hidden'}
                                            >
                                            <p><strong>{items.name}</strong></p>
                                            <p>{items.director}</p>
                                            <p>{items.tel}</p>
                                            <p>
                                                <a href={`mailto:${items.mail}`}>{items.mail}</a>
                                            </p>
                                            <p  
                                                className='agences-adress'
                                            >
                                                <a href={items.redirection}>{items.adress}</a>
                                            </p>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                                <div className='containerOffice__bloc__office__text__container__dote'>
                                    <div 
                                        id='agences-dot1' 
                                        className={
                                        agencesCurrentText === 0 ? 'agences-dot dot-active' : 'agences-dot dot-inactive'}
                                        onClick={dot1Agences} >
                                    </div>
                                    <div 
                                        id='agences-dot2' 
                                        className={
                                        agencesCurrentText === 1 ? 'agences-dot dot-active' : 'agences-dot dot-inactive'}
                                        onClick={dot2Agences} >
                                    </div>
                                </div>
                            </div>
                        </div>
                    } 
                />
            ))}
		</section>
	)
}

export default Agences