import { useState, useContext } from 'react'
import Button from './ui/Button'
import { ContactModalContext } from '../App'

function CTA() {
    const { openContactModal } = useContext(ContactModalContext) || {}
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        interest: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Aqui você integra com seu backend ou serviço de email
        console.log('Form submitted:', formData)
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
    }

    return (
        <section className="cta" id="contact">
            <div className="container">
                <div className="cta-content animate-on-scroll">
                    <span className="section-tag">Contato</span>
                    <h2 className="cta-title">
                        Pronto para transformar seu negócio?
                    </h2>
                    <p className="cta-subtitle">
                        Agende uma consultoria gratuita de 30 minutos e descubra como nossas soluções podem revolucionar sua empresa.
                    </p>

                    <div className="cta-options">
                        <button className="cta-quick-option" onClick={openContactModal}>
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <div>
                                <strong>WhatsApp</strong>
                                <span>Resposta imediata</span>
                            </div>
                        </button>

                        <span className="cta-divider">ou</span>
                    </div>

                    {submitted ? (
                        <div className="cta-success">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <h3>Mensagem enviada!</h3>
                            <p>Retornaremos em até 24 horas.</p>
                        </div>
                    ) : (
                        <form className="cta-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Nome</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Seu nome completo"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="seu@email.com"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="whatsapp">WhatsApp</label>
                                    <input
                                        type="tel"
                                        id="whatsapp"
                                        name="whatsapp"
                                        placeholder="(11) 99999-9999"
                                        className="form-input"
                                        value={formData.whatsapp}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="interest">Interesse</label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        className="form-input"
                                        value={formData.interest}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecione...</option>
                                        <option value="ia-agents">IA Agents</option>
                                        <option value="saas">Sistemas SaaS</option>
                                        <option value="webdesign">Web Design</option>
                                        <option value="automacao">Automação Geral</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensagem</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Conte um pouco sobre seu projeto ou desafios..."
                                    className="form-input form-textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>
                            <Button type="submit" variant="primary" size="large" fullWidth>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: 18, height: 18 }}>
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                                Enviar Mensagem
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}

export default CTA
