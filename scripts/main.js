//Mobile Navigation 
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');
const nav = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    close.style.display = 'block';
    nav.classList.add('mobile-nav');
})

close.addEventListener('click', () => {
    close.style.dislay = 'none';
    hamburger.style.display = 'block';
    nav.classList.remove('mobile-nav');
})

window.addEventListener('resize', () => {
    close.style.display = 'none';
    nav.classList.remove('mobile-nav')
    if (window.innerWidth > 880) {
        hamburger.style.display = 'none';
    } else {
        hamburger.style.display = 'block';
    }
})