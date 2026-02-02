import { useContext } from 'react'
import { ModalContext } from './ui/Modal'

const services = [
    {
        id: 'ia-agents',
        title: 'IA Agents',
        description: 'Agentes inteligentes que atendem, vendem e resolvem problemas 24/7 em WhatsApp, Instagram e mais.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
        ),
        features: ['Atendimento 24/7', 'Multi-canal', 'Qualificação de leads'],
    },
    {
        id: 'saas',
        title: 'Sistemas SaaS',
        description: 'Plataformas personalizadas em nuvem, escaláveis e seguras para sua operação.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
        features: ['100% na nuvem', 'Escalável', 'Seguro'],
    },
    {
        id: 'webdesign',
        title: 'Web Design',
        description: 'Sites e landing pages que convertem visitantes em clientes pagantes.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
        features: ['Alta conversão', 'SEO otimizado', 'Mobile-first'],
    },
    {
        id: 'atendimento',
        title: 'Chatbots Inteligentes',
        description: 'Assistentes virtuais que entendem contexto e resolvem de verdade.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
        ),
        features: ['NLP avançado', 'Integração total', 'Aprende sozinho'],
    },
    {
        id: 'vendas',
        title: 'Automação de Vendas',
        description: 'Funis automatizados que qualificam, nutrem e fecham negócios.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
        ),
        features: ['Funis inteligentes', 'Nutrição automática', 'Fechamento 24/7'],
    },
    {
        id: 'analytics',
        title: 'Analytics & BI',
        description: 'Dashboards em tempo real para decisões baseadas em dados.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            </svg>
        ),
        features: ['Tempo real', 'Insights de IA', 'Relatórios customizados'],
    },
]

function Services() {
    const { openModal } = useContext(ModalContext) || {}

    const handleClick = (service) => {
        if (openModal) {
            openModal({
                title: service.title,
                content: (
                    <div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.7' }}>
                            {service.description}
                        </p>
                        <h4 style={{ marginBottom: '12px', color: 'var(--primary)', fontSize: '14px' }}>
                            Principais recursos:
                        </h4>
                        <ul style={{ color: 'var(--text-secondary)' }}>
                            {service.features.map((feature, i) => (
                                <li key={i} style={{ marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" style={{ width: 16, height: 16, flexShrink: 0 }}>
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ),
            })
        }
    }

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">Nossos Serviços</span>
                    <h2 className="section-title">
                        Soluções completas para o seu <span className="accent">crescimento</span>
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="service-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, i) => (
                                    <li key={i}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className="service-link"
                                onClick={() => handleClick(service)}
                            >
                                Saiba mais
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
