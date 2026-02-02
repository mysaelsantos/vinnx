function Partners() {
    const partners = [
        {
            name: 'TechCorp',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                </svg>
            )
        },
        {
            name: 'StartupX',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                </svg>
            )
        },
        {
            name: 'FinanceAI',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
            )
        },
        {
            name: 'HealthPlus',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            )
        },
        {
            name: 'EduTech',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
                </svg>
            )
        },
        {
            name: 'RetailPro',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
                </svg>
            )
        },
    ]

    return (
        <section className="partners">
            <div className="container">
                <div className="partners-header">
                    <span className="partners-label">Empresas que confiam na VINNX</span>
                </div>

                <div className="partners-track">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-item animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
                            <span className="partner-logo">{partner.icon}</span>
                            <span className="partner-name">{partner.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Partners
