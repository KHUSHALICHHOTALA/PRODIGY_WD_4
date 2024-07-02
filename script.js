document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in, .slide-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});