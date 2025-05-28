document.addEventListener('DOMContentLoaded', () => {
    const accordionLinks = document.querySelectorAll('.accordion-link');
    const tabContents = document.querySelectorAll('.tab-content');

    accordionLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Remove a classe "active" de todos os links
            accordionLinks.forEach(item => item.classList.remove('active'));
            
            // Adiciona a classe "active" ao link clicado
            link.classList.add('active');
            
            // Oculta todas as abas de conteúdo com animação
            tabContents.forEach(content => {
                if (content.classList.contains('active')) {
                    content.classList.remove('active');
                    content.style.opacity = '1';
                    
                    // Adiciona animação de desaparecimento
                    setTimeout(() => {
                        content.style.display = 'none';
                        content.style.opacity = '0';
                    }, 300); // Duração da animação
                }
            });

            // Mostra o conteúdo correspondente ao link clicado com animação
            const tabId = link.getAttribute('data-tab');
            const activeTab = document.getElementById(tabId);
            if (activeTab) {
                setTimeout(() => {
                    activeTab.style.display = 'block';
                    activeTab.style.opacity = '0';
                    
                    // Adiciona animação de aparição
                    setTimeout(() => {
                        activeTab.style.opacity = '1';
                        activeTab.classList.add('active');
                    }, 50);
                }, 300); // Aguarda o encerramento da animação de desaparecimento
            }
        });
    });
});
