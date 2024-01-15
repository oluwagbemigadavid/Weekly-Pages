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

const selectClass = (index) => {

    document.querySelectorAll('.class-btn').forEach((cta, i) => {
        if(i === index){
            cta.classList.add('active-class')
        } else {
            cta.classList.remove('active-class')
        }
    })

    const classes = document.querySelector('.class-contents')
    
    switch(index) {
        case 0: 
            classes.style.marginLeft = '0%'
        break;

        case 1: 
            classes.style.marginLeft = '-100%'
        break;

        case 2: 
            classes.style.marginLeft = '-200%'
        break;
        
        case 3: 
            classes.style.marginLeft = '-300%'
        break;
        
        case 4: 
            classes.style.marginLeft = '-400%'
        break;
        
        default: 
        classes.style.marginLeft = '-100%'
        break;

    }
}


//register scrollTrigger 
gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
