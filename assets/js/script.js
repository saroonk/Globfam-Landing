// Custom Scripts for Globfam Landing Page

document.addEventListener('DOMContentLoaded', function () {
    console.log('Globfam Landing Page initialized');

    // Future interactivity can go here

    // Sticky CTA Logic
    const stickyCta = document.getElementById('sticky-cta');
    const heroSection = document.querySelector('.hero-section');

    if (stickyCta && heroSection) {
        window.addEventListener('scroll', function () {
            const heroHeight = heroSection.offsetHeight;
            const scrollPosition = window.scrollY;

            if (scrollPosition > heroHeight) {
                stickyCta.classList.add('visible');
            } else {
                stickyCta.classList.remove('visible');
            }
        });
    }
});
