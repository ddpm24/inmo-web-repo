// JavaScript para el menú desplegable en dispositivos móviles
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.navbar ul');

menuToggle.addEventListener('click', () => {
navList.classList.toggle('open');
});