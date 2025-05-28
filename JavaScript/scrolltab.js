// Função para verificar quando a seção "ferramentas" entra na tela
function checkVisibility() {
    const ferramentas = document.getElementById('ferramentas'); // Corrigido o seletor
    const ferramentasPosition = ferramentas.getBoundingClientRect(); // Posição da seção na tela

    // Verifica se a seção "ferramentas" está visível
    if (ferramentasPosition.top <= window.innerHeight && ferramentasPosition.bottom >= 0) {
        ferramentas.classList.add('visible'); // Adiciona a classe para animação
    } else {
        ferramentas.classList.remove('visible'); // Remove a classe se a seção não estiver visível
    }
}

// Chama a função de verificação no evento de rolagem
window.addEventListener('scroll', checkVisibility);

// Verifica se a seção já está visível quando a página carrega
document.addEventListener('DOMContentLoaded', checkVisibility);

