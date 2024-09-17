let navBar = document.querySelector('.nav');
let navBtn = document.querySelector('.nav-button');

navBtn.addEventListener('click', () => {
    navBar.classList.toggle('nav-show');
});