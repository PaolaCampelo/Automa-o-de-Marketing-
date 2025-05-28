// Seleciona os links da navegação
const navLinks = document.querySelectorAll('.nav-link');

// Função para verificar a posição do scroll
function checkScroll() {
    // Obtém a posição do scroll na página
    const scrollPosition = window.pageYOffset;

    // Seleciona a seção home
    const homeSection = document.getElementById('home');

    // Verifica se o usuário saiu da seção home
    if (scrollPosition > homeSection.offsetHeight) {
        // Se saiu da seção home, muda a cor dos links para preto
        navLinks.forEach(link => {
            link.classList.add('active');
        });
    } else {
        // Se estiver na seção home, os links voltam à cor padrão
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }
}

// Adiciona um evento de rolagem para verificar a posição
window.addEventListener('scroll', checkScroll);

// Executa a função quando a página carrega
document.addEventListener('DOMContentLoaded', checkScroll);
