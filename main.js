const menuBtn = document.querySelector ('.menu__btn');
const  menu = document.querySelector ('.hero__aside');


menuBtn.addEventListener ('click' , () => {
    menu.classList.toggle('hero__aside--active');
});