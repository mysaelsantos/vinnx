import { useState } from 'react'

const faqData = [
    {
        question: 'O que é um IA Agent?',
        answer: 'É um assistente virtual inteligente que pode atender clientes, responder perguntas, qualificar leads e até fechar vendas automaticamente, 24 horas por dia.',
    },
    {
        question: 'Quanto tempo leva para implementar?',
        answer: 'Depende do projeto. Um chatbot simples pode estar pronto em 1-2 semanas. Sistemas mais complexos levam de 4-8 semanas.',
    },
    {
        question: 'Funciona com meu sistema atual?',
        answer: 'Sim! Nossas soluções se integram com os principais sistemas do mercado: ERPs, CRMs, e-commerces, WhatsApp, Instagram e mais.',
    },
    {
        question: 'Preciso de conhecimento técnico?',
        answer: 'Não. Cuidamos de toda a implementação e treinamos sua equipe. Você só precisa usar o sistema.',
    },
    {
        question: 'Qual o suporte oferecido?',
        answer: 'Oferecemos suporte por email, chat e telefone. Planos Professional e Enterprise têm suporte 24/7 prioritário.',
    },
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
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
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                        >
                            <button className="faq-question" onClick={() => toggle(index)}>
                                {item.question}
                                <svg className="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 5v14M5 12h14" />
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
