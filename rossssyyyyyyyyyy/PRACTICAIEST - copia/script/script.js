const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');
const dropdowns = document.querySelectorAll('.navbar ul li.dropdown');

// Abrir/Cerrar menú móvil
mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('is-active');
});

// Activar/Desactivar submenús con clic en móvil
dropdowns.forEach(dropdown => {
    const link = dropdown.querySelector('a');

    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault(); // Evita navegación al hacer clic
            dropdown.classList.toggle('active'); // Alterna el submenú
        }
    });
});

/* ============ SLIDER AUTOMÁTICO ============ */
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(showNextSlide, 5000); // cada 5 segundos



// PAGINACION


