import { Link } from 'react-scroll'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import coupleSenior from '../../assets/pictures/coupleSenior.jpg'
import logoMutuactP from '../../assets/pictures/logo-mutuact-blanc-solo.png'

// styles
import './m-about.css'
import './d-about.css'

const About = () => { 
    
    const aboutHeader = pagesHeadersArray.find(el => el.title === "1") 
    const aboutHeaderArray = []
    aboutHeaderArray.push(aboutHeader)

	return (
		<section 
                id='about' 
                className='about'
        >
            {aboutHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={
                        <div>
                            {item.titleCol1 }
                            <br/>
                            <br/>
                            <img
                                className='about__logo' 
                                src={logoMutuactP} 
                                alt='logo mutuact planet' 
                            />
                        </div>
                    }
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    button={
                        <Link to='contact'>
                            <p className='button'>Suivez votre conseil</p>
                        </Link>
                    }
                    text1={
                        <div id='containerAbout' className='containerAbout'>
                            <p className='containerAbout__text' >
                                <span className='containerAbout__text__header'>
                                    Assurement votre
                                </span>
                                <br/><br/>
                                Fort de plus de deux décennies d'expérience en tant qu'assureur établi dans la pittoresque région du Sud-Ouest, je me consacre à offrir à mes nombreux clients une tranquillité d'esprit inégalée. Ma mission est claire : garantir le meilleur comparatif d'assurances et de mutuelles, sur mesure pour répondre à leurs besoins spécifiques.
                                <br/><br/>
                                Au fil des années, j'ai établi des relations solides avec une clientèle diversifiée, et la satisfaction de mes clients demeure ma priorité absolue. Je comprends l'importance de fournir des solutions d'assurance fiables et adaptées, tout en simplifiant le processus pour mes clients.
                                <br/><br/>
                                Ma devise est bien plus qu'une simple phrase : c'est un engagement envers l'excellence et l'intégrité. Je m'efforce constamment de rester à l'avant-garde des évolutions du secteur de l'assurance, afin de garantir à mes clients les options les plus avantageuses et les plus actuelles.
                                <br/><br/>
                                Que vous soyez un particulier à la recherche d'une couverture complète pour votre famille ou une entreprise cherchant à sécuriser son avenir, je suis là pour vous guider à travers les méandres parfois complexes de l'assurance. Avec moi, vous bénéficiez non seulement d'une expertise approfondie, mais également d'un service personnalisé qui fait toute la différence.
                                <br/><br/>
                                Parce que chaque client est unique, je m'engage à personnaliser chaque comparatif d'assurances et de mutuelles pour répondre précisément à vos besoins et à ceux de votre famille ou de votre entreprise. Faites confiance à un professionnel de l'assurance dévoué qui s'efforce constamment de surpasser les attentes.
                                <br/><br/>
                                Votre tranquillité d'esprit commence ici.
                            </p>
                            <div className='containerAbout__bloc'>
                                <img 
                                    className='containerAbout__bloc__coupleSenior' 
                                    src={coupleSenior}
                                    alt='serrage de main'
                                />
                                <div className='containerAbout__bloc__square'>-</div>
                                <p className='containerAbout__bloc__pub'>
                                    L'objectif
                                    <br/>
                                    est de vous offrir la tranquillité d'esprit
                                </p>
                            </div>
                        </div>
                    } 
                />
            ))}
		</section>
	)
}

export default About