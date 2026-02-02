import Button from './ui/Button'

function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Background gradient */}
            <div className="hero-bg">
                <div className="hero-gradient hero-gradient-1"></div>
                <div className="hero-gradient hero-gradient-2"></div>
                <div className="hero-grid-pattern"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    {/* Badge */}
                    <div className="hero-badge animate-on-scroll">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="badge-icon">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                        <span>Tecnologia de ponta para seu negócio</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="hero-title animate-on-scroll">
                        Automatize seu negócio com{' '}
                        <span className="hero-highlight">Inteligência Artificial</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle animate-on-scroll">
                        Desenvolvemos IA Agents, Sistemas SaaS e Sites de alta conversão
                        para empresas que querem escalar resultados e vender mais.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta animate-on-scroll">
                        <Button href="#contact" variant="primary" size="large">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            Começar agora
                        </Button>
                        <Button href="#services" variant="secondary" size="large">
                            Explorar soluções
                        </Button>
                    </div>

                    {/* Trust Stats */}
                    <div className="hero-stats animate-on-scroll">
                        <div className="hero-stat">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </div>
                            <div className="stat-info">
                                <span className="stat-value">150+</span>
                                <span className="stat-label">Projetos</span>
                            </div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="hero-stat">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                            <div className="stat-info">
                                <span className="stat-value">98%</span>
                                <span className="stat-label">Satisfação</span>
                            </div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="hero-stat">
                            <div className="stat-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div className="stat-info">
                                <span className="stat-value">24/7</span>
                                <span className="stat-label">Suporte</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-mouse">
                    <div className="scroll-wheel"></div>
                </div>
                <span>Role para explorar</span>
            </div>
        </section>
    )
}

export default Hero
