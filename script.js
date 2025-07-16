document.addEventListener('DOMContentLoaded', function () {
    // --- Gestion du Menu de Navigation ---
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    if (hamburger) {
        hamburger.addEventListener('click', function (event) {
            event.stopPropagation();
            navLinks.classList.toggle('active');
        });
    }

    dropdowns.forEach(function(dropdown) {
        const button = dropdown.querySelector('.dropbtn');
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            
            let isActive = dropdown.classList.contains('active');
            
            // Ferme tous les menus
            dropdowns.forEach(function(otherDropdown) {
                otherDropdown.classList.remove('active');
                otherDropdown.querySelector('.dropdown-content').classList.remove('show');
            });

            // Ouvre le menu cliqué s'il était fermé
            if (!isActive) {
                dropdown.classList.add('active');
                dropdown.querySelector('.dropdown-content').classList.toggle('show');
            }
        });
    });

    document.addEventListener('click', function() {
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('active');
            dropdown.querySelector('.dropdown-content').classList.remove('show');
        });
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    // --- Initialisation du Slider de Témoignages ---
    const swiper = new Swiper('.testimonials-slider', {
        // Paramètres
        loop: true,
        grabCursor: true,
        spaceBetween: 30, // Espace entre les cartes
        
        // Autoplay toutes les 2 secondes
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        
        // Responsive breakpoints
        breakpoints: {
            // quand la largeur d'écran est >= 0px
            0: {
              slidesPerView: 1,
            },
            // quand la largeur d'écran est >= 768px
            768: {
              slidesPerView: 2,
            },
            // quand la largeur d'écran est >= 992px
            992: {
              slidesPerView: 3,
            }
        }
    });
    
    // --- Initialisation des animations au défilement ---
    AOS.init({
        duration: 800,
        once: true,
    });
});
