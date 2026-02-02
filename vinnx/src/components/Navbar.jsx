import { useState, useEffect } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)

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

                <a href="#contact" className="nav-cta">
                    Fale Conosco
                </a>

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
