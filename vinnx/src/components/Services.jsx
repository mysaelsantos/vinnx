import { useContext } from 'react'
import Card from './ui/Card'
import { ModalContext } from './ui/Modal'

const services = [
    {
        id: 'ia-agents',
        title: 'IA Agents',
        description: 'Agentes inteligentes que atendem, vendem e resolvem problemas 24/7. Automatize seu atendimento com IA conversacional.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                <circle cx="12" cy="12" r="3" />
                <path d="M12 5v2m0 10v2M5 12h2m10 0h2" />
            </svg>
        ),
    },
    {
        id: 'saas',
        title: 'SaaS Systems',
        description: 'Plataformas sob medida para o seu negócio. Sistemas em nuvem escaláveis e seguros para gestão completa.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <path d="M8 21h8m-4-4v4" />
            </svg>
        ),
    },
    {
        id: 'webdesign',
        title: 'Web Design',
        description: 'Sites e landing pages que convertem. Design moderno, responsivo e otimizado para resultados.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
            </svg>
        ),
    },
    {
        id: 'atendimento',
        title: 'Atendimento Inteligente',
        description: 'Chatbots e assistentes virtuais que entendem seus clientes. WhatsApp, Instagram e mais.',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        id: 'vendas',
        title: 'Vendas Automatizadas',
        description: 'Funis de vendas inteligentes que qualificam leads e fecham negócios automaticamente.',
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
        description: 'Controle inteligente de inventário com previsão de demanda e alertas automáticos.',
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

    const handleServiceClick = (service) => {
        if (openModal) {
            openModal({
                title: service.title,
                content: (
                    <>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            {service.description}
                        </p>
                        <h3 style={{ marginBottom: '15px', color: 'var(--primary)' }}>O que inclui:</h3>
                        <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px' }}>
                            <li style={{ marginBottom: '10px' }}>Consultoria especializada</li>
                            <li style={{ marginBottom: '10px' }}>Implementação completa</li>
                            <li style={{ marginBottom: '10px' }}>Treinamento da equipe</li>
                            <li style={{ marginBottom: '10px' }}>Suporte contínuo</li>
                        </ul>
                    </>
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
                        Soluções completas para o seu <span className="accent">crescimento</span>
                    </h2>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <Card
                            key={service.id}
                            className="service-card"
                            data-service={service.id}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <button
                                className="service-link"
                                onClick={() => handleServiceClick(service)}
                            >
                                Saiba mais →
                            </button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
