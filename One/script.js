const cssVariables = {
    Grey_800: '#434a57',
}

const DarkMode = {
}

 setTimeout(() => {
 }, 1000);
//  document.body.style.setProperty('--bg', cssVariables.Grey_800);
//  document.body.style.setProperty('--bg', 'unset');
// const population = {
//     male: 4,
//     female: 93,
//     others: 10
//   };
  
//   // Iterate through the object
//   for (const key in population) {
//     if (population.hasOwnProperty(key)) {
//       console.log(`${key}: ${population[key]}`);
//     }
//   }

const figures = [
    {
        figure: '820+',
        desc: 'Happy clients'
    },
    {
        figure: '3000+',
        desc: 'Projects completed'
    },
    {
        figure: '50+',
        desc: 'Full time specialists'
    },
    {
        figure: '45+',
        desc: 'Awards won'
    },
]
const renderFigures = document.querySelector('.figures_container');
figures.map((fig, index) => {
    const lv1 = document.createElement('div');
    const lv2 = document.createElement('h5');
    const lv3 = document.createElement('p');

    lv1.classList.add('figure');

    lv2.textContent = fig.figure;

    lv3.textContent = fig.desc;

    lv1.appendChild(lv2);
    lv1.appendChild(lv3);

    renderFigures.appendChild(lv1); 
})

const logo = '<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><path fill="#231F20" d="M63.714,30.516C63.347,29.594,54.448,8,31.999,8S0.651,29.594,0.284,30.516 c-0.379,0.953-0.379,2.016,0,2.969C0.651,34.406,9.55,56,31.999,56s31.348-21.594,31.715-22.516 C64.093,32.531,64.093,31.469,63.714,30.516z M31.999,40c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.417,40,31.999,40z"/></svg>';

const arrowRight = '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const service_cards = [
    {
        icon: logo,
        title:'Advertising communicaitons',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 
    },
    {
        icon: logo,
        title:'Advertising communicaitons',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 
    },
    {
        icon: logo,
        title:'Advertising communicaitons',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 
    },
    {
        icon: logo,
        title:'Advertising communicaitons',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 
    },
    {
        icon: logo,
        title:'Advertising communicaitons',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 
    },
    {
        icon: logo,
        title:'Advertising communicaitons',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', 
    },
]
const renderCards = document.querySelector('.services_cards')
service_cards.forEach((card, index) => {
    const lv1 = document.createElement('div');
    const lv2 = document.createElement('h3');
    const lv3 = document.createElement('p');
    const lv4 = document.createElement('div');
    const lv5 = document.createElement('div');
    lv4.innerHTML = card.icon
    lv5.innerHTML = arrowRight

    lv1.classList.add('service_card');
    lv5.classList.add('service_card_cta')
    lv5.addEventListener('click', () => alert(card.title))

    lv2.textContent = card.title;

    lv3.textContent = card.desc;

    lv1.appendChild(lv4);
    lv1.appendChild(lv2);
    lv1.appendChild(lv3);
    lv1.appendChild(lv5);

    renderCards.appendChild(lv1); 
})

const industires_cards = [
    {
        src: '/assets/hero-img.jpg',
        title: 'Servies',
        bullets: [
            'ID habitasse dui habitant',
            'ID habitasse dui habitant',
            'ID habitasse dui habitant',
        ]
    },
    {
        src: '/assets/hero-img.jpg',
        title: 'Retail',
        bullets: [
            'ID habitasse dui habitant',
            'ID habitasse dui habitant',
            'ID habitasse dui habitant',
        ]
    },
    {
        src: '/assets/hero-img.jpg',
        title: 'Technology',
        bullets: [
            'ID habitasse dui habitant',
            'ID habitasse dui habitant',
            'ID habitasse dui habitant',
        ]
    },
]

const renderIndust = document.querySelector('.services_card1')
industires_cards.forEach((card, index) => {
    const lv1 = document.createElement('div');
    const lv2 = document.createElement('h3');
    const lv3 = document.createElement('ul');
    const lv4 = document.createElement('div');
    const img = document.createElement('img');
    img.src = card.src
    lv4.appendChild(img)

    lv1.classList.add('service_card', 'indust');
    lv4.classList.add('service_card_img');

    lv2.textContent = card.title;

    card.bullets.forEach(bullet => {
        const bulletItem = document.createElement('li');
        bulletItem.textContent = bullet;
        lv3.appendChild(bulletItem);
    });

    lv1.appendChild(lv4);
    lv1.appendChild(lv2);
    lv1.appendChild(lv3);

    renderIndust.appendChild(lv1); 
})

