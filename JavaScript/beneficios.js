// Função para verificar quando a seção de Benefícios entra na tela
function checkVisibility() {
    const beneficios = document.querySelector('.beneficios');  // Seletor para a seção de benefícios
    const beneficiosPosition = beneficios.getBoundingClientRect(); // Posição da seção na tela

    // Verifica se a seção está visível
    if (beneficiosPosition.top <= window.innerHeight && beneficiosPosition.bottom >= 0) {
        beneficios.classList.add('visible'); // Adiciona a classe para animação
    } else {
        beneficios.classList.remove('visible'); // Remove a classe se a seção não estiver visível
    }
}

// Chama a função de verificação no evento de rolagem
window.addEventListener('scroll', checkVisibility);

// Verifica se a seção já está visível quando a página carrega
document.addEventListener('DOMContentLoaded', checkVisibility);
