let lastScrollY = 0
let visible = false;
const nav = document.querySelector('.nav')
window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY
    if(currentScrollY > lastScrollY) {
        nav.style.opacity =  0
        nav.style.pointerEvents =  'none'
    } else {
        nav.style.opacity = 1
        nav.style.pointerEvents =  'all'
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
train.appendChild(trainRow1)
train.appendChild(trainRow2)
let trainEl = []

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

const Atrain = document.querySelectorAll('.train')

gsap.from(Atrain, {
    scrollTrigger: {
        trigger: '.train',
        start: 'top 80%',
        end: 'top 0%',
        scrub: true,
    },
    opacity: 0,
    stagger: 0.1,
    x: 100,
    y: 100
})

const yoga = [
    '../assets/four/yoga/conscious-design-r6Oz7d4wl3o-unsplash.jpg',
    '../assets/four/yoga/carl-barcelo-nqUHQkuVj3c-unsplash.jpg',
    '../assets/four/yoga/conscious-design-893qZckG6I4-unsplash.jpg',
    '../assets/four/yoga/dylan-gillis-YJdCZba0TYE-unsplash.jpg',
    '../assets/four/yoga/eneko-urunuela-I2YSmEUAgDY-unsplash.jpg',
    '../assets/four/yoga/sonnie-hiles-rX8gBeg2WM0-unsplash.jpg',
]
function generateRandomValues() {
    const min = window.innerWidth < 700 ? 45 : 15;
    const max = window.innerWidth < 700 ? 45 : 75;
    const targetSum = 200;
  
    // Generate the first three values
    let values = [];
    let sumFirstThree = 0;
  
    for (let i = 0; i < 3; i++) {
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      values.push(randomValue);
      sumFirstThree += randomValue;
    }
  
    // Generate the last three values, ensuring the total sum is at least 200
    while (values.length < 6 || sumFirstThree + values.reduce((sum, value) => sum + value, 0) < targetSum) {
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      values.push(randomValue);
    }
  
    return values;
  }
  
  const values = generateRandomValues();


const renderYoga = document.querySelector('.more-img');

yoga.forEach((yoga, i) => {
    const cont = document.createElement('div');
    const img = document.createElement('img');
    if (window.innerWidth < 700){
        if( i ===  Math.floor(Math.random() * 7)) cont.classList.add('insta');
    } else {
        if( i === 1) cont.classList.add('insta');
    }
    cont.classList.add('img-cont', 'yoga-img')
    cont.style.width = values[i] + '%';
    img.style.width = '100%'
    img.src = yoga;
    cont.appendChild(img);
    renderYoga.appendChild(cont);
})

const yogaCont = document.querySelectorAll('.yoga-img')

yogaCont.forEach((element) => {
    gsap.to(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 70%',
            end: 'top 30%',
            scrub: true,
        },
        width: Math.floor(Math.random() * (75 - 15 + 1)) + 15 + '%',
    });
});


//register scrollTrigger 
gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const aboutCards = document.querySelectorAll('.about-card')

if (window.innerWidth > 700 ) {

    gsap.fromTo(aboutCards, {
        scrollTrigger: {
            trigger: '.about-card',
            start: 'top 90%',
            end: 'top 20%',
            scrub: true,
        },
        x: 500,
        y: 100,
        scale: 0.8,
    }, {
        scrollTrigger: {
            trigger: '.about-card',
            start: 'top 90%',
            end: 'top 20%',
            scrub: true,
        },
        x: -900,
        y: -50,
        scale: 1,
    });
}


const classes = [...document.querySelectorAll('.class-bg')]
let imgElement = []
classes.forEach((clas, i) => {
     imgElement.push(clas.querySelector('img'));
})

gsap.fromTo(imgElement, {
    opacity: 0.3,
    scale: 3,
    y: 100,
},{
    scrollTrigger: {
        trigger: '.class-bg',
        start: 'top 90%',
        end: 'top 0%',
        scrub: true,
    },
    opacity: 1,
    scale: 1,
    y: -50,
})


const schedule = [
    {
        id: 'title',
        elements: [
            {
                title: 'Day/Time'
            },
            {
                title: 'Mon.',
                body: '03.01'
            },
            {
                title: 'Tue.',
                body: '03.02'
            },
            {
                title: 'Wed.',
                body: '03.03'
            },
            {
                title: 'Thus.',
                body: '03.04'
            },
            {
                title: 'Fri.',
                body: '03.05'
            },
            {
                title: 'Sat.',
                body: '03.06'
            },
        ]
    },
    {
        id: 'body',
        elements: [
            {
                row: [
                    {
                        Time: '07:30 am',
                        day: [ 
                            [
                                {
                                    title: 'Stretchings',
                                    color: 'purple',
                                    time: '07:30 - 08:50'
                                },
                            ],
                            [
                                {
                                    title: 'For pregnant',
                                    color: 'yellow',
                                    time: '07:30 - 08:50'
                                },
                                {
                                    title: 'Healthy back',
                                    color: 'blue',
                                    time: '07:30 - 08:50'
                                },
                            ], 
                            [
                                {
                                    title: '',
                                },
                            ],
                            [
                                {
                                    title: 'Fly yoga',
                                    color: 'green',
                                    time: '07:30 - 08:50'
                                },
                            ],
                            [
                                {
                                    title: '',
                                },
                            ],
                            [
                                {
                                    title: 'stretching',
                                    color: 'purple',
                                    time: '07:30 - 08:50'
                                },
                            ],
                            /* {
                                three: [
                                ],
                            },
                            {
                                four: [
                                    {
                                        title: 'Fly yoga',
                                        color: 'green',
                                        time: '07:30 - 08:50'
                                    },
                                ],
                            },
                            {
                                five: [
                                ],
                            },
                            {
                                six: [
                                    {
                                        title: 'stretching',
                                        color: 'purple',
                                        time: '07:30 - 08:50'
                                    },
                                ],
                            }, */
                        ]
                    },
                    {
                        Time: '07:30 am',
                        day: [ 
                            [
                                {
                                    title: 'Stretchings',
                                    color: 'purple',
                                    time: '07:30 - 08:50'
                                },
                            ],
                            [
                                {
                                    title: 'For pregnant',
                                    color: 'yellow',
                                    time: '07:30 - 08:50'
                                },
                                {
                                    title: 'Healthy back',
                                    color: 'blue',
                                    time: '07:30 - 08:50'
                                },
                            ], 
                            [
                                {
                                    title: '',
                                },
                            ],
                            [
                                {
                                    title: 'Fly yoga',
                                    color: 'green',
                                    time: '07:30 - 08:50'
                                },
                            ],
                            [
                                {
                                    title: '',
                                },
                            ],
                            [
                                {
                                    title: 'stretching',
                                    color: 'purple',
                                    time: '07:30 - 08:50'
                                },
                            ],
                            /* {
                                three: [
                                ],
                            },
                            {
                                four: [
                                    {
                                        title: 'Fly yoga',
                                        color: 'green',
                                        time: '07:30 - 08:50'
                                    },
                                ],
                            },
                            {
                                five: [
                                ],
                            },
                            {
                                six: [
                                    {
                                        title: 'stretching',
                                        color: 'purple',
                                        time: '07:30 - 08:50'
                                    },
                                ],
                            }, */
                        ]
                    },
                ]
            }
        ]
    }
]

const renderCalandar = document.querySelector('.calandar-cont')

schedule.forEach((row, i) => {
    const roww = document.createElement('div')
    if (row.id === 'title') {
        roww.classList.add('calandar-header')
        row.elements.forEach((elem, i) => {
            const roow = document.createElement('div')
            const title = document.createElement('p')
            const body = document.createElement('p')
            roow.classList.add('element')
            title.classList.add('element-title')
            body.classList.add('element-body', 'elem-h1')

            title.textContent = elem?.title
            body.textContent = elem?.body
            roow.appendChild(title)
            roow.appendChild(body)
            roww.appendChild(roow)
        })
    } else {
        roww.classList.add('calandar-contents')
        row.elements.forEach((elem, i) => {

            elem.row.forEach((item) => {
                const roow = document.createElement('div')
                roow.classList.add('calandar-row')
                const title = document.createElement('p')
                title.classList.add('element-title')
                const ite = document.createElement('div')
                ite.classList.add('calandar-item')
                ite.classList.add(item.Time ? 'calandar-time' : '')
                
                title.textContent = item.Time
                
                ite.appendChild(title)
                roow.appendChild(ite)

                roww.appendChild(roow)

                item.day.forEach((prog, i) => {
                    for (let i = 0; i < prog.length; i++) {
                        const ite2 = document.createElement('div')
                        ite2.classList.add('calandar-item')
                        ite2.classList.add(prog[i]?.color && `calandar-${prog[i]?.color}`)
                        const pT = document.createElement('h5')
                        const pB = document.createElement('p')
                        pT.textContent = prog[i]?.title
                        pB.textContent = prog[i]?.time
                        ite2.appendChild(pT)
                        ite2.appendChild(pB)
                        roow.appendChild(ite2)
                    }

                    roww.appendChild(roow)
                })

            })
        })
    }
    renderCalandar.appendChild(roww)
})
