import { useState } from 'react'

const faqItems = [
    {
        id: 1,
        question: 'Como funciona a implementação?',
        answer: 'Nossa implementação é dividida em 4 fases: Discovery, Desenvolvimento, Testes e Go-Live. O prazo médio é de 2-4 semanas dependendo da complexidade do projeto.',
    },
    {
        id: 2,
        question: 'Vocês oferecem período de teste?',
        answer: 'Sim! Oferecemos 14 dias de teste gratuito para novos clientes conhecerem nossa plataforma e resultados.',
    },
    {
        id: 3,
        question: 'Quais integrações estão disponíveis?',
        answer: 'Integramos com WhatsApp, Instagram, Facebook Messenger, Telegram, além de CRMs como HubSpot, Salesforce, e ERPs diversos.',
    },
    {
        id: 4,
        question: 'Como é feito o treinamento da IA?',
        answer: 'Utilizamos seus dados históricos, FAQs e processos existentes para treinar a IA. O processo é contínuo e a IA aprende com cada interação.',
    },
    {
        id: 5,
        question: 'Qual o prazo para ver resultados?',
        answer: 'A maioria dos clientes vê resultados significativos nas primeiras 2 semanas após a implementação. ROI completo geralmente em 2-3 meses.',
    },
]

function FAQ() {
    const [activeId, setActiveId] = useState(null)

    const toggleItem = (id) => {
        setActiveId(activeId === id ? null : id)
    }

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">FAQ</span>
                    <h2 className="section-title">
                        Perguntas <span className="accent">frequentes</span>
                    </h2>
                </div>

                <div className="faq-list">
                    {faqItems.map((item) => (
                        <div
                            key={item.id}
                            className={`faq-item ${activeId === item.id ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleItem(item.id)}
                                aria-expanded={activeId === item.id}
                            >
                                <span>{item.question}</span>
                                <svg
                                    className="faq-icon"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
