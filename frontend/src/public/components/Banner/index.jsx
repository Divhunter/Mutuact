import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import img01 from '../../assets/pictures/img0-1.jpg'
import img11 from '../../assets/pictures/img1-1.jpg'
import img21 from '../../assets/pictures/img2-1.jpg'
import img31 from '../../assets/pictures/img3-1.jpg'
import img41 from '../../assets/pictures/img4-1.jpg'
import img02 from '../../assets/pictures/img0-2.jpg'
import img12 from '../../assets/pictures/img1-2.jpg'
import img22 from '../../assets/pictures/img2-2.jpg'
import img32 from '../../assets/pictures/img3-2.jpg'
import img42 from '../../assets/pictures/img4-2.jpg'
import logoMutuacFull from '../../assets/pictures/logo-mutuact-full.png'

// styles
import './m-banner.css'
import './d-banner.css'

const Banner = () => {

	const [currentState, setCurrentState] = useState(0)

	useEffect(()=> {
		const timer = setTimeout(() => {
			if (currentState === 4) {
				setCurrentState(0)
			}
			else {
				setCurrentState(currentState +1)
			}
		}, 5000)
		return () => clearTimeout(timer)
	}, [currentState] )

	const slideArray1 = [
		{	
			"img": `${img01}`
		},
		{	
			"img": `${img11}`
		},
		{
			"img": `${img21}`
		},
		{
			"img": `${img31}`
		},
		{
			"img": `${img41}`,
		}
	]

	const slideArray2 = [
		{	
			"img": `${img02}`
		},
		{	
			"img": `${img12}`
		},
		{
			"img": `${img22}`
		},
		{
			"img": `${img32}`
		},
		{
			"img": `${img42}`,
		}
	]

	const onEnter = () => {
        gsap.to('#bannerPubSection', {
            transform: "translateX(0)",
        })
    }

    const onLeave = () => {
        gsap.to('#bannerPubSection', {
            transform: "translateX(-150vw)",
        })
    }

	return (
		<>
			<section 
				id='banner' 
				className='banner'
				onMouseEnter={onEnter}
				onMouseLeave={onLeave}
			>
				<div>
					{slideArray1.map((items, index) => (
						<div key={index}>
							<img className={index === currentState ? 
								'banner__picture1 banner__picture--in' : 
								'banner__picture1 banner__picture--out'
							}
							src={items.img} 
							width='720px'
							height='1342px'
							fetchpriority='high' 
							alt="photos paisible" />
						</div>
					))}
					{slideArray2.map((items, index) => (
						<div key={index}>
							<img className={index === currentState ? 
								'banner__picture2 banner__picture--in' : 
								'banner__picture2 banner__picture--out'
							}
							src={items.img} 
							width='1500px'
							height='1000px'
							fetchpriority='high' 
							alt="photos paisible" />
						</div>
					))}
				</div>	
			</section>
			<img 
				className='banner__logo-mutuact' 
				src={logoMutuacFull} 
				width='2035px'
				height='1294px'
				fetchpriority='high' 
				alt='logo de mutuact'
			/>
		</>
	)
}
 
export default Banner