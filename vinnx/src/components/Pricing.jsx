import { useContext } from 'react'
import Button from './ui/Button'
import { ContactModalContext } from '../App'

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        description: 'Para empresas começando com automação',
        price: '1.997',
        period: '/mês',
        featured: false,
        features: [
            { text: '1 Chatbot IA', included: true },
            { text: 'Integração WhatsApp', included: true },
            { text: 'Dashboard básico', included: true },
            { text: 'Suporte por email', included: true },
            { text: 'Até 1.000 conversas/mês', included: true },
            { text: 'Automação de vendas', included: false },
            { text: 'CRM integrado', included: false },
        ],
    },
    {
        id: 'professional',
        name: 'Professional',
        description: 'Ideal para empresas em crescimento',
        price: '4.997',
        period: '/mês',
        featured: true,
        badge: 'Mais Popular',
        features: [
            { text: '3 Chatbots IA', included: true },
            { text: 'Multi-canal integrado', included: true },
            { text: 'Dashboard avançado', included: true },
            { text: 'Suporte 24/7 prioritário', included: true },
            { text: 'Até 10.000 conversas/mês', included: true },
            { text: 'Automação de vendas', included: true },
            { text: 'CRM integrado', included: true },
        ],
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        description: 'Soluções customizadas para grandes operações',
        price: 'Personalizado',
        period: '',
        featured: false,
        features: [
            { text: 'Chatbots ilimitados', included: true },
            { text: 'Soluções sob medida', included: true },
            { text: 'API dedicada', included: true },
            { text: 'Gerente de conta exclusivo', included: true },
            { text: 'SLA garantido', included: true },
            { text: 'Treinamento completo', included: true },
            { text: 'Suporte white-glove', included: true },
        ],
    },
]

function Pricing() {
    const { openContactModal } = useContext(ContactModalContext) || {}

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">Planos</span>
                    <h2 className="section-title">
                        Invista no <span className="accent">crescimento</span> do seu negócio
                    </h2>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`pricing-card animate-on-scroll ${plan.featured ? 'featured' : ''}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

                            <div className="pricing-header">
                                <h3>{plan.name}</h3>
                                <p className="pricing-desc">{plan.description}</p>
                                <div className="pricing-price">
                                    {plan.price !== 'Personalizado' && <span className="currency">R$</span>}
                                    <span className="amount">{plan.price}</span>
                                    {plan.period && <span className="period">{plan.period}</span>}
                                </div>
                            </div>

                            <ul className="pricing-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className={feature.included ? 'included' : 'not-included'}>
                                        {feature.included ? (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        ) : (
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="18" y1="6" x2="6" y2="18" />
                                                <line x1="6" y1="6" x2="18" y2="18" />
                                            </svg>
                                        )}
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                onClick={openContactModal}
                                variant={plan.featured ? 'primary' : 'secondary'}
                                fullWidth
                            >
                                {plan.id === 'enterprise' ? 'Falar com Especialista' : 'Começar Agora'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
