const swiper = new Swiper(".swiper-strip", {
    direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 8,
    loop: true,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 2400,
});

// tombol navigasi
const navButtons = {
    home: document.querySelector('.home'),
    works1: document.querySelector('.works1'),
    profile1: document.querySelector('.profile1'),
    contact1: document.querySelector('.contact1')
};

// section masing-masing
const sections = {
    home: document.querySelector('.portobg'),
    works1: document.querySelector('.frame'),
    profile1: document.querySelector('.myprofile'),
    contact1: document.querySelector('.blackbg')
};

// scroll ke section saat diklik
Object.keys(navButtons).forEach(key => {
    navButtons[key].addEventListener('click', () => {
        sections[key].scrollIntoView({ behavior: 'smooth' });
    });
});

// update active button sesuai scroll
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight/2; // tengah layar
    Object.keys(sections).forEach(key => {
        const sec = sections[key];
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;

        if(scrollPos >= top && scrollPos < bottom){
            // aktifkan button ini
            Object.values(navButtons).forEach(b => b.classList.remove('active-btn'));
            navButtons[key].classList.add('active-btn');
        }
    });
});

const scrollWrap = document.querySelector('.scroll-wrap');

scrollWrap.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollWrap.scrollLeft += e.deltaY;
});