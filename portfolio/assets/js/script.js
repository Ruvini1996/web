// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animation trigger
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.timeline-item, .skill-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if(elementTop < window.innerHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});
