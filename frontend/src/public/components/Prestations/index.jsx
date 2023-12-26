import { useEffect } from 'react'
import { Link } from 'react-scroll'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import architecte from '../../assets/pictures/architecte.jpg'
import electricien from '../../assets/pictures/electricien.jpg'
import macon from '../../assets/pictures/macon.jpg'
import menuisier2 from '../../assets/pictures/menuisier2.jpg'
import plombier from '../../assets/pictures/plombier.jpg'
import sol from '../../assets/pictures/sol.jpg'
import mur from '../../assets/pictures/mur.jpg'
import peintre from '../../assets/pictures/peintre.jpg'
import grosOeuvre from '../../assets/pictures/gros-oeuvre.jpg'

// styles
import './m-prestations.css'
import './d-prestations.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Prestations = () => {

    const slideImg = [
        {	
			"img": `${architecte}`
		},
        {
			"img": `${grosOeuvre}`
		},
        {	
			"img": `${macon}`
		},
        {	
			"img": `${menuisier2}`
		},
		{	
			"img": `${electricien}`
		},
		{
			"img": `${plombier}`
		},
        {
			"img": `${mur}`
		},
		{
			"img": `${sol}`
		},
        {
			"img": `${peintre}`
		}
	]

    const slideInLeft = (elem, duration, repeat) => {
        gsap.fromTo(
            elem,
            {
                transform: "translateX(0px)"
            },
            {
                transform: "translateX(-1692px)",
                duration: duration || 40,
                repeat: repeat || Infinity,
                ease: "none",
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        slideInLeft('#containerImg1')
    }, [])

    useEffect(() => {
        slideInLeft('#containerImg2')
    }, [])
    
    const PrestationsHeader = pagesHeadersArray.find(el => el.title === "2")
    const PrestationsHeaderArray = []
    PrestationsHeaderArray.push(PrestationsHeader)

	return (
		<section 
            id='prestations' 
            className='prestations'
        >
            {PrestationsHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={item.titleCol1}
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={
                        <>
                            <section className='why'>
                                <header>Pourquoi nous choisir ?</header>
                                <p>
                                    Réactivité dès la prise de contact, nous réalisons vos devis sous 48h :
                                    <br/> 
                                    <strong>
                                    Nous vous assurons la diligence de nos conseils dès la première étape du processus de réalisation
                                    </strong>
                                </p>
                                <p>
                                    Un travail soigné, respectueux de l'environnement, certifié RGE qualibat :
                                    <br/> 
                                    <strong>
                                    Nous disposons d'une main d'œuvre artisanale exemplaire et hautement qualifiée
                                    </strong>
                                </p>
                                <p>
                                    Une coordination sans faille et un respect absolu des délais :
                                    <br/> 
                                    <strong>
                                    Notre engagement pour mener à bien vos projets avec efficacité et excellence
                                    </strong>
                                </p>
                                <p>
                                    Nous vous suivons durant toutes les étapes d'évolution du chantier :
                                    <br/> 
                                    <strong>
                                    Notre maître d'ouvrage veille au bon déroulement des opérations sur le terrain
                                    </strong>
                                </p>
                                <p>
                                    Entre autres l'assurance décennale attestant de notre professionnalisme,
                                    <br/> 
                                    <strong>
                                    nous vous garantissons le bon respect de toutes les obligations légales en vigeur
                                    </strong>
                                </p>
                                <p>
                                    Une excellente maîtrise du secteur du Bâtiment et des Travaux Publics :
                                    <br/> 
                                    <strong>
                                    plus de 20 ans de savoir-faire et de passion mis à votre entière disposition
                                    </strong>
                                </p>
                            </section>
                            <>
                                <div className='containerImg-content'>
                                    <p className='prestations-working'>TRAVAILLONS DÈS MAINTENANT</p>
                                    <Link to='contact'>
                                        <p className='prestations-contact'>Contactez-nous</p>
                                    </Link>
                                </div>
                                <div className='containerImg'>
                                    {slideImg.map((items, index) => (
                                        <div key={index}>
                                            <img 
                                                id='containerImg1'
                                                className='containerImg__img'
                                                src={items.img} 
                                                alt='photos des  corps de métier' 
                                            />
                                        </div>
                                    ))}
                                    {slideImg.map((items, index) => (
                                        <div key={index}>
                                            <img
                                                id='containerImg2'
                                                className='containerImg__img2'
                                                src={items.img} 
                                                alt='photos des corps de métier' 
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        </>
                    }
                />
            ))}
		</section>
	)
}

export default Prestations