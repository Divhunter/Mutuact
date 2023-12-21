import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../PagesHeaders'
import { faHandHoldingHand } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-prevoyance.css'
import './d-prevoyance.css'

const Prevoyance = () => {
    
    const prevoyanceHeader = pagesHeadersArray.find(el => el.title === "3")
    const prevoyanceHeaderArray = []
    prevoyanceHeaderArray.push(prevoyanceHeader)

	return (
		<section id='prevoyance' className='prevoyance'>
            {prevoyanceHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={
                        <div>
                            {item.titleCol1}
                            <br/>
                            <br/>
                            <FontAwesomeIcon 
                                className='prevoyance-logo'
                                icon={faHandHoldingHand} 
                            />
                        </div>
                    }
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={
                        <>
                            <>
                            <section className='why'>
                                <header>Pourquoi choisir mutuact</header>
                                <p>
                                    Notre contrat de prévoyance représente bien plus qu'une simple assurance. Il s'agit d'un bouclier financier robuste conçu pour vous aider à surmonter les épreuves inattendues de la vie. Que ce soit face à une hospitalisation, un accident, un décès ou une perte de revenus, cette solution a été pensée pour être votre alliée dans les moments difficiles.
                                    <br/><br/>
                                    Nous comprenons que chaque client a des besoins uniques. C'est pourquoi notre contrat de prévoyance offre une flexibilité inégalée, s'adaptant aussi bien aux particuliers qu'aux professionnels. Nous sommes là pour vous accompagner dans la création d'une toile de sécurité personnalisée, alignée sur vos aspirations et vos responsabilités.
                                    <br/><br/>
                                    Faire le choix de la prévoyance, c'est investir dans la tranquillité d'esprit. Ne laissez pas l'incertitude compromettre votre sérénité financière. Renforcez votre protection dès aujourd'hui avec notre contrat de prévoyance complet et personnalisé.
                                    <br/><br/>
                                    Protégez ce qui compte le plus pour vous. Contactez-nous maintenant pour découvrir comment notre solution de prévoyance peut transformer votre vision de l'avenir.
                                </p>
                            </section>
                        </>
                            
                        </>
                    } 
                />
            ))}
		</section>
	)
}

export default Prevoyance