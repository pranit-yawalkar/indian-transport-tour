const menuIcon = document.querySelector(".menu-icon");
const navList = document.querySelector(".nav-list");

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('menuIconClass');
    navList.classList.toggle('menuClass');
})