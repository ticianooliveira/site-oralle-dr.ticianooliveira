document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
}

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('navLinks');
menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
    navLinks.classList.toggle('is-open', !isOpen);
});
navLinks.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menu');
        navLinks.classList.remove('is-open');
    }
});

const lifestyleVideo = document.querySelector('.lifestyle-video');
if ('IntersectionObserver' in window && lifestyleVideo) {
    const videoObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].isIntersecting) {
            const source = lifestyleVideo.querySelector('source[data-src]');
            source.src = source.dataset.src;
            source.removeAttribute('data-src');
            lifestyleVideo.load();
            lifestyleVideo.play().catch(() => {});
            observer.disconnect();
        }
    }, { rootMargin: '300px' });
    videoObserver.observe(lifestyleVideo);
}

const carousel = document.querySelector('.testimonial-carousel');
if (carousel) {
    const viewport = carousel.querySelector('.testimonial-viewport');
    const cards = [...carousel.querySelectorAll('.testimonial-card')];
    const previousButton = carousel.querySelector('.carousel-previous');
    const nextButton = carousel.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.carousel-dots');
    const counter = document.querySelector('.carousel-counter');
    let currentIndex = 0;
    let autoplayTimer;

    cards.forEach((card, index) => {
        card.setAttribute('aria-label', `Depoimento ${index + 1} de ${cards.length}`);
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot';
        dot.setAttribute('aria-label', `Ir para o depoimento ${index + 1}`);
        dot.addEventListener('click', () => goTo(index));
        dotsContainer.appendChild(dot);
    });

    const updateStatus = () => {
        counter.textContent = `Depoimento ${currentIndex + 1} de ${cards.length}`;
        [...dotsContainer.children].forEach((dot, index) => {
            dot.classList.toggle('is-active', index === currentIndex);
            dot.setAttribute('aria-current', index === currentIndex ? 'true' : 'false');
        });
    };

    const goTo = (index, smooth = true) => {
        currentIndex = (index + cards.length) % cards.length;
        viewport.scrollTo({ left: cards[currentIndex].offsetLeft - cards[0].offsetLeft, behavior: smooth ? 'smooth' : 'auto' });
        updateStatus();
    };

    const startAutoplay = () => {
        if (reduceMotion) return;
        window.clearInterval(autoplayTimer);
        autoplayTimer = window.setInterval(() => goTo(currentIndex + 1), 4200);
    };

    previousButton.addEventListener('click', () => { goTo(currentIndex - 1); startAutoplay(); });
    nextButton.addEventListener('click', () => { goTo(currentIndex + 1); startAutoplay(); });
    carousel.addEventListener('mouseenter', () => window.clearInterval(autoplayTimer));
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', () => window.clearInterval(autoplayTimer));
    carousel.addEventListener('focusout', startAutoplay);
    viewport.addEventListener('scrollend', () => {
        const closest = cards.reduce((best, card, index) => {
            const distance = Math.abs((card.offsetLeft - cards[0].offsetLeft) - viewport.scrollLeft);
            return distance < best.distance ? { index, distance } : best;
        }, { index: 0, distance: Infinity });
        currentIndex = closest.index;
        updateStatus();
    });
    window.addEventListener('resize', () => goTo(currentIndex, false));

    updateStatus();
    startAutoplay();
}

document.getElementById('currentYear').textContent = new Date().getFullYear();
