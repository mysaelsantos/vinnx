import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function useScrollAnimation() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        // Section headers animation
        gsap.utils.toArray('.section-header').forEach((header) => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                },
                duration: 0.8,
                opacity: 0,
                y: 50,
                ease: 'power3.out',
            })
        })

        // About section text
        const aboutText = document.querySelector('.about-text')
        if (aboutText) {
            gsap.from(aboutText, {
                scrollTrigger: {
                    trigger: aboutText,
                    start: 'top 80%',
                },
                duration: 0.8,
                opacity: 0,
                x: -50,
                ease: 'power3.out',
            })
        }

        // Stat cards
        gsap.from('.stat-card', {
            scrollTrigger: {
                trigger: '.about-stats',
                start: 'top 80%',
            },
            duration: 0.6,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: 'power3.out',
        })

        // Service cards
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 80%',
            },
            duration: 0.6,
            opacity: 0,
            y: 50,
            stagger: 0.1,
            ease: 'power3.out',
        })

        // Case cards
        gsap.from('.case-card', {
            scrollTrigger: {
                trigger: '.cases-grid',
                start: 'top 80%',
            },
            duration: 0.6,
            opacity: 0,
            scale: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
        })

        // Testimonials
        gsap.from('.testimonial-card', {
            scrollTrigger: {
                trigger: '.testimonials-slider',
                start: 'top 80%',
            },
            duration: 0.6,
            opacity: 0,
            y: 50,
            stagger: 0.15,
            ease: 'power3.out',
        })

        // Pricing cards
        gsap.from('.pricing-card', {
            scrollTrigger: {
                trigger: '.pricing-grid',
                start: 'top 80%',
            },
            duration: 0.6,
            opacity: 0,
            y: 50,
            stagger: 0.15,
            ease: 'power3.out',
        })

        // FAQ items
        gsap.from('.faq-item', {
            scrollTrigger: {
                trigger: '.faq-list',
                start: 'top 80%',
            },
            duration: 0.5,
            opacity: 0,
            x: -30,
            stagger: 0.1,
            ease: 'power3.out',
        })

        // CTA section
        const ctaContent = document.querySelector('.cta-content')
        if (ctaContent) {
            gsap.from(ctaContent, {
                scrollTrigger: {
                    trigger: '.cta',
                    start: 'top 70%',
                },
                duration: 0.8,
                opacity: 0,
                y: 50,
                ease: 'power3.out',
            })
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
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])
}

export default useScrollAnimation
