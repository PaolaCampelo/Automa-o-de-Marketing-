// Mostrar ou esconder o botão "Back to Home"
window.onscroll = function () {
    let button = document.querySelector('.back-to-home');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
};

// Rolagem suave ao clicar no botão
document.querySelector('.back-to-home').addEventListener('click', function (e) {
    e.preventDefault(); // Evita comportamento padrão do link
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola suavemente até o topo
});



