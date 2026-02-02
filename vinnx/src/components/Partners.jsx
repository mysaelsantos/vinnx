function Partners() {
    const partners = [
        { name: 'TechCorp', icon: '🏢' },
        { name: 'StartupX', icon: '🚀' },
        { name: 'FinanceAI', icon: '💳' },
        { name: 'HealthPlus', icon: '🏥' },
        { name: 'EduTech', icon: '📚' },
        { name: 'RetailPro', icon: '🛒' },
    ]

    return (
        <section className="partners">
            <div className="container">
                <div className="partners-header">
                    <span className="partners-label">Empresas que confiam na VINNX</span>
                </div>

                <div className="partners-track">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-item">
                            <span className="partner-logo">{partner.icon}</span>
                            <span>{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Partners
