import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Background from '../../public/components/Background'
import Header from '../../public/components/Header'
import Banner from '../../public/components/Banner'
import About from '../../public/components/About'
import Epargne from '../../public/components/Epargne'
import Prevoyance from '../../public/components/Prevoyance'
import Agences from '../../public/components/Agences'
import Contact from '../../public/components/Contact'
import Footer from '../../public/components/Footer'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const PublicContainer = () => {

	window.onload = () => {
		localStorage.removeItem('token')
		window.scrollTo(0, 0)
	}

	const slideInTop = (elem, delay, duration) => {
        gsap.fromTo(
            elem,
            {
                opacity: 0,
                y: -200,
            },
            {
                opacity: 1,
                y: 0,
                delay: delay || .5,
                duration: duration || 1,
                scrollTrigger: {
                    trigger: elem,
                    start: "top center",
                    end: "bottom center"
                }
            }
        )
    }

    useEffect(() => {
        slideInTop('#about')
    }, [])

    useEffect(() => {
        slideInTop('#about')
    }, [])

    useEffect(() => {
        slideInTop('#epargne')
    }, [])

	useEffect(() => {
        slideInTop('#prevoyance')
    }, [])

	useEffect(() => {
        slideInTop('#agences')
    }, [])

	useEffect(() => {
        slideInTop('#contact')
    }, [])

	return (
		<>
			<main>
				<Header />
				<Banner />
				<About />
				<Epargne />
				<Prevoyance />
				<Agences />
				<Contact />
				<Footer />
                <Background />
			</main>
		</>
	) 
}
 
export default PublicContainer