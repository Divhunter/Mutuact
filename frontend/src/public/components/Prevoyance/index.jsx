import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../PagesHeaders'
import logoPrevoyance from '../../assets/pictures/logo-prevoyance.png'

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
                        <div id='prevoyance-header-text'>
                            {item.titleCol1}
                            <br/>
                            <img
                                src={logoPrevoyance}
                                className='header-logo'
                                width='615px'
                                height='747px'
                                loading='lazy'
                                alt='logo-prevoyance'
                            />
                        </div>
                    }
                    subTitle1={
                        <div id='titlePrevoyance'>
                            {item.subTitle1}
                        </div>
                    }
                    subTitle2={item.subTitle2}
                    text1={
                        <>
                            <section className='why'>
                                <div className='pagination'>2</div>
                                <header>
                                    Pourquoi choisir mutuact
                                </header>
                                <p>
                                    Le contrat de prévoyance représente bien plus qu'une simple assurance. Il s'agit d'un bouclier financier robuste conçu pour vous aider à surmonter les épreuves inattendues de la vie. Que ce soit face à une hospitalisation, un accident, un décès ou une perte de revenus, cette solution a été pensée pour être votre alliée dans les moments difficiles.
                                    <br/><br/>
                                    Comprenant que chaque client a des besoins uniques. C'est pourquoi notre contrat de prévoyance offre une flexibilité inégalée, s'adaptant aussi bien aux particuliers qu'aux professionnels. Nous vous accompagnons dans la création d'une toile de sécurité personnalisée, alignée sur vos aspirations et vos responsabilités.
                                    <br/><br/>
                                    Faire le choix de notre prévoyance, c'est investir dans la tranquillité d'esprit. Ne laissez pas l'incertitude compromettre votre sérénité financière. Renforcez votre protection dès aujourd'hui avec notre contrat de prévoyance complet et personnalisé.
                                    <br/><br/>
                                    Protégez ce qui compte le plus pour vous. Prenez rendez-vous dès maintenant pour découvrir comment nos solutions de prévoyance peut transformer votre vision de l'avenir.
                                </p>
                            </section>
                        </>
                    } 
                />
            ))}
		</section>
	)
}

export default Prevoyance