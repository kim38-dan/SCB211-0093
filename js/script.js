document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile menu toggle
    const header = document.querySelector('header');
    if (header) {
        const mobileMenuToggle = document.createElement('div');
        mobileMenuToggle.className = 'mobile-menu-toggle';
        mobileMenuToggle.innerHTML = '☰';
        mobileMenuToggle.setAttribute('aria-label', 'Toggle menu'); // Accessibility improvement
        header.appendChild(mobileMenuToggle);

        mobileMenuToggle.addEventListener('click', function () {
            const nav = document.querySelector('nav');
            if (nav) {
                nav.classList.toggle('active');
                this.setAttribute('aria-expanded', nav.classList.contains('active'));
            }
        });
    }

    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (window.location.href.includes(linkPage)) {
            link.classList.add('active');
        }
    });

    // Image loading animation with error handling
    document.querySelectorAll('img').forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease-in-out';

        img.addEventListener('load', function () {
            img.style.opacity = '1';
        });

        img.addEventListener('error', function () {
            console.warn(`Image failed to load: ${img.src}`);
            img.style.opacity = '1'; // Ensures visibility even if it fails
            img.src = 'fallback.jpg'; // Optional: Replace with a default image
        });
    });
});
