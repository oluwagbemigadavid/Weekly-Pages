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
    document.querySelector('.menu').classList.remove('active')
    lastScrollY = currentScrollY
})
document.querySelector('.hamburger').addEventListener('click', () => {
    visible = !visible
    console.log(visible)
    document.querySelector('.menu').classList.toggle('active')
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


const logos = document.querySelectorAll('.logos-indivs')
const info = document.querySelectorAll('.info-row')
const cards = document.querySelectorAll('.card-left img');
const save = document.querySelector('.save-text');

gsap.from(logos, {
    scrollTrigger: {
        trigger: '.logos-indivs',
        start: 'top 90%',
        end: 'top 70%',
        scrub: true,
        once: true,
    },
    opacity: 0,
    stagger: 0.1,
    y: 50,
    x: 50,
})
gsap.from(info, {
    scrollTrigger: {
        trigger: '.info-row',
        start: 'top 90%',
        end: 'top 70%',
        scrub: true,
        once: true,
    },
    opacity: 0,
    stagger: .2,
    x: -100
})

cards.forEach(image => {
    gsap.from(image, {
        scrollTrigger: {
            trigger: image,
            start: 'top 90%',
            end: 'top 70%',
            scrub: false,
            once: true,
        },
        opacity: 0,
        stagger: 0.1,
        duration: 1,
    })

    gsap.from(image, {
        scrollTrigger: {
            trigger: image,
            start: 'top 100%',
            end: 'top -10%',
            scrub: true,
        },
        stagger: 0.01,
        scale: 2.5,
    })
})
gsap.from(save, {
    scrollTrigger: {
        trigger: save,
        start: 'top 60%',
        end: 'top 40%',
        scrub: true,
        once: true,
    },
    opacity: 0,
    stagger: 0.1,
    x: 200
})