function Features() {
    const features = [
        {
            number: '01',
            title: 'Consultoria Estratégica',
            description: 'Analisamos seu negócio, processos e identificamos oportunidades de automação e otimização.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
            ),
        },
        {
            number: '02',
            title: 'Desenvolvimento Ágil',
            description: 'Criamos soluções sob medida com metodologia ágil, entregas rápidas e qualidade garantida.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
        },
        {
            number: '03',
            title: 'Integração Completa',
            description: 'Conectamos com seus sistemas existentes: ERPs, CRMs, e-commerces, APIs e muito mais.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <line x1="1.05" y1="12" x2="7" y2="12" />
                    <line x1="17.01" y1="12" x2="22.96" y2="12" />
                </svg>
            ),
        },
        {
            number: '04',
            title: 'Treinamento & Onboarding',
            description: 'Capacitamos sua equipe para extrair o máximo potencial das soluções implementadas.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
            ),
        },
        {
            number: '05',
            title: 'Suporte Contínuo',
            description: 'Acompanhamento de resultados, otimizações constantes e suporte técnico dedicado.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 01-3.46 0" />
                </svg>
            ),
        },
    ]

    return (
        <section className="features" id="features">
            <div className="features-wrapper">
                <div className="container">
                    <div className="section-header animate-on-scroll">
                        <span className="section-tag">Como Funciona</span>
                        <h2 className="section-title">
                            Um processo pensado para <span className="accent">resultados</span>
                        </h2>
                    </div>
                </div>

                <div className="features-track">
                    {features.map((feature) => (
                        <div key={feature.number} className="feature-item animate-on-scroll">
                            <div className="feature-icon">
                                {feature.icon}
                            </div>
                            <div className="feature-number">{feature.number}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
