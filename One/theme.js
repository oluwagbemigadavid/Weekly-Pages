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
function changeTheme() {
    const themeBtn = document.getElementById('theme-switch')
    const theme = themeBtn.checked ? 'dark' : 'light';

    if(theme == 'dark') {
        document.body.style.setProperty('--bg', `var(--dark_bg)`);
        document.body.style.setProperty('--text_primary', `var(--white_70)`);
        document.body.style.setProperty('--text_secondary', `var(--white_100)`);
        document.body.style.setProperty('--nav_text', `var(--white_90)`);
        document.body.style.setProperty('--logo_text', `var(--white_50)`);
        document.body.style.setProperty('--border_color', `var(--white_30)`);
        document.body.style.setProperty('--placeholder', `var(--white_40)`);
        document.body.style.setProperty('--figures_cont_bg', `var(--grey_900)`);
        document.body.style.setProperty('--logos_bg', `var(--white_60)`);
        document.body.style.setProperty('--cs', `var(--cs_bg_dark)`);
    } else if(theme == 'light') {
        document.body.style.setProperty('--bg', 'unset');
        document.body.style.setProperty('--text_primary', 'unset');
        document.body.style.setProperty('--text_secondary', 'unset');
        document.body.style.setProperty('--nav_text', 'unset');
        document.body.style.setProperty('--logo_text', 'unset');
        document.body.style.setProperty('--border_color', 'unset');
        document.body.style.setProperty('--placeholder', 'unset');
        document.body.style.setProperty('--figures_cont_bg', 'unset');
        document.body.style.setProperty('--logos_bg', 'unset');
        document.body.style.setProperty('--cs', 'unset');
    }
}