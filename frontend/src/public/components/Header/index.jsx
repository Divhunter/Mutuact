import { Link } from 'react-scroll'
import { Link as GoTo} from 'react-router-dom'
import { useState } from 'react'
import { faBars, faXmark, faHandHoldingDollar, faHandHoldingHand, faHandHoldingMedical, faUserTie, faHandHoldingHeart, faCar, faPhoneFlip, faArrowCircleRight, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoMutuactW from '../../assets/pictures/logo-mutuact-blanc-solo.png'

// styles
import './m-header.css'
import './d-header.css'

const Header = () => {

	const [isOpen, setIsOpen] = useState(false)
	const isOpenState = () => {
        setIsOpen(!isOpen)
    }

	const [isActu, setIsActu] = useState(false)
	const isActuState = () => {
        setIsActu(!isActu)
    }

	return (
		<>
			<nav id='navbar' className={	
				isOpen ? 
				'navbar navbar-open':
				'navbar navbar-closed' 
			}>

				<GoTo to='/'>
					<img 
						className={
							isOpen ?
							'navbar__logoMutuactW logo-visible':
							'navbar__logoMutuactW logo-hidden'
						} 
						src={logoMutuactW} 
						width='577px'
						height='564px'
						loading='lazy' 
						alt='logo Mutuact' 
					/>
				</GoTo>
				
				<div
					className='nav__menu__link-header actu'
					onClick={isActuState}
				>
					Actualités
				</div>

				<Link to='agences'>
					<div className='nav__menu__link-header b-contact'>
						<FontAwesomeIcon 
							icon={faPhoneFlip} 
						/>&nbsp;&nbsp;
						<FontAwesomeIcon 
							icon={faLocationDot} 
						/>
					</div>
				</Link>	
				
				<Link to='contact'>
					<div className='nav__menu__link-header devis'>
						Devis 48h&nbsp;&nbsp;
						<FontAwesomeIcon 
							icon={faArrowCircleRight} 
						/>
					</div>
				</Link>

				<FontAwesomeIcon 
					onClick={isOpenState} 
					className={
						isOpen ?
						'navbar__button-bars closed':
						'navbar__button-bars open'} 
					icon={faBars} 
				/>
				<FontAwesomeIcon 
					onClick={isOpenState}
					className={
						isOpen ?
						'navbar__button-x open':
						'navbar__button-x closed'} 
					icon={faXmark} 
				/>

				<menu className={
						isOpen ?
						'navbar__menu navbar__menu-open':
						'navbar__menu navbar__menu-closed'
					}
				>
					<Link onClick={isOpenState} to='epargne'>
						<FontAwesomeIcon 
							className='nav__menu__link'
							icon={faHandHoldingDollar} 
						/>
						<p className='nav__menu__text'>Épargne</p>
					</Link>
					<Link onClick={isOpenState} to='prevoyance'>
						<FontAwesomeIcon 
							className='nav__menu__link'
							icon={faHandHoldingHand} 
						/>
						<p className='nav__menu__text'>Prévoyance</p>
					</Link>
					<Link onClick={isOpenState} to='sante'>
						<FontAwesomeIcon 
							className='nav__menu__link'
							icon={faHandHoldingMedical} 
						/>
						<p className='nav__menu__text'>Santé</p>
					</Link>
					<Link onClick={isOpenState} to='pro'>
						<FontAwesomeIcon 
							className='nav__menu__link'
							icon={faUserTie} 
						/>
						<p className='nav__menu__text'>Pro.</p>
					</Link>
					<Link onClick={isOpenState} to='pret'>
						<FontAwesomeIcon 
							className='nav__menu__link'
							icon={faHandHoldingHeart} 
						/>
						<p className='nav__menu__text'>Prêt</p>
					</Link>
					<Link onClick={isOpenState} to='auto'>
						<FontAwesomeIcon 
							className='nav__menu__link'
							icon={faCar} 
						/>
						<p className='nav__menu__text'>Auto...</p>
					</Link>
				</menu> 
			</nav>

			<div 
				id='actu'
				className={
				isActu ?
				'actu-visible':'actu-hidden'
				}
			>
				<div className='actu-container'>
					<div 
						onClick={isActuState}
						className='actu-container__closed' 
					>
						<FontAwesomeIcon icon={faXmark} />
					</div>
					<header>
						<h1>Actualités 2023</h1>
					</header>
					<h2>Bonjour à tous,</h2>
					<p>
					1- Mutuact recrute!
					<br/>
					Pour postuler, veuillez nous contacter directement, c'est par&nbsp;
					<strong>
						<a 
							href='mailto:mutuact@mutuact.fr'
							className='ici'
						>
							ici
						</a>
					</strong>.
					</p>
					<p>
					2- Nous sommes ravis de vous présenter notre nouveau site web réalisé par la société&nbsp; 
					<strong>
						<a 
							href='https://www.vowd.fr'
							className='vowd'>
								vowd.fr
						</a>
					</strong>.
					</p>
					<br/>
				</div>
			</div>
		</>
	)
}
 
export default Header