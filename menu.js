let abrir_menu = document.getElementById('abrir-menu'); 
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

abrir_menu.addEventListener('click', ()=>{
    menu.classList.add('menu-ativo');
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('menu-ativo');
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('menu-ativo');
})