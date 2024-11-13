const cabecalho = document.querySelector('.cabecalho');
const paginas = document.querySelector('h3')
const menu = document.querySelector('.menu');
const menuEsconder = document.querySelector('.menuEsconder')

cabecalho.addEventListener('mouseenter', () => {
    menu.style.display = 'grid'
    menuEsconder.style.display = 'none'
    console.log("Entrou")
});

cabecalho.addEventListener('mouseleave', () => {
    menu.style.display = 'none'
    menuEsconder.style.display = 'block'
});
