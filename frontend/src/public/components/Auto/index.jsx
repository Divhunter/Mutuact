import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../PagesHeaders'
import { faCar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-auto.css'
import './d-auto.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Auto = () => {

    const autoHeader = pagesHeadersArray.find(el => el.title === "7")
    const autoHeaderArray = []
    autoHeaderArray.push(autoHeader)

	return (
		<section 
            id='auto' 
            className='auto'
        >
            {autoHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={
                        <div>
                            {item.titleCol1}
                            <br/>
                            <FontAwesomeIcon 
                                className='header-logo'
                                icon={faCar} 
                            />
                        </div>
                    }
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={
                        <>
                            <section className='why'>
                                <div className='pagination'>6</div>
                                <header>
                                    Pourquoi choisir mutuact
                                </header>
                                <p>
                                    Cette assurance n'est pas seulement une formalité, c'est une barrière de protection cruciale. Elle garantit la continuité du remboursement de votre emprunt en cas de situations difficiles telles que le décès, l'invalidité, ou la perte d'emploi. Au-delà de la tranquillité d'esprit qu'elle offre à vous et à votre entourage, elle constitue également une sécurité pour l'organisme de crédit.
                                    <br/><br/>
                                    Imaginez, en cas de circonstances imprévues, l'assurance prend le relais, soulageant ainsi le fardeau financier qui pourrait peser sur votre famille. C'est un investissement dans la stabilité de votre avenir financier.
                                    <br/><br/>
                                    En tant qu'assureur dévoué, nous comprenons l'importance de choisir une assurance emprunteur qui répond à vos besoins spécifiques. Contactez-nous aujourd'hui pour discuter de la meilleure façon de protéger votre investissement et de garantir un avenir financier serein.
                                </p>
                            </section>
                        </>
                    }
                />
            ))}
		</section>
	)
}

export default Auto