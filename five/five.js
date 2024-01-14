
document.querySelector('.hamburger').addEventListener('click', () => {
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
        markers: false
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
    },
    opacity: 0,
    stagger: 2,
    x: -100
})

cards.forEach(image => {
    gsap.from(image, {
        scrollTrigger: {
            trigger: image,
            start: 'top 90%',
            end: 'top 70%',
            scrub: true,
        },
        opacity: 0,
        stagger: 0.1,
    })

    gsap.from(image, {
        scrollTrigger: {
            trigger: image,
            start: 'top 100%',
            end: 'top -10%',
            scrub: true,
        },
        stagger: 0.1,
        y: 100,
    })
})
gsap.from(save, {
    scrollTrigger: {
        trigger: save,
        start: 'top 60%',
        end: 'top 40%',
        scrub: true,
    },
    opacity: 0,
    stagger: 0.1,
    x: 200
})