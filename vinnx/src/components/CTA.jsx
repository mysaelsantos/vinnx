import { useState } from 'react'
import Button from './ui/Button'

function CTA() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        interest: '',
        message: '',
    })
    const [status, setStatus] = useState('idle') // idle, sending, success

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setStatus('sending')

        // Simulate form submission
        setTimeout(() => {
            setStatus('success')
            setFormData({
                name: '',
                email: '',
                whatsapp: '',
                interest: '',
                message: '',
            })

            setTimeout(() => setStatus('idle'), 3000)
        }, 1500)
    }

    // Generate particles
    const particles = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.5 + 0.1,
    }))

    return (
        <section className="cta" id="contact">
            <div className="cta-particles" id="cta-particles">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="particle"
                        style={{
                            width: `${p.size}px`,
                            height: `${p.size}px`,
                            left: `${p.left}%`,
                            top: `${p.top}%`,
                            animationDuration: `${p.duration}s`,
                            animationDelay: `-${p.delay}s`,
                            opacity: p.opacity,
                        }}
                    />
                ))}
            </div>

            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">Pronto para transformar seu negócio?</h2>
                    <p className="cta-subtitle">
                        Agende uma consultoria gratuita e descubra como a IA pode revolucionar sua empresa.
                    </p>

                    <form className="cta-form" id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu nome"
                                required
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Seu email"
                                required
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="tel"
                                name="whatsapp"
                                placeholder="WhatsApp"
                                className="form-input"
                                value={formData.whatsapp}
                                onChange={handleChange}
                            />
                            <select
                                name="interest"
                                className="form-input"
                                value={formData.interest}
                                onChange={handleChange}
                            >
                                <option value="">Interesse principal</option>
                                <option value="ia-agents">IA Agents</option>
                                <option value="saas">SaaS Systems</option>
                                <option value="webdesign">Web Design</option>
                                <option value="automacao">Automação</option>
                            </select>
                        </div>
                        <textarea
                            name="message"
                            placeholder="Conte-nos sobre seu projeto..."
                            className="form-input form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            variant="primary"
                            size="large"
                            disabled={status === 'sending'}
                        >
                            {status === 'idle' && 'Enviar Mensagem'}
                            {status === 'sending' && 'Enviando...'}
                            {status === 'success' && 'Mensagem Enviada! ✓'}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CTA
