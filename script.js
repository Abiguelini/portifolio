// Seleciona todos os cartões da div de projetos
const cartoes = document.querySelectorAll('.conteudo');

// Cria o observador
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Se o cartão estiver visível na tela
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visivel');
        }
    });
}, { 
    threshold: 0.1 // Dispara quando 10% do cartão aparece
});

// Pede ao observador para vigiar cada cartão
cartoes.forEach((cartao) => {
    observador.observe(cartao);
});