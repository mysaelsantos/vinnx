import { useState, useEffect, useContext } from 'react'
import { ContactModalContext } from '../App'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const { openContactModal } = useContext(ContactModalContext) || {}

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
        { href: '#cases', label: 'Cases' },
        { href: '#pricing', label: 'Planos' },
        { href: '#faq', label: 'FAQ' },
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#" className="nav-logo">
                    <img
                        src="/logo-verde.png"
                        alt="VINNX"
                        className="logo-img"
                        onError={(e) => {
                            e.target.style.display = 'none'
                            e.target.parentNode.innerHTML = '<span style="font-size: 24px; font-weight: 700; color: #22C55E;">VINNX</span>'
                        }}
                    />
                </a>

                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <button onClick={openContactModal} className="nav-cta">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    Fale Conosco
                </button>

                <button className="mobile-menu-btn" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
