const testimonials = [
    {
        id: 1,
        content: 'A VINNX revolucionou nosso atendimento. O chatbot atende 80% das demandas sozinho e nossa equipe foca no que realmente importa.',
        author: 'Maria Santos',
        role: 'CEO, E-commerce Plus',
    },
    {
        id: 2,
        content: 'Dobramos nossas vendas em 3 meses com o funil automatizado. Melhor investimento que fizemos.',
        author: 'Carlos Silva',
        role: 'Diretor, Tech Solutions',
    },
    {
        id: 3,
        content: 'O sistema SaaS deles é incrível. Interface limpa e todas as features que precisávamos.',
        author: 'Ana Costa',
        role: 'Gerente, Clínica São Lucas',
    },
]

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Depoimentos</span>
                    <h2 className="section-title">
                        O que nossos <span className="accent">clientes</span> dizem
                    </h2>
                </div>

                <div className="testimonials-slider">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-content">
                                <p>"{testimonial.content}"</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.author.charAt(0)}
                                </div>
                                <div className="author-info">
                                    <strong>{testimonial.author}</strong>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
