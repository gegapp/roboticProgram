document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Gère l'ouverture/fermeture du menu mobile
    if (hamburger) {
        hamburger.addEventListener('click', function (event) {
            event.stopPropagation();
            navLinks.classList.toggle('active');
        });
    }

    // Gère les clics sur les boutons des menus déroulants
    dropdowns.forEach(function(dropdown) {
        const button = dropdown.querySelector('.dropbtn');
        button.addEventListener('click', function(event) {
            event.stopPropagation();
            
            // Ferme les autres menus
            dropdowns.forEach(function(otherDropdown) {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                    otherDropdown.querySelector('.dropdown-content').classList.remove('show');
                }
            });

            // Ouvre/Ferme le menu cliqué
            dropdown.classList.toggle('active');
            const content = dropdown.querySelector('.dropdown-content');
            content.classList.toggle('show');
        });
    });

    // Ferme tous les menus si on clique n'importe où sur la page
    document.addEventListener('click', function() {
        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove('active');
            dropdown.querySelector('.dropdown-content').classList.remove('show');
        });
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});