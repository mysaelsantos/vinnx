import { useState, useEffect } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#about', label: 'Sobre' },
        { href: '#services', label: 'Serviços' },
        { href: '#features', label: 'Features' },
        { href: '#cases', label: 'Cases' },
        { href: '#pricing', label: 'Planos' },
        { href: '#faq', label: 'FAQ' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <a href="#" className="nav-logo">
                    <img src="/logo-branca.png" alt="VINNX" className="logo-img" />
                </a>

                <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="nav-cta">Fale Conosco</a>

                <button
                    className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
