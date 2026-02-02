const testimonials = [
    {
        id: 1,
        content: 'A VINNX revolucionou nosso atendimento. O chatbot atende 80% das demandas sozinho e nossa equipe agora foca no que realmente importa. Vendemos 3x mais.',
        author: 'Maria Santos',
        role: 'CEO, E-commerce Plus',
        rating: 5,
    },
    {
        id: 2,
        content: 'Dobramos nossas vendas em 3 meses com o funil automatizado. A qualificação de leads acontece 24/7. Melhor investimento que já fizemos.',
        author: 'Carlos Silva',
        role: 'Diretor Comercial, Tech Solutions',
        rating: 5,
    },
    {
        id: 3,
        content: 'O sistema de agendamento eliminou completamente os erros manuais. Nossos pacientes adoram a confirmação automática e o no-show caiu 80%.',
        author: 'Dra. Ana Costa',
        role: 'Diretora, Clínica São Lucas',
        rating: 5,
    },
]

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <span className="section-tag">Depoimentos</span>
                    <h2 className="section-title">
                        O que nossos <span className="accent">clientes</span> dizem
                    </h2>
                </div>

                <div className="testimonials-slider">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card animate-on-scroll"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                ))}
                            </div>
                            <div className="testimonial-content">
                                <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                                <p>"{testimonial.content}"</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {testimonial.author.split(' ').map(n => n[0]).join('')}
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
