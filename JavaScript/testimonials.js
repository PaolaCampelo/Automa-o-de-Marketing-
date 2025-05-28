// Função para verificar quando a seção Testimonials entra na tela
document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelector(".testimonials");

    // Função para verificar visibilidade da seção Testimonials
    const revealTestimonials = () => {
        const sectionTop = testimonials.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.9; // 80% da altura da tela

        if (sectionTop < triggerPoint) {
            testimonials.classList.add("visible"); // Adiciona a classe para animação
            enableHorizontalScroll(); // Habilita rolagem horizontal
        } else {
            testimonials.classList.remove("visible"); // Remove a classe se não visível
            disableHorizontalScroll(); // Desabilita rolagem horizontal
        }
    };

 
    // Adiciona o evento de rolagem para detectar quando a seção entra na tela
    window.addEventListener("scroll", revealTestimonials);

    // Verifica se a seção já está visível quando a página carrega
    revealTestimonials();
});

  
  