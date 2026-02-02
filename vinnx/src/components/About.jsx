function About() {
    const stats = [
        { number: '150', suffix: '+', label: 'Projetos entregues' },
        { number: '98', suffix: '%', label: 'Satisfação' },
        { number: '5', suffix: '+', label: 'Anos de experiência' },
        { number: '24', suffix: '/7', label: 'Suporte ativo' },
    ]

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2>
                            Transformamos tecnologia em <span style={{ color: 'var(--primary)' }}>resultados</span>
                        </h2>
                        <p className="about-description">
                            A VINNX nasceu para conectar empresas às melhores soluções de
                            inteligência artificial e automação. Desenvolvemos IA Agents,
                            sistemas SaaS e sites que vendem.
                        </p>
                        <p className="about-description">
                            Nossa missão é simples: fazer sua empresa vender mais,
                            atender melhor e operar com eficiência máxima.
                        </p>
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <span className="stat-number">
                                    {stat.number}
                                    <span className="stat-plus">{stat.suffix}</span>
                                </span>
                                <span className="stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
