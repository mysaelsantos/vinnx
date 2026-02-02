/* ========================================
   VINNX Landing Page - Main JavaScript
   GSAP Animations & Interactivity
   ======================================== */

// Wait for DOM
document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize all modules
    initCustomCursor();
    initNavbar();
    initHeroAnimations();
    initLogo3D();
    initScrollAnimations();
    initHorizontalScroll();
    initCounters();
    initFAQ();
    initModal();
    initParticles();
    initFormHandling();
    initSmoothScroll();
});

/* Custom Cursor */
function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');
    
    if (!cursor || !follower) return;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // Cursor follows mouse directly
        cursorX += (mouseX - cursorX) * 0.2;
        cursorY += (mouseY - cursorY) * 0.2;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        // Follower has more lag
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        follower.style.left = followerX + 'px';
        follower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects on interactive elements
    const hoverTargets = document.querySelectorAll('a, button, .service-card, .case-card, .pricing-card');
    hoverTargets.forEach(target => {
        target.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        target.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

/* Navbar Scroll Effect */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
        });
    }
}

/* Hero Animations */
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.from('.hero-logo-3d', {
        duration: 1.2,
        scale: 0,
        rotation: -180,
        opacity: 0,
    })
    .to('.title-line', {
        duration: 0.8,
        opacity: 1,
        y: 0,
        stagger: 0.2,
    }, '-=0.6')
    .from('.hero-subtitle', {
        duration: 0.6,
        opacity: 0,
        y: 30,
    }, '-=0.3')
    .from('.hero-tagline', {
        duration: 0.6,
        opacity: 0,
        y: 30,
    }, '-=0.3')
    .from('.hero-cta .btn', {
        duration: 0.6,
        opacity: 0,
        y: 30,
        stagger: 0.15,
    }, '-=0.2');
}

/* 3D Logo Interactive Effect */
function initLogo3D() {
    const logoContainer = document.getElementById('hero-logo-3d');
    const logo = logoContainer?.querySelector('.logo-3d');
    
    if (!logoContainer || !logo) return;
    
    logoContainer.addEventListener('mousemove', (e) => {
        const rect = logoContainer.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateX = (e.clientY - centerY) / 10;
        const rotateY = (e.clientX - centerX) / 10;
        
        gsap.to(logo, {
            duration: 0.3,
            rotateX: -rotateX,
            rotateY: rotateY,
            ease: 'power2.out',
        });
    });
    
    logoContainer.addEventListener('mouseleave', () => {
        gsap.to(logo, {
            duration: 0.6,
            rotateX: 0,
            rotateY: 0,
            ease: 'elastic.out(1, 0.5)',
        });
    });
}

/* Scroll Animations */
function initScrollAnimations() {
    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
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
        });
    });
    
    // About section
    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
        },
        duration: 0.8,
        opacity: 0,
        x: -50,
        ease: 'power3.out',
    });
    
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
    });
    
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
    });
    
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
    });
    
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
    });
    
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
    });
    
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
    });
    
    // CTA section
    gsap.from('.cta-content', {
        scrollTrigger: {
            trigger: '.cta',
            start: 'top 70%',
        },
        duration: 0.8,
        opacity: 0,
        y: 50,
        ease: 'power3.out',
    });
}

/* Horizontal Scroll (Features Section) */
function initHorizontalScroll() {
    const featuresTrack = document.getElementById('features-track');
    if (!featuresTrack) return;
    
    const items = featuresTrack.querySelectorAll('.feature-item');
    const totalWidth = items.length * 380; // item width + gap
    
    gsap.to(featuresTrack, {
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
    });
}

/* Animated Counters */
function initCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 85%',
            onEnter: () => {
                gsap.to(counter, {
                    duration: 2,
                    innerHTML: target,
                    snap: { innerHTML: 1 },
                    ease: 'power2.out',
                });
            },
            once: true,
        });
    });
}

/* FAQ Accordion */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(other => {
                if (other !== item && other.classList.contains('active')) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

/* Modal */
function initModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = modal?.querySelector('.modal-close');
    const overlay = modal?.querySelector('.modal-overlay');
    
    if (!modal) return;
    
    // Open modal handlers
    document.querySelectorAll('.case-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const caseCard = btn.closest('.case-card');
            const caseNum = caseCard.getAttribute('data-case');
            
            modalBody.innerHTML = `
                <h2 style="margin-bottom: 20px;">Case de Sucesso #${caseNum}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    Este é um exemplo de case de sucesso da VINNX. Implementamos soluções 
                    inovadoras de IA que transformaram o negócio do nosso cliente.
                </p>
                <h3 style="margin-bottom: 15px; color: var(--primary);">Resultados</h3>
                <ul style="color: var(--text-secondary); margin-left: 20px;">
                    <li style="margin-bottom: 10px;">Aumento de 340% nas conversões</li>
                    <li style="margin-bottom: 10px;">Redução de 50% no tempo de resposta</li>
                    <li style="margin-bottom: 10px;">ROI de 800% em 6 meses</li>
                </ul>
                <a href="#contact" class="btn btn-primary" style="margin-top: 30px;" onclick="document.getElementById('modal').classList.remove('active');">
                    Quero resultados assim
                </a>
            `;
            
            modal.classList.add('active');
        });
    });
    
    // Service card modals
    document.querySelectorAll('.service-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const card = link.closest('.service-card');
            const title = card.querySelector('.service-title').textContent;
            const desc = card.querySelector('.service-desc').textContent;
            
            modalBody.innerHTML = `
                <h2 style="margin-bottom: 20px;">${title}</h2>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">${desc}</p>
                <h3 style="margin-bottom: 15px; color: var(--primary);">O que inclui:</h3>
                <ul style="color: var(--text-secondary); margin-left: 20px;">
                    <li style="margin-bottom: 10px;">Consultoria especializada</li>
                    <li style="margin-bottom: 10px;">Implementação completa</li>
                    <li style="margin-bottom: 10px;">Treinamento da equipe</li>
                    <li style="margin-bottom: 10px;">Suporte contínuo</li>
                </ul>
                <a href="#contact" class="btn btn-primary" style="margin-top: 30px;" onclick="document.getElementById('modal').classList.remove('active');">
                    Solicitar Proposta
                </a>
            `;
            
            modal.classList.add('active');
        });
    });
    
    // Close modal
    function closeModal() {
        modal.classList.remove('active');
    }
    
    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/* Particles */
function initParticles() {
    const heroParticles = document.getElementById('hero-particles');
    const ctaParticles = document.getElementById('cta-particles');
    
    function createParticles(container, count = 50) {
        if (!container) return;
        
        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: ${Math.random() * 4 + 1}px;
                height: ${Math.random() * 4 + 1}px;
                background: rgba(46, 204, 113, ${Math.random() * 0.5 + 0.1});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
                animation-delay: -${Math.random() * 10}s;
            `;
            container.appendChild(particle);
        }
    }
    
    // Add particle animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatParticle {
            0%, 100% {
                transform: translate(0, 0) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 200}px, -200px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    createParticles(heroParticles, 40);
    createParticles(ctaParticles, 30);
}

/* Form Handling */
function initFormHandling() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Animate button
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        
        btn.textContent = 'Enviando...';
        btn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            btn.textContent = 'Mensagem Enviada! ✓';
            btn.style.background = 'var(--primary)';
            
            // Reset form
            form.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = '';
            }, 3000);
        }, 1500);
    });
}

/* Smooth Scroll */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* Parallax Effect on Scroll */
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    
    // Hero parallax
    const heroLogo = document.querySelector('.hero-logo-3d');
    if (heroLogo && scrolled < window.innerHeight) {
        heroLogo.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

/* Window Resize Handler */
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
