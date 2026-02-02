function About() {
    const stats = [
        {
            number: '150',
            suffix: '+',
            label: 'Projetos entregues',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            )
        },
        {
            number: '98',
            suffix: '%',
            label: 'Satisfação',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
            )
        },
        {
            number: '5',
            suffix: '+',
            label: 'Anos no mercado',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
            )
        },
        {
            number: '24',
            suffix: '/7',
            label: 'Suporte ativo',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>
            )
        },
    ]

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text animate-on-scroll">
                        <div className="section-tag">Sobre a VINNX</div>
                        <h2>
                            Transformamos tecnologia em <span style={{ color: 'var(--primary)' }}>resultados reais</span>
                        </h2>
                        <p className="about-description">
                            A VINNX nasceu com um propósito claro: democratizar o acesso
                            às melhores soluções de inteligência artificial e automação
                            para empresas de todos os tamanhos.
                        </p>
                        <p className="about-description">
                            Desenvolvemos IA Agents que atendem, vendem e resolvem problemas
                            24/7. Criamos sistemas SaaS sob medida e sites que realmente
                            convertem visitantes em clientes.
                        </p>
                        <p className="about-description">
                            <strong>Nossa missão:</strong> fazer sua empresa vender mais,
                            atender melhor e operar com máxima eficiência.
                        </p>
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="stat-card animate-on-scroll"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="stat-card-icon">
                                    {stat.icon}
                                </div>
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
