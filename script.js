const header = document.querySelector('.header');
const navList = document.querySelector('.nav-list');
const openMenu = document.querySelector('.open-nav');
const closeMenu = document.querySelector('.close-nav');
const searchBtn = document.querySelector('.search-btn');
const nav = document.querySelector('.nav');
const searchcontainer = document.querySelector('.search-container');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolling');
})

openMenu.addEventListener('click', () =>{
    if(closeMenu.classList.contains('hide-btn')){
        closeMenu.classList.remove('hide-btn');
    }

    openMenu.classList.add('hide-btn');
    navList.classList.add('show-nav');
})

closeMenu.addEventListener('click', () =>{
     if(openMenu.classList.contains('hide-btn')){
        openMenu.classList.remove('hide-btn');
    }

    closeMenu.classList.add('hide-btn');
    navList.classList.remove('show-nav');
})

searchBtn.addEventListener('click', () =>{
    nav.classList.toggle('open-mobile-nav');
    searchcontainer.childNodes[3].style.width = '100%';

    setTimeout(() => {
        nav.classList.remove('open-mobile-nav');
        searchcontainer.childNodes[3].style.width = '0%';
    }, 15000)
})