import background1 from '../../assets/pictures/background1.jpg'

// styles
import './m-background.css'
import './d-background.css'

const Background = () => {

	return (
		<>
			<div className='background'>
				<img className='house' src={background1} alt='maison contemporaine' />
			</div>
		</>
	)
}
 
export default Background