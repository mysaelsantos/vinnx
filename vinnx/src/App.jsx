import { useState, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import About from './components/About'
import Services from './components/Services'
import Features from './components/Features'
import Cases from './components/Cases'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import CustomCursor from './components/ui/CustomCursor'
import LoadingScreen from './components/ui/LoadingScreen'
import { ModalProvider } from './components/ui/Modal'

// Hooks
import { useScrollAnimation } from './hooks/useScrollAnimation'

gsap.registerPlugin(ScrollTrigger)

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useScrollAnimation()

    useEffect(() => {
        // Smooth scroll for anchor links
        const handleAnchorClick = (e) => {
            const href = e.target.closest('a')?.getAttribute('href')
            if (href?.startsWith('#')) {
                e.preventDefault()
                const target = document.querySelector(href)
                if (target) {
                    const navHeight = 80
                    const targetPosition = target.offsetTop - navHeight
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    })
                }
            }
        }

        document.addEventListener('click', handleAnchorClick)

        // Refresh ScrollTrigger on resize
        let resizeTimer
        const handleResize = () => {
            clearTimeout(resizeTimer)
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh()
            }, 250)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            document.removeEventListener('click', handleAnchorClick)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleLoadingComplete = () => {
        setIsLoading(false)
        // Enable scroll after loading
        document.body.style.overflow = ''
    }

    // Disable scroll during loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = 'hidden'
        }
    }, [isLoading])

    return (
        <ModalProvider>
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

            <div className={`app-content ${isLoading ? 'hidden' : 'visible'}`}>
                <CustomCursor />
                <Navbar />
                <main>
                    <Hero />
                    <Partners />
                    <About />
                    <Services />
                    <Features />
                    <Cases />
                    <Testimonials />
                    <Pricing />
                    <FAQ />
                    <CTA />
                </main>
                <Footer />
            </div>
        </ModalProvider>
    )
}

export default App
