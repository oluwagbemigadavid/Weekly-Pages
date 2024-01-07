const gallery = [
    {
        img: '/assets/Rectangle 10.png',
        desc: 'Introducing the "WildernessWanderer" Camping Axe, your trusted companion for every outdoor adventure. Crafted with precision and care, this axe embodies the spirit of exploration and',
        link: 'Camping',
        title: 'WildernessWanderer'
    },
    {
        img: '/assets/Rectangle 11.png',
        desc: "Introducing the 'Craftsman's Edge' Woodworking Axe—a masterpiece designed for artisans who demand precision and quality in their craft. This axe is more than a tool; it's an extension of you",
        link: 'Woodworking',
        title: "Craftsman's Edge"
    },
    {
        img: '/assets/Rectangle 12.png',
        desc: 'Presenting the "Artisans Elegance" Decorative Axe—a fusion of form and function that transcends the boundaries of utility to become a symbol of artistry and sophistication.',
        link: 'Decorative',
        title: "Artisan's Elegance"
    },
]

const renderGallery = document.querySelector('.gallery_cont')

gallery.forEach(item => {
    const lvl1 = document.createElement('div');
    const lvl2 = document.createElement('p');
    const lvl5 = document.createElement('h3');
    const lvl3 = document.createElement('a');
    const lvl4 = document.createElement('img');
    lvl1.classList.add('card')

    lvl2.textContent = item.desc
    lvl3.textContent = item.link
    lvl5.textContent = item.title
    lvl4.src = item.img

    lvl1.appendChild(lvl4)
    lvl1.appendChild(lvl5)
    lvl1.appendChild(lvl2)
    lvl1.appendChild(lvl3)

    renderGallery.appendChild(lvl1)
})