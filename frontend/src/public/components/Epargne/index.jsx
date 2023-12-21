import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin} from 'gsap/ScrollToPlugin'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../PagesHeaders'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-epargne.css'
import './d-epargne.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const Epargne = () => {

    const epargneHeader = pagesHeadersArray.find(el => el.title === "2")
    const epargneHeaderArray = []
    epargneHeaderArray.push(epargneHeader)

	return (
		<section 
            id='epargne' 
            className='epargne'
        >
            {epargneHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={
                        <div>
                            {item.titleCol1}
                            <br/>
                            <FontAwesomeIcon 
                                className='header-logo'
                                icon={faHandHoldingDollar} 
                            />
                        </div>
                    }
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={
                        <>
                            <section className='why'>
                                <div className='pagination'>1</div>
                                <header>
                                    Pourquoi choisir mutuact
                                </header>
                                <p>
                                    Vous avez à cœur de faire fructifier votre épargne et d'envisager des placements financiers judicieux ? Si vous souhaitez mettre en place un plan d'épargne régulier, vous êtes au bon endroit.
                                    <br/><br/>
                                    La fructification de votre argent nécessite non seulement des placements intelligents mais également une gestion de patrimoine efficace, accompagnée d'un suivi régulier pour maximiser les opportunités financières.
                                    <br/><br/>
                                    Que votre vision soit axée sur une stratégie à court, moyen ou plus long terme, je m'engage à explorer avec vous les différentes possibilités qui s'offrent à vous. En collaborant avec mutuact, vous bénéficierez de partenariats solides avec les meilleurs acteurs du marché financier.
                                    <br/><br/>
                                    Mon engagement envers vous se traduit par une garantie de sérieux, de pédagogie et de transparence tout au long de nos échanges. Comprenant que chaque client est unique, je personnalise les solutions d'épargne en fonction de vos objectifs financiers spécifiques.
                                    <br/><br/>
                                    Je vous accompagne dans la construction d'une stratégie d'épargne qui vous correspond. Ensemble, nous créerons un plan sur mesure, aligné sur vos aspirations et conçu pour optimiser vos investissements. Faites le choix de la croissance financière éclairée et prenez rendez-vous dès aujourd'hui pour démarrer ce passionnant voyage vers la prospérité financière.
                                </p>
                            </section>
                        </>
                    }
                />
            ))}
		</section>
	)
}

export default Epargne