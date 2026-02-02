import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Card from './ui/Card'

function About() {
    const statsRef = useRef([])

    const stats = [
        { value: 150, label: 'Projetos Entregues', suffix: '' },
        { value: 98, label: 'Satisfação', suffix: '%' },
        { value: 50, label: 'Automações Ativas', suffix: '+' },
        { value: 24, label: 'Suporte', suffix: '/7' },
    ]

    useEffect(() => {
        // Animate stats counting
        statsRef.current.forEach((el, i) => {
            if (!el) return

            const target = stats[i].value

            ScrollTrigger.create({
                trigger: el,
                start: 'top 85%',
                onEnter: () => {
                    gsap.to(el, {
                        duration: 2,
                        innerHTML: target,
                        snap: { innerHTML: 1 },
                        ease: 'power2.out',
                    })
                },
                once: true,
            })
        })
    }, [])

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Sobre Nós</span>
                    <h2 className="section-title">
                        Transformamos negócios com <span className="accent">Inteligência Artificial</span>
                    </h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-description">
                            A VINNX é uma agência especializada em soluções de IA e tecnologia.
                            Desenvolvemos sistemas inteligentes que automatizam processos,
                            aumentam vendas e otimizam a gestão do seu negócio.
                        </p>
                        <p className="about-description">
                            Com expertise em atendimento automatizado, gestão de estoque,
                            vendas inteligentes e muito mais, entregamos resultados reais
                            para empresas que querem crescer.
                        </p>
                    </div>

                    <div className="about-stats">
                        {stats.map((stat, index) => (
                            <Card key={stat.label} className="stat-card">
                                <span
                                    className="stat-number"
                                    ref={el => statsRef.current[index] = el}
                                >
                                    0
                                </span>
                                {stat.suffix && <span className="stat-plus">{stat.suffix}</span>}
                                <span className="stat-label">{stat.label}</span>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
