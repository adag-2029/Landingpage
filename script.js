// Function to change navbar background color when scrolled
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Adding event listeners to nav links for hover effect (optional, handled by CSS)
var navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#ff6347';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = 'white';
    });
});
