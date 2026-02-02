function Features() {
    const features = [
        {
            number: '01',
            title: 'Análise do Negócio',
            description: 'Entendemos suas necessidades e identificamos oportunidades de automação e melhoria.',
        },
        {
            number: '02',
            title: 'Desenvolvimento',
            description: 'Criamos soluções sob medida com as tecnologias mais avançadas do mercado.',
        },
        {
            number: '03',
            title: 'Implementação',
            description: 'Integramos com seus sistemas atuais de forma rápida e segura.',
        },
        {
            number: '04',
            title: 'Treinamento',
            description: 'Capacitamos sua equipe para extrair o máximo das soluções.',
        },
        {
            number: '05',
            title: 'Suporte Contínuo',
            description: 'Acompanhamos resultados e otimizamos constantemente.',
        },
    ]

    return (
        <section className="features" id="features">
            <div className="features-wrapper">
                <div className="features-header section-header">
                    <span className="section-tag">Como Funciona</span>
                    <h2 className="section-title">
                        Nosso <span className="accent">processo</span>
                    </h2>
                </div>

                <div className="features-track">
                    {features.map((feature) => (
                        <div key={feature.number} className="feature-item">
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
