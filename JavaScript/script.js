// Seleciona os elementos necessários
const container = document.getElementById('container');

// Botões de alternância
const toggleButtons = document.querySelectorAll('.toggle-panel button');

// Função para alternar os formulários
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        container.classList.toggle('active');
    });
});

// Adiciona funcionalidades específicas, se necessário
const formSignUp = document.querySelector('.sign-up form');
const formSignIn = document.querySelector('.sign-in form');

// Exemplo de submissão de formulários
formSignUp.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cadastro Completo!');
});

formSignIn.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login Completo!');
});
