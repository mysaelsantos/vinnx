import { useState, useEffect, createContext, useContext } from 'react'
import LoadingScreen from './components/ui/LoadingScreen'
import FloatingChat from './components/ui/FloatingChat'
import ContactModal from './components/ui/ContactModal'
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

// Context para modal de contato
export const ContactModalContext = createContext()

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [contactModalOpen, setContactModalOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        // Intersection Observer para animações de scroll
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        )

        // Observar elementos animáveis após o loading
        setTimeout(() => {
            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                observer.observe(el)
            })
        }, 2100)

        return () => {
            clearTimeout(timer)
            observer.disconnect()
        }
    }, [])

    const openContactModal = () => setContactModalOpen(true)
    const closeContactModal = () => setContactModalOpen(false)

    return (
        <ContactModalContext.Provider value={{ openContactModal, closeContactModal }}>
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

                    {/* Botão flutuante de chat */}
                    <FloatingChat />

                    {/* Modal de contato */}
                    <ContactModal isOpen={contactModalOpen} onClose={closeContactModal} />
                </div>
            </ModalProvider>
        </ContactModalContext.Provider>
    )
}

export default App
