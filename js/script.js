// Ativar links do menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink (link) {
    const url = window.location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

// Ativar itens do orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametros);
    if(elemento) elemento.checked = true;
}

parametros.forEach(ativarProduto)


// Galeria de Bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagem img');
const galeriaContainer = document.querySelector('.bicicleta-imagem');

console.log(galeria, galeriaContainer);