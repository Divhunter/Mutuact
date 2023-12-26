import { Link } from 'react-scroll'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import handshake from '../../assets/pictures/handshake.jpg'

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
                                width='577px'
                                height='564px'
                                loading='lazy'
                                alt='logo mutuact planet' 
                            />
                        </div>
                    }
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    button={
                        <Link to='agences'>
                            <p className='button'>Suivez nos conseils</p>
                        </Link>
                    }
                    text1={
                        <div id='containerAbout' className='containerAbout'>
                            <p className='containerAbout__text' >
                                <span className='containerAbout__text__header'>
                                    Notre expertise au service de vos projets
                                </span>
                                <br/><br/>
                                La création de 2B REALISATION, basée sur Toulouse est une nouvelle étape dans notre développement : l'extension de notre périmètre d'intervention et la création d'une nouvelle antenne pour mieux vous accompagner. Grâce à notre engagement constant envers l'excellence et notre volonté d'aller toujours plus loin, nous sommes désormais en mesure d'étendre notre présence géographique afin de répondre aux besoins croissants de nos clients.
                                <br/><br/>
                                Que vous ayez un projet de construction neuve, de rénovation, d'agrandissement ou de réhabilitation, notre équipe d'experts qualifiés est là pour vous accompagner à chaque étape du processus.  
                                <br/><br/>
                                Nous accordons une grande importance à la qualité de notre travail, en utilisant des matériaux de premier choix, en respectant les normes de sécurité les plus strictes et en adoptant les techniques les plus avancées.
                                <br/><br/>
                                Nous sommes également attentifs aux délais et au respect des budgets convenus, afin de garantir une expérience sans souci pour nos clients.
                            </p>
                            <div className='containerAbout__bloc'>
                                <img 
                                    className='containerAbout__bloc__handshake' 
                                    src={handshake}
                                    alt='serrage de main'
                                />
                                <div className='containerAbout__bloc__square'>-</div>
                                <p className='containerAbout__bloc__pub'>
                                    Notre objectif
                                    <br/>
                                    est de vous offrir des résultats exceptionnels
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