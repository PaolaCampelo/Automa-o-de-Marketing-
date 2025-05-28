// Aguarda o carregamento completo do conteúdo
document.addEventListener('DOMContentLoaded', function() {
    const locationLink = document.getElementById('location-link');
    
    // Verifica se o link de localização existe
    if (locationLink) {
        locationLink.addEventListener('click', function(event) {
            // Previne o comportamento padrão de navegação
            event.preventDefault();
            
            // Abre o link em uma nova aba
            window.open(locationLink.href, '_blank');
        });
    }
});
