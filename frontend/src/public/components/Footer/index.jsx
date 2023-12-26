import { Link } from 'react-router-dom'
import {fab, faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import icon2w from '../../assets/brands/drapeau-2br-w.png'
import decennal from '../../assets/pictures/label-decennal.png'
import qualibat from '../../assets/pictures/label-qualibat.png'

// styles
import './m-footer.css'
import './d-footer.css'

const Footer = () => {
  return (
    <section className='footer'>
      <h1>Suivez-nous</h1>
      <div className='footer__link'>
        <Link to='https://www.facebook.com/profile.php?id=100093983119718'>
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
      <Link to='https://www.2brealisation.com/2br'>
        <img 
            className='footer__logo-2br' 
            src={icon2w} alt='2br-icon' 
        />
      </Link>
      <div className='footer__logo-labels'>
        <img 
            className='footer__logo-labels__decennal labels' 
            src={decennal} alt='logo décennal' 
        />
        <img 
            className='footer__logo-labels__qualibat labels' 
            src={qualibat} alt='logo qualibat' 
        />
      </div>
      <p className='footer__logo-info'>
        2B REALISATION
        <br/>
        RCS B 953 636 545 Toulouse
        <br/>
        Tél : 06 29 88 73 84
        <br/>
        https://www.2brealisation.com 
        <br/>
        <span>
          <a 
            href='mailto:stephane@2brealisation.com' 
            className='mail-link'
          >
              stephane@2brealisation.com
          </a>
        </span>
        <br/>
        3, impasse Palayre - 31100 Toulouse
      </p>
      <div className='footer__copyright'>
          <p>
              © 2B REALISATION - Tous droits réservés - <Link className='footer__copyright__link' to='https://www.2brealisation.com/cgu'>Mentions légales</Link> - 2023 - conception web VOWD.fr
          </p>
      </div>	
    </section>
  )
}

export default Footer