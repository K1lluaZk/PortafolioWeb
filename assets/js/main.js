
document.addEventListener('DOMContentLoaded', () => {
    
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

    const elementosAAnimar = document.querySelectorAll('.columna, .proyecto, .seccion-titulo, .rectangulo');
    
    elementosAAnimar.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)";
        revealOnScroll.observe(el);
    });


    const hero = document.querySelector('.hero');
    const heroImage = document.querySelector('.hero-imagen-desarrollador');

    if (hero && heroImage && window.innerWidth > 768) {
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

    const navLinks = document.querySelectorAll('.nav-link');
    const menuColapsable = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuColapsable.classList.contains('show')) {
                new bootstrap.Collapse(menuColapsable).hide();
            }
        });
    });

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