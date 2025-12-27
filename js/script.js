// Ativar animações ScrollReveal
ScrollReveal().reveal('.reveal', {
    distance: '50px',
    duration: 1200,
    delay: 200,
    origin: 'bottom'
});

// Lógica de Scroll Automático Segura
const track = document.getElementById('testimonialTrack');

function autoScroll() {
    const cardWidth = track.querySelector('.testimonial-card').offsetWidth + 30;
    
    // Calcula se chegou ao fim levando em conta o espaço visível
    if (track.scrollLeft + track.offsetWidth >= track.scrollWidth - 10) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        track.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
}

// Inicia o carrossel automático a cada 4 segundos
let scrollInterval = setInterval(autoScroll, 4000);

// Para o automático se o usuário interagir
track.addEventListener('touchstart', () => clearInterval(scrollInterval));
track.addEventListener('mousedown', () => clearInterval(scrollInterval));