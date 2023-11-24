import { Link } from 'react-scroll'
import { Link as Home} from 'react-router-dom'
import { useState } from 'react'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo2br from '../../assets/pictures/logo-2br-2.png'

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

				<Home to='https://www.2brealisation.com'>
					<img 
						className='navbar__logo-2br' 
						src={logo2br} alt='2br-icon' 
					/>
				</Home>	
				
				<div
					className={
						isOpen ? 
						'nav__menu__link-header actu white' : 'nav__menu__link-header actu gold'}
					onClick={isActuState}
				>
					Nos actualités
				</div>
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
					
					<Link onClick={isOpenState} to='/'>
						<div
							className='nav__menu__link'>
							Accueil
						</div>
					</Link>
					<Link onClick={isOpenState} to='about'>
						<div
							className='nav__menu__link'>
							Qui nous sommes
						</div>
					</Link>
					<Link onClick={isOpenState} to='prestations'>
						<div 
							className='nav__menu__link'>
							Nos prestations
						</div>
					</Link>
					<Link onClick={isOpenState} to='realisations'>
						<div
							className='nav__menu__link'>
							Nos réalisations
						</div>
					</Link>
					<Link onClick={isOpenState} to='agences'>
						<div
							className='nav__menu__link'>
							Nos agences
						</div>
					</Link>
					<Link onClick={isOpenState} to='contact'>
						<div
							className='nav__menu__link'>
							Contact
						</div>
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
					1- Nous sommes ravis d'annoncer notre partenariat avec BCRA.
					<br/>
					Ensemble, nous unissons nos forces et notre expertise pour offrir des solutions exceptionnelles à nos clients communs.
					</p>
					<p>
					2- Nous sommes ravis de vous présenter notre nouveau site web réalisé par la société VOWD.fr.
					</p>
					<br/>
				</div>
			</div>
		</>
	)
}
 
export default Header