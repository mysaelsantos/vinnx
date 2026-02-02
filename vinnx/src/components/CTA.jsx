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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aqui você pode integrar com seu backend
        alert('Mensagem enviada! Entraremos em contato em breve.')
    }

    return (
        <section className="cta" id="contact">
            <div className="container">
                <div className="cta-content">
                    <h2 className="cta-title">
                        Pronto para transformar seu negócio?
                    </h2>
                    <p className="cta-subtitle">
                        Agende uma consultoria gratuita e descubra como a IA pode revolucionar sua empresa.
                    </p>

                    <form className="cta-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu nome"
                                className="form-input"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Seu email"
                                className="form-input"
                                value={formData.email}
                                onChange={handleChange}
                                required
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
                            placeholder="Conte sobre seu projeto..."
                            className="form-input form-textarea"
                            value={formData.message}
                            onChange={handleChange}
                        />
                        <Button type="submit" variant="primary" size="large" fullWidth>
                            Enviar Mensagem
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CTA
