let lastScrollY = 0
let visible = false;
const nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    if(currentScrollY > lastScrollY) {
        nav.style.opacity =  0
    } else {
        nav.style.opacity = 1
    }
    document.querySelectorAll('.menu').forEach(menu => menu.classList.remove('active'))
    lastScrollY = currentScrollY
})

document.querySelector('.hamburger').addEventListener('click', () => {
    visible = !visible
    document.querySelectorAll('.menu').forEach(menu => menu.classList.toggle('active'))
    document.querySelector('.hamburger').classList.toggle('active')
})


//register scrollTrigger 
gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
