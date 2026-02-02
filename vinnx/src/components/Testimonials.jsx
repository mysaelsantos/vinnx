import { useState, useEffect } from 'react'
import Card from './ui/Card'

const testimonials = [
    {
        id: 1,
        content: 'A VINNX transformou completamente nosso atendimento. O chatbot IA reduziu nosso tempo de resposta em 90% e aumentou as vendas em 50%.',
        author: 'Maria Costa',
        role: 'CEO, Fashion Store',
        avatar: 'MC',
    },
    {
        id: 2,
        content: 'O sistema de gestão que desenvolveram é incrível. Economizamos 20 horas por semana em tarefas manuais.',
        author: 'Roberto Silva',
        role: 'Diretor, Tech Solutions',
        avatar: 'RS',
    },
    {
        id: 3,
        content: 'Profissionais excepcionais! A landing page que criaram converteu 3x mais que nossa página anterior.',
        author: 'Ana Lima',
        role: 'Marketing, StartupX',
        avatar: 'AL',
    },
    {
        id: 4,
        content: 'A automação de vendas da VINNX mudou nosso negócio. Faturamos 200% mais no primeiro trimestre.',
        author: 'Carlos Mendes',
        role: 'Fundador, E-commerce Plus',
        avatar: 'CM',
    },
    {
        id: 5,
        content: 'Suporte incrível e resultados reais. Recomendo para qualquer empresa que quer crescer com tecnologia.',
        author: 'Fernanda Rocha',
        role: 'COO, Health Tech',
        avatar: 'FR',
    },
]

function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPaused, setIsPaused] = useState(false)

    // Autoplay
    useEffect(() => {
        if (isPaused) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [isPaused])

    // Show 3 testimonials at a time
    const visibleTestimonials = [
        testimonials[currentIndex % testimonials.length],
        testimonials[(currentIndex + 1) % testimonials.length],
        testimonials[(currentIndex + 2) % testimonials.length],
    ]

    return (
        <section
            className="testimonials"
            id="testimonials"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Depoimentos</span>
                    <h2 className="section-title">
                        O que nossos clientes <span className="accent">dizem</span>
                    </h2>
                </div>

                <div className="testimonials-slider" id="testimonials-slider">
                    {visibleTestimonials.map((testimonial, index) => (
                        <Card
                            key={`${testimonial.id}-${index}`}
                            className="testimonial-card"
                        >
                            <div className="testimonial-content">
                                <p>"{testimonial.content}"</p>
                            </div>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <strong>{testimonial.author}</strong>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="testimonials-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
