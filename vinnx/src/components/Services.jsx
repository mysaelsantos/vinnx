import { useContext } from 'react'
import { ModalContext } from './ui/Modal'

const services = [
    {
        id: 'ia-agents',
        title: 'IA Agents',
        description: 'Agentes inteligentes que atendem, vendem e resolvem problemas 24/7.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
            </svg>
        ),
    },
    {
        id: 'saas',
        title: 'SaaS Systems',
        description: 'Plataformas sob medida em nuvem, escaláveis e seguras.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8m-4-4v4" />
            </svg>
        ),
    },
    {
        id: 'webdesign',
        title: 'Web Design',
        description: 'Sites e landing pages que convertem visitantes em clientes.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
    },
    {
        id: 'atendimento',
        title: 'Atendimento Inteligente',
        description: 'Chatbots para WhatsApp, Instagram e mais canais.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        id: 'vendas',
        title: 'Vendas Automatizadas',
        description: 'Funis de vendas que qualificam e fecham negócios sozinhos.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18" />
                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
            </svg>
        ),
    },
    {
        id: 'estoque',
        title: 'Gestão de Estoque',
        description: 'Controle inteligente com previsão de demanda por IA.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
        ),
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
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            {service.description}
                        </p>
                        <h4 style={{ marginBottom: '12px', color: 'var(--primary)' }}>O que inclui:</h4>
                        <ul style={{ color: 'var(--text-secondary)' }}>
                            <li style={{ marginBottom: '8px' }}>• Consultoria especializada</li>
                            <li style={{ marginBottom: '8px' }}>• Implementação completa</li>
                            <li style={{ marginBottom: '8px' }}>• Treinamento da equipe</li>
                            <li style={{ marginBottom: '8px' }}>• Suporte contínuo</li>
                        </ul>
                    </div>
                ),
            })
        }
    }

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Nossos Serviços</span>
                    <h2 className="section-title">
                        Soluções para o seu <span className="accent">crescimento</span>
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card">
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <button
                                className="service-link"
                                onClick={() => handleClick(service)}
                            >
                                Saiba mais →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
