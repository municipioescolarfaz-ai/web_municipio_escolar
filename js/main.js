// CARRUSEL DE IMÁGENES HERO
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Cambiar imagen cada 5 segundos
setInterval(nextSlide, 3000);

// MENU MOBILE
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// CERRAR MENU AL HACER CLICK EN LINK
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// BOTÓN SUBIR AL INICIO
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ✅ EMAILJS - SOLO AQUÍ LA LÓGICA
(function() {
    // ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ←
    // REEMPLAZA CON TUS CLAVES DE EMAILJS
    const SERVICE_ID = 'service_6llv7kh';        // service_abc123
    const TEMPLATE_ID = 'template_yuw01me';      // template_xyz789
    const PUBLIC_KEY = 'c7c51hL2EOBEYL2JS';        // user_def456
    // ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ←
    
    emailjs.init(PUBLIC_KEY);
    
    // Manejar formulario
    const form = document.getElementById('ieezela-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 1. Botón loading
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Enviando...';
            submitBtn.disabled = true;
            
            // 2. Enviar EmailJS
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, this)
                .then(function(response) {
                    console.log('✅ ÉXITO!', response.status, response.text);
                    alert('🎉 ¡Mensaje enviado correctamente!\nTe contactaremos en 24 horas.');
                    form.reset();
                }, function(error) {
                    console.error('❌ ERROR:', error);
                    alert('😔 Error al enviar. Revisa tu conexión e inténtalo de nuevo.');
                })
                .finally(function() {
                    // 3. Restaurar botón
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
    
    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
})();