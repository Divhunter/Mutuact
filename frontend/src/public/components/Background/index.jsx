import { Link as Video } from 'react-router-dom'
import { Link } from 'react-scroll'
import { faArrowCircleRight, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import background1 from '../../assets/pictures/background1.jpg'

// styles
import './m-background.css'
import './d-background.css'

const Background = () => {

	return (
		<>
			<div className='background'>
				<Video  className='link__button background__button' to='https://www.youtube.com/watch?v=7lTbwvRQAxE'>
					<FontAwesomeIcon 
						className='link__button__btn' 
						icon={faCirclePlay} 
					/>
					<p className='link__button__text'>
						Réforme 2021
						<br/>
						le 100% santé
					</p>
				</Video> 
				<img 
					className='famille' 
					src={background1} 
					width='1500px'
					height='1000px'
					fetchpriority='high' 
					alt='famille' />
				<Link to='about'>
					<div className='background__plus'>
						<FontAwesomeIcon 
							icon={faArrowCircleRight} 
						/>
					</div>
				</Link>
			</div>
		</>
	)
}
 
export default Background