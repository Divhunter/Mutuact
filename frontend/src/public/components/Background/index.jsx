import { Link } from 'react-scroll'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import background1 from '../../assets/pictures/background1.jpg'

// styles
import './m-background.css'
import './d-background.css'

const Background = () => {

	return (
		<>
			<div className='background'>
				<img 
					className='famille' 
					src={background1} 
					width='1500px'
					height='1000px'
					fetchpriority='high' 
					alt='famille' />
				<Link to='about'>
					<div className='background__plus'>
						En savoir plus&nbsp;&nbsp;
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