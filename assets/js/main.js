/**
 * main.js - Movimientos y Animaciones de Interacción
 * Desarrollado para el Portafolio de Mario Suero
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. EFECTO DE APARICIÓN AL HACER SCROLL (Reveal Effect)
    // Configuramos el observador para detectar cuándo los elementos entran en pantalla
    const observerOptions = {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Solo anima una vez
            }
        });
    }, observerOptions);

    // Aplicamos el estilo inicial y registramos los elementos a animar
    const elementosAAnimar = document.querySelectorAll('.columna, .proyecto, .seccion-titulo, .rectangulo');
    
    elementosAAnimar.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        revealOnScroll.observe(el);
    });

    // 2. EFECTO PARALLAX SUAVE EN EL HERO
    // El monitor y la foto se mueven ligeramente al mover el mouse
    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-imagen-desarrollador');

    if (hero && window.innerWidth > 768) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) * 0.01;
            const moveY = (clientY - window.innerHeight / 2) * 0.01;
            
            heroImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
        });

        hero.addEventListener('mouseleave', () => {
            heroImage.style.transform = `translate(0, 0) scale(1)`;
        });
    }

    // 3. CIERRE AUTOMÁTICO DEL MENÚ (Bootstrap Fix)
    const navLinks = document.querySelectorAll('.nav-link');
    const menuColapsable = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuColapsable.classList.contains('show')) {
                new bootstrap.Collapse(menuColapsable).hide();
            }
        });
    });

    // 4. SCROLL SUAVE (Smooth Scroll) CON OFFSET
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            const navHeight = document.querySelector('.navbar').offsetHeight;

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. EFECTO DE BRILLO DINÁMICO EN BADGES
    const badges = document.querySelectorAll('.badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseover', () => {
            badge.style.boxShadow = "0 0 15px #00d4ff";
            badge.style.borderColor = "#fff";
        });
        badge.addEventListener('mouseleave', () => {
            badge.style.boxShadow = "none";
            badge.style.borderColor = "#007bff";
        });
    });
});