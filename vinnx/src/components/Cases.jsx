import { useContext } from 'react'
import { ModalContext } from './ui/Modal'

const cases = [
    {
        id: 1,
        title: 'E-commerce Fashion',
        category: 'IA Agents',
        result: '+340% conversões',
        image: 'linear-gradient(135deg, #22C55E 0%, #0A0A0A 100%)',
        details: {
            client: 'Fashion Store Premium',
            challenge: 'Alto volume de mensagens não respondidas e leads perdidos por demora no atendimento.',
            solution: 'Implementação de IA Agent para WhatsApp com atendimento 24/7, qualificação automática e integração com e-commerce.',
            results: [
                { label: 'Conversões', value: '+340%' },
                { label: 'Tempo de resposta', value: '-85%' },
                { label: 'ROI', value: '800%' },
            ],
        },
    },
    {
        id: 2,
        title: 'Clínica Médica',
        category: 'SaaS',
        result: 'Sistema completo',
        image: 'linear-gradient(135deg, #3B82F6 0%, #0A0A0A 100%)',
        details: {
            client: 'Clínica São Lucas',
            challenge: 'Agendamentos manuais gerando erros, faltas e retrabalho da equipe.',
            solution: 'Sistema SaaS de agendamento com confirmação automática via WhatsApp e integração com prontuário.',
            results: [
                { label: 'No-shows', value: '-80%' },
                { label: 'Consultas/dia', value: '+30%' },
                { label: 'Satisfação', value: '98%' },
            ],
        },
    },
    {
        id: 3,
        title: 'Rede de Restaurantes',
        category: 'Automação',
        result: '-40% desperdício',
        image: 'linear-gradient(135deg, #A855F7 0%, #0A0A0A 100%)',
        details: {
            client: 'Rede Sabor Brasil',
            challenge: 'Alto desperdício de alimentos e dificuldade em prever demanda.',
            solution: 'Sistema de gestão de estoque com IA preditiva e alertas automáticos.',
            results: [
                { label: 'Desperdício', value: '-40%' },
                { label: 'Economia/mês', value: 'R$ 50k' },
                { label: 'Previsões', value: '95% precisão' },
            ],
        },
    },
]

function Cases() {
    const { openModal } = useContext(ModalContext) || {}

    const handleClick = (caseItem) => {
        if (openModal) {
            openModal({
                title: caseItem.title,
                content: (
                    <div>
                        <div style={{
                            display: 'inline-block',
                            padding: '4px 12px',
                            background: 'rgba(34, 197, 94, 0.1)',
                            color: 'var(--primary)',
                            borderRadius: '20px',
                            fontSize: '12px',
                            marginBottom: '16px'
                        }}>
                            {caseItem.category}
                        </div>

                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Cliente:</strong> {caseItem.details.client}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Desafio:</strong> {caseItem.details.challenge}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            <strong style={{ color: 'var(--text-primary)' }}>Solução:</strong> {caseItem.details.solution}
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '12px',
                            padding: '16px',
                            background: 'var(--bg-dark)',
                            borderRadius: '12px'
                        }}>
                            {caseItem.details.results.map((result, i) => (
                                <div key={i} style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '20px', fontWeight: '700', color: 'var(--primary)' }}>
                                        {result.value}
                                    </div>
                                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                                        {result.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ),
            })
        }
    }

    return (
        <section className="cases" id="cases">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">Cases de Sucesso</span>
                    <h2 className="section-title">
                        Resultados que <span className="accent">impressionam</span>
                    </h2>
                </div>

                <div className="cases-grid">
                    {cases.map((caseItem, index) => (
                        <div
                            key={caseItem.id}
                            className="case-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div
                                className="case-image"
                                style={{ background: caseItem.image }}
                            >
                                <div className="case-overlay">
                                    <span className="case-category">{caseItem.category}</span>
                                </div>
                                <div className="case-result">
                                    <span>{caseItem.result}</span>
                                </div>
                            </div>
                            <div className="case-content">
                                <h3>{caseItem.title}</h3>
                                <p>Veja como transformamos este negócio com nossas soluções.</p>
                                <button className="case-btn" onClick={() => handleClick(caseItem)}>
                                    Ver case completo
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 16, height: 16 }}>
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Cases
