const a = document.querySelector('#a');
const b = document.querySelector('#b');
const c = document.querySelector('#c');
const d = document.querySelector('#d');
const next = document.querySelector('#next');

a.addEventListener('click', () => {
    console.log('entrou');
    a.style.backgroundColor = 'gray'
    b.style.backgroundColor = 'gray'
    c.style.backgroundColor = 'gray'
    d.style.backgroundColor = 'rgb(60, 255, 0)'
    next.style.display = 'block'
});
b.addEventListener('click', () => {
    console.log('entrou');
    a.style.backgroundColor = 'gray'
    b.style.backgroundColor = 'gray'
    c.style.backgroundColor = 'gray'
    d.style.backgroundColor = 'rgb(60, 255, 0)'
    next.style.display = 'block'
});
c.addEventListener('click', () => {
    console.log('entrou');
    a.style.backgroundColor = 'gray'
    b.style.backgroundColor = 'gray'
    c.style.backgroundColor = 'gray'
    d.style.backgroundColor = 'rgb(60, 255, 0)'
    next.style.display = 'block'
});
d.addEventListener('click', () => {
    console.log('entrou');
    a.style.backgroundColor = 'gray'
    b.style.backgroundColor = 'gray'
    c.style.backgroundColor = 'gray'
    d.style.backgroundColor = 'rgb(60, 255, 0)'
    next.style.display = 'block'
});