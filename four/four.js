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

const trainers = [
    {
        src: '../assets/four/instructor/benjamin-child-rOn57CBgyMo-unsplash.jpg',
        name: 'Alisa Black',
        tag: 'Fly-yoga trainer'
    },
    {
        src: '../assets/four/instructor/brian-lawson-6pVaNHbH4fU-unsplash.jpg',
        name: 'Michelle Yang',
        tag: 'Fly-yoga and relax trainer'
    },
    {
        src: '../assets/four/instructor/dollar-gill-QoW2Sdlh9Nk-unsplash.jpg',
        name: 'Robert Fox',
        tag: 'Stretching trainer'
    },
    {
        src: '../assets/four/instructor/indian-yogi-yogi-madhav-8Nt8AR38T0I-unsplash.jpg',
        name: 'Sapa London',
        tag: 'Fly-yoga trainer'
    },
    {
        src: '../assets/four/instructor/isabell-winter-lzYZEDJ8fbo-unsplash.jpg',
        name: 'Hiatus Mark',
        tag: 'Fly-yoga and relax trainer'
    },
    {
        src: '../assets/four/instructor/le-minh-phuong-niH7Z81S44g-unsplash.jpg',
        name: 'Sandra Bliss',
        tag: 'Women pratices'
    },
    {
        src: '../assets/four/instructor/madison-lavern-4gcqRf3-f2I-unsplash.jpg',
        name: 'Luke Skye',
        tag: 'Pregnant yoga trainer'
    },
    {
        src: '../assets/four/instructor/mediamodifier-EXtnZW9NbqM-unsplash.jpg',
        name: 'Lord Vain',
        tag: 'Stretching trainer, helathy back'
    },
]
const train = document.querySelector('.trainers-cont')
const trainRow1 =  document.createElement('div')
const trainRow2 =  document.createElement('div')
trainRow1.classList.add('trainers-row','row1')
trainRow2.classList.add('trainers-row','row2')
train.appendChild(trainRow1)
train.appendChild(trainRow2)
trainers.forEach( ((bro, i) => {

    const imgCont = document.createElement('div')
    imgCont.classList.add('img-cont')
    const img = document.createElement('img')
    img.src = bro.src

    const h5 = document.createElement('h5')
    h5.textContent = bro.name
    
    const p = document.createElement('p')
    p.textContent = bro.tag

    imgCont.appendChild(img)

    const train = document.createElement('div')
    train.classList.add('train', `train-${i}`)

    train.appendChild(imgCont)
    train.appendChild(h5)
    train.appendChild(p)
    trainRow1.appendChild(train)

}))

const yoga = [
    '../assets/four/yoga/conscious-design-r6Oz7d4wl3o-unsplash.jpg',
    '../assets/four/yoga/carl-barcelo-nqUHQkuVj3c-unsplash.jpg',
    '../assets/four/yoga/conscious-design-893qZckG6I4-unsplash.jpg',
    '../assets/four/yoga/dylan-gillis-YJdCZba0TYE-unsplash.jpg',
    '../assets/four/yoga/eneko-urunuela-I2YSmEUAgDY-unsplash.jpg',
    '../assets/four/yoga/sonnie-hiles-rX8gBeg2WM0-unsplash.jpg',
]


//register scrollTrigger 
gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
