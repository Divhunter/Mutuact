import { Link } from 'react-router-dom'
import {fab, faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import iconMutuact from '../../assets/pictures/logo-mutuact-blanc.png'

// styles
import './m-footer.css'
import './d-footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <h1>Suivez-nous</h1>
      <div className='footer__link'>
        <Link to=''>
          <FontAwesomeIcon className='footer__link__icon icon-fb' icon={(fab, faFacebook)} />
        </Link>
        <Link to='/'>
          <FontAwesomeIcon className='footer__link__icon icon-lk' icon={(fab, faLinkedin)} />
        </Link>
        <Link to='/'>
          <FontAwesomeIcon className='footer__link__icon icon-gh' icon={(fab, faInstagram)} />
        </Link>
        <Link to='/'>
          <FontAwesomeIcon className='footer__link__icon icon-yt' icon={(fab, faYoutube)} />
        </Link>
      </div>
      <Link to='https://www.mutuact.fr/mutuact'>
        <img 
            className='footer__logo-mutuact' 
            src={iconMutuact} alt='mutuact-icon' 
        />
      </Link>
      <p className='footer__logo-info'>
        MUTUACT
        <br/>
        SIRET 75344673100048
        <br/>
        Tél : 06 28 18 02 03
        <br/>
        https://www.mutuact.fr
        <br/>
        <span>
          <a 
            href='mailto:mutuact@mutuact.fr'
            className='mail-link'
          >
              mutuact@mutuact.fr
          </a>
        </span>
        <br/>
        41 Rue de la Découverte CS37621 - 31670 Labège - France
      </p>
      <div className='footer__copyright'>
          <p>
              © MUTUACT - Tous droits réservés - <Link className='footer__copyright__link' to='https://www.mutuact.fr/cgu'>Mentions légales</Link> - 2023 - conception web vowd.fr
          </p>
      </div>	
    </section>
  )
}

export default Footer