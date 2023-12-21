import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../PagesHeaders'
import { faHandHoldingMedical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// styles
import './m-sante.css'
import './d-sante.css'

const Sante = () => {

    const santeHeader = pagesHeadersArray.find(el => el.title === "4")
    const santeHeaderArray = []
    santeHeaderArray.push(santeHeader)

	return (
		<section id='sante' className='sante'>
            {santeHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={
                        <div>
                            {item.titleCol1}
                            <br/>
                            <FontAwesomeIcon 
                                className='header-logo'
                                icon={faHandHoldingMedical} 
                            />
                        </div>
                    }
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={
                        <>
                            <section className='why'>
                                <div className='pagination'>3</div>
                                <header>
                                    Pourquoi choisir mutuact
                                </header>
                                <p>
                                    Votre bien-être est notre priorité. Alors que l'Assurance maladie (Sécurité sociale) couvre partiellement vos dépenses de santé, il est essentiel de penser à votre tranquillité d'esprit. C'est pourquoi nous vous proposons une complémentaire santé (mutuelle) sur mesure : Une complémentaire santé au-delà de la simple couverture. 
                                    <br/><br/>
                                    Elle est conçue pour rembourser les frais qui restent à votre charge, en fonction du contrat que vous choisissez. Certains contrats offrent même la possibilité de rembourser des prestations non prises en charge par la Sécurité sociale, renforçant ainsi votre protection.
                                    <br/><br/>
                                    Que vous soyez un particulier ou un professionnel, nos solutions s'adaptent à votre budget tout en vous assurant une couverture optimale. Parce que votre santé mérite une attention particulière, nous mettons à votre disposition des options flexibles pour répondre à vos besoins spécifiques.
                                    <br/><br/>
                                    Prenez rendez-vous dès aujourd'hui pour découvrir comment la complémentaire santé peut être la clé d'une vie en toute sérénité.
                                </p>
                            </section>
                        </>                     
                    } 
                />
            ))}
		</section>
	)
}

export default Sante