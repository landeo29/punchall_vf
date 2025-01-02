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


document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('#slider .slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? '1' : '0';
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function startTimer() {
        const timer = document.querySelector('.slider-timer');
        timer.style.width = '0';

        setTimeout(() => {
            timer.style.width = '100%';
        }, 0);
    }

    setInterval(() => {
        nextSlide();
        startTimer();
    }, 5000);

    // Mostrar la primera imagen al cargar
    showSlide(currentIndex);
});


//s3

document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
});


//s4

document.addEventListener("DOMContentLoaded", () => {
    const slides2 = document.querySelectorAll('#slider2 .slide2');
    let currentIndex2 = 0;

    function showSlide2(index) {
        slides2.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    setInterval(() => {
        currentIndex2 = (currentIndex2 + 1) % slides2.length;
        showSlide2(currentIndex2);
    }, 4000);

    // Mostrar la primera imagen al cargar
    showSlide2(currentIndex2);
});
