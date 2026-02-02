import Button from './ui/Button'

function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Background gradient */}
            <div className="hero-bg">
                <div className="hero-gradient hero-gradient-1"></div>
                <div className="hero-gradient hero-gradient-2"></div>
            </div>

            <div className="container">
                <div className="hero-content">
                    {/* Badge */}
                    <div className="hero-badge">
                        <span className="badge-icon">⚡</span>
                        <span>A tecnologia certa para o seu negócio</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="hero-title">
                        Automatize seu negócio com{' '}
                        <span className="hero-highlight">Inteligência Artificial</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="hero-subtitle">
                        IA Agents, SaaS Systems e Web Design para empresas que querem
                        escalar resultados e vender mais no automático.
                    </p>

                    {/* CTA Buttons */}
                    <div className="hero-cta">
                        <Button href="#contact" variant="primary" size="large">
                            Começar agora
                        </Button>
                        <Button href="#services" variant="secondary" size="large">
                            Ver soluções
                        </Button>
                    </div>

                    {/* Trust Stats */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="stat-value">150+</span>
                            <span className="stat-label">Projetos entregues</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-value">98%</span>
                            <span className="stat-label">Satisfação</span>
                        </div>
                        <div className="hero-stat">
                            <span className="stat-value">24/7</span>
                            <span className="stat-label">Suporte ativo</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marquee */}
            <div className="hero-marquee">
                <div className="marquee-track">
                    <span>IA Agents que vendem 24/7</span>
                    <span className="marquee-dot">•</span>
                    <span>Sistemas SaaS personalizados</span>
                    <span className="marquee-dot">•</span>
                    <span>Web Design de alta conversão</span>
                    <span className="marquee-dot">•</span>
                    <span>Automação inteligente</span>
                    <span className="marquee-dot">•</span>
                    <span>IA Agents que vendem 24/7</span>
                    <span className="marquee-dot">•</span>
                    <span>Sistemas SaaS personalizados</span>
                    <span className="marquee-dot">•</span>
                    <span>Web Design de alta conversão</span>
                    <span className="marquee-dot">•</span>
                    <span>Automação inteligente</span>
                    <span className="marquee-dot">•</span>
                </div>
            </div>
        </section>
    )
}

export default Hero
