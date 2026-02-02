import { useContext } from 'react'
import { ModalContext } from './ui/Modal'

const cases = [
    {
        id: 1,
        title: 'E-commerce Fashion',
        category: 'IA Agents',
        result: '+340% em conversões com atendimento IA',
        color: 'var(--primary)',
        details: {
            client: 'Fashion Store Premium',
            challenge: 'Alto volume de mensagens não respondidas no WhatsApp',
            solution: 'Implementação de IA Agent para atendimento 24/7',
            results: [
                'Aumento de 340% nas conversões',
                'Redução de 50% no tempo de resposta',
                'ROI de 800% em 6 meses',
            ],
        },
    },
    {
        id: 2,
        title: 'Clínica Médica',
        category: 'SaaS',
        result: 'Sistema de agendamento inteligente',
        color: '#3498DB',
        details: {
            client: 'Clínica São Lucas',
            challenge: 'Agendamentos manuais causando erros e perda de clientes',
            solution: 'Sistema SaaS de agendamento com confirmação automática',
            results: [
                'Zero erros de agendamento',
                '30% mais consultas agendadas',
                'Redução de 80% em no-shows',
            ],
        },
    },
    {
        id: 3,
        title: 'Restaurante Chain',
        category: 'Automação',
        result: 'Gestão de estoque automatizada',
        color: '#9B59B6',
        details: {
            client: 'Rede Sabor Brasil',
            challenge: 'Desperdício de alimentos e falta de controle de estoque',
            solution: 'Sistema de gestão com previsão de demanda por IA',
            results: [
                'Redução de 40% no desperdício',
                'Economia de R$ 50k/mês',
                'Alertas automáticos de reposição',
            ],
        },
    },
]

function Cases() {
    const { openModal } = useContext(ModalContext) || {}

    const handleCaseClick = (caseItem) => {
        if (openModal) {
            openModal({
                title: `Case: ${caseItem.title}`,
                content: (
                    <>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            <strong>Cliente:</strong> {caseItem.details.client}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            <strong>Desafio:</strong> {caseItem.details.challenge}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            <strong>Solução:</strong> {caseItem.details.solution}
                        </p>
                        <h3 style={{ marginBottom: '15px', color: 'var(--primary)' }}>Resultados</h3>
                        <ul style={{ color: 'var(--text-secondary)', marginLeft: '20px' }}>
                            {caseItem.details.results.map((result, i) => (
                                <li key={i} style={{ marginBottom: '10px' }}>{result}</li>
                            ))}
                        </ul>
                    </>
                ),
            })
        }
    }

    return (
        <section className="cases" id="cases">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Cases de Sucesso</span>
                    <h2 className="section-title">
                        Resultados que <span className="accent">impressionam</span>
                    </h2>
                </div>

                <div className="cases-grid">
                    {cases.map((caseItem) => (
                        <div key={caseItem.id} className="case-card" data-case={caseItem.id}>
                            <div
                                className="case-image"
                                style={{
                                    background: `linear-gradient(135deg, ${caseItem.color}, var(--bg-dark))`
                                }}
                            >
                                <div className="case-overlay">
                                    <span className="case-category">{caseItem.category}</span>
                                </div>
                            </div>
                            <div className="case-content">
                                <h3>{caseItem.title}</h3>
                                <p>{caseItem.result}</p>
                                <button
                                    className="case-btn"
                                    onClick={() => handleCaseClick(caseItem)}
                                >
                                    Ver Case →
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
