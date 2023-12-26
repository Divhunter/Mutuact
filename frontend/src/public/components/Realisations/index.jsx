import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import pagesHeadersArray from '../../datas/pagesHeadersArray.json'
import PagesHeaders from '../../components/PagesHeaders'
import vdo from '../../assets/video/vdo.mp4'
import iconw from '../../assets/brands/2biconw.png'

// styles
import './m-realisations.css'
import './d-realisations.css'

const Realisations = () => {
    
    const realisationsHeader = pagesHeadersArray.find(el => el.title === "3")
    const realisationsHeaderArray = []
    realisationsHeaderArray.push(realisationsHeader)

	return (
		<section id='realisations' className='realisations'>
            {realisationsHeaderArray.map((item, index) => (
                <PagesHeaders 
                    key={index}
                    titleCol1={item.titleCol1}
                    subTitle1={item.subTitle1}
                    subTitle2={item.subTitle2}
                    text1={
                        <>
                            <div className='galery-container'>
                                <img 
                                    className='galery__logo-2br' 
                                    src={iconw} alt='2br-icon' 
                                />
                                <Link to='https://www.2brealisation.com/GalerieCard'>
                                    <p className='galery-button'>
                                        Visitez notre galerie
                                    </p>
                                </Link>
                            </div>
                            <div className='vdo-container'>
                                <ReactPlayer 
                                    url={vdo}
                                    playing={true} 
                                    playsinline={true} 
                                    muted
                                    loop={true}
                                    width='100%'
                                    height='auto'
                                    margin='0'
                                />
                            </div>
                        </>
                    } 
                />
            ))}
		</section>
	)
}

export default Realisations