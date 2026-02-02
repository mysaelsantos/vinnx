import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useMousePosition } from '../hooks/useMousePosition'
import Button from './ui/Button'
import TypeWriter from './ui/TypeWriter'

function Hero() {
    const logoRef = useRef(null)
    const containerRef = useRef(null)
    const mousePosition = useMousePosition()

    // Hero entrance animation
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.from('.hero-logo-3d', {
            duration: 1.2,
            scale: 0,
            rotation: -180,
            opacity: 0,
        })
            .to('.title-line', {
                duration: 0.8,
                opacity: 1,
                y: 0,
                stagger: 0.2,
            }, '-=0.6')
            .from('.hero-subtitle', {
                duration: 0.6,
                opacity: 0,
                y: 30,
            }, '-=0.3')
            .from('.hero-tagline', {
                duration: 0.6,
                opacity: 0,
                y: 30,
            }, '-=0.3')
            .from('.hero-cta .btn', {
                duration: 0.6,
                opacity: 0,
                y: 30,
                stagger: 0.15,
            }, '-=0.2')
            .from('.hero-badge', {
                duration: 0.4,
                opacity: 0,
                scale: 0.8,
            }, '-=0.2')
    }, [])

    // 3D Logo effect on mouse move
    useEffect(() => {
        if (!containerRef.current || !logoRef.current) return

        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const rotateX = (mousePosition.y - centerY) / 12
        const rotateY = (mousePosition.x - centerX) / 12

        gsap.to(logoRef.current, {
            duration: 0.3,
            rotateX: -rotateX,
            rotateY: rotateY,
            ease: 'power2.out',
        })
    }, [mousePosition])

    // Generate particles with varying properties
    const particles = Array.from({ length: 60 }, (_, i) => ({
        id: i,
        size: Math.random() * 5 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 15 + 8,
        delay: Math.random() * 15,
        opacity: Math.random() * 0.6 + 0.1,
        hue: Math.random() > 0.7 ? 150 : 120, // Some particles slightly blue-ish
    }))

    // Floating orbs for depth
    const orbs = [
        { size: 300, left: -10, top: 20, opacity: 0.1, blur: 100 },
        { size: 400, left: 80, top: 60, opacity: 0.08, blur: 120 },
        { size: 200, left: 50, top: 10, opacity: 0.15, blur: 80 },
    ]

    return (
        <section className="hero" id="hero">
            {/* Background orbs */}
            <div className="hero-orbs">
                {orbs.map((orb, i) => (
                    <div
                        key={i}
                        className="hero-orb"
                        style={{
                            width: `${orb.size}px`,
                            height: `${orb.size}px`,
                            left: `${orb.left}%`,
                            top: `${orb.top}%`,
                            opacity: orb.opacity,
                            filter: `blur(${orb.blur}px)`,
                        }}
                    />
                ))}
            </div>

            {/* Particles */}
            <div className="hero-particles">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="particle"
                        style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `-${p.delay}s`,
                            opacity: p.opacity,
                            background: `hsl(${p.hue}, 70%, 50%)`,
                        }}
                    />
                ))}
            </div>

            {/* Grid background */}
            <div className="hero-grid"></div>

            <div className="hero-content">
                {/* Badge */}
                <div className="hero-badge">
                    <span className="badge-dot"></span>
                    <span>Transformando negócios com IA</span>
                </div>

                {/* 3D Logo */}
                <div
                    className="hero-logo-3d"
                    id="hero-logo-3d"
                    ref={containerRef}
                >
                    <img
                        src="/logo-verde.png"
                        alt="VINNX Logo"
                        className="logo-3d"
                        ref={logoRef}
                    />
                    <div className="logo-glow"></div>
                    <div className="logo-ring logo-ring-1"></div>
                    <div className="logo-ring logo-ring-2"></div>
                    <div className="logo-ring logo-ring-3"></div>
                </div>

                <div className="hero-text">
                    <h1 className="hero-title">
                        <span className="title-line">IA Agents</span>
                        <span className="title-line accent">SaaS Systems</span>
                        <span className="title-line">Web Design</span>
                    </h1>

                    <p className="hero-subtitle">
                        Automatize{' '}
                        <TypeWriter
                            words={['processos', 'vendas', 'atendimento', 'gestão']}
                            typingSpeed={80}
                            deletingSpeed={40}
                            pauseDuration={2500}
                            className="typewriter-highlight"
                        />
                        {' '}e venda mais.
                    </p>

                    <p className="hero-tagline">A tecnologia certa para o seu negócio</p>

                    <div className="hero-cta">
                        <Button href="#contact" variant="primary" size="large">
                            <span className="btn-icon">🚀</span>
                            Começar Agora
                        </Button>
                        <Button href="#services" variant="secondary" size="large">
                            Nossos Serviços
                            <span className="btn-arrow">→</span>
                        </Button>
                    </div>

                    {/* Trust badges */}
                    <div className="hero-trust">
                        <div className="trust-item">
                            <span className="trust-number">150+</span>
                            <span className="trust-label">Projetos</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <span className="trust-number">98%</span>
                            <span className="trust-label">Satisfação</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <span className="trust-number">24/7</span>
                            <span className="trust-label">Suporte</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll</span>
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
