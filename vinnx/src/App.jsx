import { useState, useEffect } from 'react'
import LoadingScreen from './components/ui/LoadingScreen'
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
import { ModalProvider } from './components/ui/Modal'
import './index.css'

function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simular carregamento
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <ModalProvider>
            {isLoading && <LoadingScreen />}

            <div className={`app ${isLoading ? 'loading' : 'loaded'}`}>
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
