// navbar.js

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle del menú hamburguesa
    menuToggle.addEventListener('click', () => {
        const isActive = navLinks.classList.contains('show');

        // Alternar la clase para mostrar/ocultar con animación
        navLinks.classList.toggle('show', !isActive);
        navLinks.classList.toggle('active', !isActive);
        menuToggle.classList.toggle('open', !isActive);

        // Cerrar el menú si está abierto
        if (isActive) {
            setTimeout(() => {
                navLinks.classList.remove('active');
            }, 500); // Tiempo para la animación de salida
        }
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove('show');
            navLinks.classList.remove('active');
            menuToggle.classList.remove('open');
        }
    });

    console.log('Menú hamburguesa interactivo inicializado.');
});


document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    // Cambiar imagen automáticamente cada 3 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 5000);

    // Hacer los indicadores interactivos
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });
});

console.log(slides);
console.log(indicators);



