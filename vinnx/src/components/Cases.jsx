import { useContext } from 'react'
import { ModalContext } from './ui/Modal'

const cases = [
    {
        id: 1,
        title: 'E-commerce Fashion',
        category: 'IA Agents',
        result: '+340% em conversões',
        color: '#22C55E',
        details: {
            client: 'Fashion Store Premium',
            challenge: 'Alto volume de mensagens não respondidas',
            solution: 'IA Agent para atendimento 24/7',
            results: ['340% mais conversões', '50% menos tempo de resposta', 'ROI de 800%'],
        },
    },
    {
        id: 2,
        title: 'Clínica Médica',
        category: 'SaaS',
        result: 'Sistema de agendamento',
        color: '#3B82F6',
        details: {
            client: 'Clínica São Lucas',
            challenge: 'Agendamentos manuais com erros',
            solution: 'Sistema SaaS de agendamento automático',
            results: ['Zero erros', '30% mais consultas', '80% menos no-shows'],
        },
    },
    {
        id: 3,
        title: 'Rede de Restaurantes',
        category: 'Automação',
        result: '-40% desperdício',
        color: '#A855F7',
        details: {
            client: 'Rede Sabor Brasil',
            challenge: 'Desperdício de alimentos',
            solution: 'Gestão de estoque com previsão de IA',
            results: ['40% menos desperdício', 'R$ 50k/mês economizados', 'Alertas automáticos'],
        },
    },
]

function Cases() {
    const { openModal } = useContext(ModalContext) || {}

    const handleClick = (caseItem) => {
        if (openModal) {
            openModal({
                title: `Case: ${caseItem.title}`,
                content: (
                    <div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            <strong>Cliente:</strong> {caseItem.details.client}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            <strong>Desafio:</strong> {caseItem.details.challenge}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>
                            <strong>Solução:</strong> {caseItem.details.solution}
                        </p>
                        <h4 style={{ marginBottom: '12px', color: 'var(--primary)' }}>Resultados</h4>
                        <ul style={{ color: 'var(--text-secondary)' }}>
                            {caseItem.details.results.map((result, i) => (
                                <li key={i} style={{ marginBottom: '8px' }}>• {result}</li>
                            ))}
                        </ul>
                    </div>
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
                        <div key={caseItem.id} className="case-card">
                            <div
                                className="case-image"
                                style={{ background: `linear-gradient(135deg, ${caseItem.color}, #0a0a0a)` }}
                            >
                                <div className="case-overlay">
                                    <span className="case-category">{caseItem.category}</span>
                                </div>
                            </div>
                            <div className="case-content">
                                <h3>{caseItem.title}</h3>
                                <p>{caseItem.result}</p>
                                <button className="case-btn" onClick={() => handleClick(caseItem)}>
                                    Ver case →
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
