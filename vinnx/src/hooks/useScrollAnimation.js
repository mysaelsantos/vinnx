import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollAnimation() {
    useEffect(() => {
        // Register plugin
        gsap.registerPlugin(ScrollTrigger)

        // Small delay to ensure DOM is ready
        const timeout = setTimeout(() => {
            try {
                // Section headers animation
                gsap.utils.toArray('.section-header').forEach((header) => {
                    gsap.fromTo(header,
                        { opacity: 0, y: 50 },
                        {
                            scrollTrigger: {
                                trigger: header,
                                start: 'top 85%',
                                toggleActions: 'play none none none',
                            },
                            duration: 0.8,
                            opacity: 1,
                            y: 0,
                            ease: 'power3.out',
                        }
                    )
                })

                // About section text
                const aboutText = document.querySelector('.about-text')
                if (aboutText) {
                    gsap.fromTo(aboutText,
                        { opacity: 0, x: -50 },
                        {
                            scrollTrigger: {
                                trigger: aboutText,
                                start: 'top 80%',
                            },
                            duration: 0.8,
                            opacity: 1,
                            x: 0,
                            ease: 'power3.out',
                        }
                    )
                }

                // Stat cards
                const statCards = gsap.utils.toArray('.stat-card')
                if (statCards.length) {
                    gsap.fromTo(statCards,
                        { opacity: 0, y: 50 },
                        {
                            scrollTrigger: {
                                trigger: '.about-stats',
                                start: 'top 80%',
                            },
                            duration: 0.6,
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            ease: 'power3.out',
                        }
                    )
                }

                // Service cards
                const serviceCards = gsap.utils.toArray('.service-card')
                if (serviceCards.length) {
                    gsap.fromTo(serviceCards,
                        { opacity: 0, y: 50 },
                        {
                            scrollTrigger: {
                                trigger: '.services-grid',
                                start: 'top 80%',
                            },
                            duration: 0.6,
                            opacity: 1,
                            y: 0,
                            stagger: 0.1,
                            ease: 'power3.out',
                        }
                    )
                }

                // Case cards
                const caseCards = gsap.utils.toArray('.case-card')
                if (caseCards.length) {
                    gsap.fromTo(caseCards,
                        { opacity: 0, scale: 0.9 },
                        {
                            scrollTrigger: {
                                trigger: '.cases-grid',
                                start: 'top 80%',
                            },
                            duration: 0.6,
                            opacity: 1,
                            scale: 1,
                            stagger: 0.15,
                            ease: 'power3.out',
                        }
                    )
                }

                // Testimonials
                const testimonialCards = gsap.utils.toArray('.testimonial-card')
                if (testimonialCards.length) {
                    gsap.fromTo(testimonialCards,
                        { opacity: 0, y: 50 },
                        {
                            scrollTrigger: {
                                trigger: '.testimonials-slider',
                                start: 'top 80%',
                            },
                            duration: 0.6,
                            opacity: 1,
                            y: 0,
                            stagger: 0.15,
                            ease: 'power3.out',
                        }
                    )
                }

                // Pricing cards
                const pricingCards = gsap.utils.toArray('.pricing-card')
                if (pricingCards.length) {
                    gsap.fromTo(pricingCards,
                        { opacity: 0, y: 50 },
                        {
                            scrollTrigger: {
                                trigger: '.pricing-grid',
                                start: 'top 80%',
                            },
                            duration: 0.6,
                            opacity: 1,
                            y: 0,
                            stagger: 0.15,
                            ease: 'power3.out',
                        }
                    )
                }

                // FAQ items
                const faqItems = gsap.utils.toArray('.faq-item')
                if (faqItems.length) {
                    gsap.fromTo(faqItems,
                        { opacity: 0, x: -30 },
                        {
                            scrollTrigger: {
                                trigger: '.faq-list',
                                start: 'top 80%',
                            },
                            duration: 0.5,
                            opacity: 1,
                            x: 0,
                            stagger: 0.1,
                            ease: 'power3.out',
                        }
                    )
                }

                // CTA section
                const ctaContent = document.querySelector('.cta-content')
                if (ctaContent) {
                    gsap.fromTo(ctaContent,
                        { opacity: 0, y: 50 },
                        {
                            scrollTrigger: {
                                trigger: '.cta',
                                start: 'top 70%',
                            },
                            duration: 0.8,
                            opacity: 1,
                            y: 0,
                            ease: 'power3.out',
                        }
                    )
                }

                // Parallax on hero logo
                const handleScroll = () => {
                    const scrolled = window.scrollY
                    const heroLogo = document.querySelector('.hero-logo-3d')
                    if (heroLogo && scrolled < window.innerHeight) {
                        heroLogo.style.transform = `translateY(${scrolled * 0.3}px)`
                    }
                }

                window.addEventListener('scroll', handleScroll)

                return () => {
                    window.removeEventListener('scroll', handleScroll)
                }
            } catch (error) {
                console.warn('GSAP animation error:', error)
                // Fallback: make all elements visible
                document.querySelectorAll('.service-card, .case-card, .pricing-card, .faq-item, .testimonial-card, .stat-card').forEach(el => {
                    el.style.opacity = '1'
                    el.style.transform = 'none'
                })
            }
        }, 100)

        return () => {
            clearTimeout(timeout)
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])
}

export default useScrollAnimation
