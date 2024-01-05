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

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active')
    document.querySelector('.hamburger').classList.toggle('active')
})

const logg = 
    '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M8.102 100.914h12.386v30.215H39.82V141H8.102v-40.086zm62.015 33.469h-14.11L54.068 141h-12.66l15.066-40.086H69.98L85.047 141H72.086l-1.969-6.617zm-2.597-8.668l-4.43-14.41-4.403 14.41h8.833zm21.656-24.8h18.402c3.628 0 6.558.491 8.791 1.476 2.233.984 4.079 2.397 5.537 4.238 1.459 1.841 2.516 3.983 3.172 6.426.656 2.442.984 5.03.984 7.765 0 4.284-.487 7.606-1.462 9.967-.976 2.36-2.33 4.339-4.06 5.934-1.733 1.595-3.592 2.657-5.58 3.185-2.715.73-5.176 1.094-7.382 1.094H89.176v-40.086zm12.386 9.077v21.903h3.036c2.588 0 4.43-.288 5.523-.862 1.094-.574 1.95-1.577 2.57-3.008.62-1.43.93-3.75.93-6.959 0-4.247-.693-7.155-2.078-8.722-1.385-1.568-3.682-2.352-6.89-2.352h-3.09zm28.848 17.746l11.785-.738c.256 1.914.775 3.372 1.559 4.375 1.276 1.622 3.099 2.434 5.469 2.434 1.768 0 3.13-.415 4.088-1.245.957-.829 1.435-1.79 1.435-2.884 0-1.04-.456-1.97-1.367-2.79-.912-.82-3.026-1.594-6.344-2.324-5.432-1.221-9.306-2.843-11.62-4.867-2.334-2.023-3.5-4.603-3.5-7.738 0-2.06.596-4.006 1.79-5.838 1.194-1.832 2.99-3.272 5.387-4.32 2.397-1.048 5.683-1.573 9.857-1.573 5.123 0 9.028.953 11.717 2.858 2.689 1.905 4.288 4.935 4.799 9.092l-11.676.683c-.31-1.804-.962-3.117-1.955-3.937-.994-.82-2.365-1.23-4.115-1.23-1.44 0-2.525.305-3.254.915-.73.611-1.094 1.354-1.094 2.229 0 .638.3 1.212.902 1.722.584.53 1.97 1.021 4.157 1.477 5.414 1.167 9.292 2.347 11.634 3.541 2.343 1.194 4.047 2.675 5.114 4.443 1.066 1.769 1.6 3.747 1.6 5.934 0 2.57-.712 4.94-2.133 7.11-1.422 2.169-3.41 3.814-5.961 4.935-2.553 1.121-5.77 1.682-9.653 1.682-6.817 0-11.539-1.313-14.164-3.938s-4.11-5.96-4.457-10.008zm42.547-26.824h20.59c4.484 0 7.843 1.066 10.076 3.2 2.233 2.132 3.35 5.167 3.35 9.105 0 4.047-1.217 7.21-3.65 9.488-2.434 2.279-6.148 3.418-11.143 3.418h-6.782V141h-12.441v-40.086zm12.441 17.09h3.036c2.388 0 4.065-.415 5.03-1.244.967-.83 1.45-1.892 1.45-3.186 0-1.258-.42-2.324-1.258-3.199-.838-.875-2.415-1.313-4.73-1.313h-3.528v8.942zm47.961 16.379H219.25L217.309 141h-12.66l15.066-40.086h13.508L248.289 141h-12.96l-1.97-6.617zm-2.597-8.668l-4.43-14.41-4.402 14.41h8.832z" fill-rule="evenodd"/></svg>'

const logos = [
    logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg, logg
]

const renderlogos = document.querySelector('.companies_logos');
const renderlogos1 = document.querySelector('.companies_logos1');

logos.forEach((logo) => {
    const lv1 = document.createElement('div');
    lv1.innerHTML = (logo)

    lv1.classList.add('companies_logos_logo');
    const lv2 = lv1.cloneNode(true);
    renderlogos.appendChild(lv1); 
    renderlogos1.appendChild(lv2); 
})
   
const man = [
    {
        no: '01',
        title: 'Formulation of the problem',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        no: '02',
        title: 'Formulation of the problem',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        no: '03',
        title: 'Formulation of the problem',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        no: '04',
        title: 'Formulation of the problem',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
]

const renderMan = document.querySelector('.man_right')

man.forEach((item) => {
    const lv1 = document.createElement('div');
    const lv2 = document.createElement('h5');
    const lv3 = document.createElement('h4');
    const lv4 = document.createElement('p');

    lv1.classList.add('man_right_cont');
    lv2.textContent = item.no;
    lv3.textContent = item.title;
    lv4.textContent = item.desc;

    lv1.appendChild(lv2);
    lv1.appendChild(lv3);
    lv1.appendChild(lv4);
    renderMan.appendChild(lv1);
})

const testimonials = [
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Khris Angles',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Kotah Khan',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Ofer coloumbus',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Musa Rubak',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Mammi Seun',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Olofin Aduragbemi',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Khris Angles',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Kotah Khan',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Ofer coloumbus',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Musa Rubak',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Mammi Seun',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Olofin Aduragbemi',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Khris Angles',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Kotah Khan',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Ofer coloumbus',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Musa Rubak',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Mammi Seun',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Olofin Aduragbemi',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Khris Angles',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Kotah Khan',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Ofer coloumbus',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Musa Rubak',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Mammi Seun',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis consequatur iusto neque excepturi, autem ipsam maxime, impedit at praesentium nostrum? Facere'
    },
    {
        src: '/assets/pngwing.com (1).png',
        name: 'Olofin Aduragbemi',
        role: 'Supernatural Freak',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore molestiae expedita ab. A unde optio accusantium consequatur nam quibusdam consectetur. Sapiente soluta, aperiam ad quidem placeat libero possimus omnis voluptatum labore iste odit itaque quis dolorem ipsa eum a porro aspernatur maiores quasi rem. At aperiam voluptates rerum quis esse.'
    },
]

const renderTestimonials = document.querySelector('.test_cont_te');

const screenContainer = document.createElement('div');

for (let i = 0; i < testimonials.length; i += 6) {
    const screenDiv = document.createElement('div');
    screenDiv.classList.add('screen');

    for (let j = i; j < i + 6 && j < testimonials.length; j += 2) {
        const pairDiv = document.createElement('div');
        pairDiv.classList.add('pair');

        for (let k = j; k < j + 2 && k < testimonials.length; k++) {
            const card = testimonials[k];

            const innerDiv = document.createElement('div');
            const innerDiv1 = document.createElement('div');
            const innerDiv2 = document.createElement('div');
            innerDiv.classList.add('test_card');
            innerDiv1.classList.add('test_card_avatar');
            innerDiv2.classList.add('test_card_avatar_text');

            const img = document.createElement('img');
            img.src = card.src;
            img.alt = '';

            const h4 = document.createElement('h4');
            h4.textContent = card.name;

            const p = document.createElement('p');
            p.textContent = card.role;

            innerDiv1.appendChild(img);
            innerDiv2.appendChild(h4);
            innerDiv2.appendChild(p);

            const pDesc = document.createElement('p');
            pDesc.textContent = card.desc;

            innerDiv1.appendChild(innerDiv2);
            innerDiv.appendChild(innerDiv1);
            innerDiv.appendChild(pDesc);

            pairDiv.appendChild(innerDiv);
        }

        screenDiv.appendChild(pairDiv);
    }

    renderTestimonials.appendChild(screenDiv);
}

