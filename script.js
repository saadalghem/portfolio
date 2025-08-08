const menuIcon = document.getElementById('icon_menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

// Ouvrir/Fermer menu au clic sur l'icône
menuIcon.onclick = function() {
    nav.classList.toggle('active');
};

// Fermer menu au clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});
