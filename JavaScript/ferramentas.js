// Função para verificar quando a seção "What We Do" entra na tela
function checkVisibility() {
    const section = document.querySelector('.what-we-do'); // Seletor para a seção
    const sectionPosition = section.getBoundingClientRect(); // Posição da seção na tela

    // Verifica se a seção está visível
    if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
        section.classList.add('visible'); // Adiciona a classe para animação
    } else {
        section.classList.remove('visible'); // Remove a classe se não estiver visível
    }
}

// Chama a função de verificação no evento de rolagem
window.addEventListener('scroll', checkVisibility);

// Verifica se a seção já está visível quando a página carrega
document.addEventListener('DOMContentLoaded', checkVisibility);
