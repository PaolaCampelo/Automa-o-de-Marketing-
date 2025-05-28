// Função para verificar quando a seção Persona entra na tela
function checkVisibility() {
    const persona = document.getElementById('#persona'); // Seção Persona
    const personaPosition = persona.getBoundingClientRect(); // Posição da seção na tela

    // Verifica se a seção Persona está visível
    if (personaPosition.top <= window.innerHeight && personaPosition.bottom >= 0) {
        persona.classList.add('visible'); // Adiciona a classe para animação
    } else {
        persona.classList.remove('visible'); // Remove a classe se a seção não estiver visível
    }
}

// Chama a função de verificação no evento de rolagem
window.addEventListener('scroll', checkVisibility);

// Verifica se a seção já está visível quando a página carrega
document.addEventListener('DOMContentLoaded', checkVisibility);
