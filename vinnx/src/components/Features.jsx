import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from './ui/Card'

const features = [
    {
        number: '01',
        title: 'Tecnologia de Ponta',
        description: 'Utilizamos as mais recentes tecnologias em IA, machine learning e automação.',
    },
    {
        number: '02',
        title: 'Resultados Mensuráveis',
        description: 'Dashboards em tempo real para acompanhar o ROI de cada solução implementada.',
    },
    {
        number: '03',
        title: 'Suporte Dedicado',
        description: 'Equipe especializada disponível 24/7 para garantir o sucesso do seu projeto.',
    },
    {
        number: '04',
        title: 'Integração Total',
        description: 'Conectamos suas ferramentas existentes em um ecossistema unificado.',
    },
    {
        number: '05',
        title: 'Escalabilidade',
        description: 'Soluções que crescem junto com o seu negócio, sem limites.',
    },
]

function Features() {
    const trackRef = useRef(null)

    useEffect(() => {
        if (!trackRef.current) return

        const items = trackRef.current.querySelectorAll('.feature-item')
        const totalWidth = items.length * 380

        gsap.to(trackRef.current, {
            x: () => -(totalWidth - window.innerWidth + 100),
            ease: 'none',
            scrollTrigger: {
                trigger: '.features',
                start: 'top top',
                end: () => '+=' + totalWidth,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    return (
        <section className="features" id="features">
            <div className="features-wrapper">
                <div className="section-header features-header">
                    <span className="section-tag">Features</span>
                    <h2 className="section-title">
                        Por que escolher a <span className="accent">VINNX</span>?
                    </h2>
                </div>

                <div className="features-track" id="features-track" ref={trackRef}>
                    {features.map((feature) => (
                        <Card key={feature.number} className="feature-item">
                            <div className="feature-number">{feature.number}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
