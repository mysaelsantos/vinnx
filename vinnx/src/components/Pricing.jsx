import Button from './ui/Button'

const plans = [
    {
        id: 'starter',
        name: 'Starter',
        price: '1.997',
        period: '/mês',
        featured: false,
        features: [
            '1 Chatbot IA',
            'Integração WhatsApp',
            'Dashboard básico',
            'Suporte por email',
            'Até 1.000 conversas/mês',
        ],
    },
    {
        id: 'professional',
        name: 'Professional',
        price: '4.997',
        period: '/mês',
        featured: true,
        badge: 'Mais Popular',
        features: [
            '3 Chatbots IA',
            'Multi-canal integrado',
            'Dashboard avançado',
            'Suporte prioritário 24/7',
            'Até 10.000 conversas/mês',
            'Automação de vendas',
            'CRM integrado',
        ],
    },
    {
        id: 'enterprise',
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        featured: false,
        features: [
            'Chatbots ilimitados',
            'Soluções sob medida',
            'API dedicada',
            'Gerente de conta',
            'SLA garantido',
            'Treinamento completo',
        ],
    },
]

function Pricing() {
    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Planos</span>
                    <h2 className="section-title">
                        Escolha o plano ideal para seu <span className="accent">negócio</span>
                    </h2>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan) => (
                        <div key={plan.id} className={`pricing-card ${plan.featured ? 'featured' : ''}`}>
                            {plan.badge && <div className="pricing-badge">{plan.badge}</div>}

                            <div className="pricing-header">
                                <h3>{plan.name}</h3>
                                <div className="pricing-price">
                                    {plan.price !== 'Custom' && <span className="currency">R$</span>}
                                    <span className="amount">{plan.price}</span>
                                    {plan.period && <span className="period">{plan.period}</span>}
                                </div>
                            </div>

                            <ul className="pricing-features">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>

                            <Button
                                href="#contact"
                                variant={plan.featured ? 'primary' : 'secondary'}
                                fullWidth
                            >
                                {plan.id === 'enterprise' ? 'Falar com Vendas' : 'Começar'}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing
