let theme = 'dark'

function themes() {
    if(theme == 'dark') {
        document.body.style.setProperty('--bg', `var(--white)`);
        document.body.style.setProperty('--text_primary', `rgba(22, 22, 22, 0.70)`);
        document.body.style.setProperty('--link_primary', `#161616`);
        document.body.style.setProperty('--btn_border', `rgba(192, 192, 192, 0.30)`);
        document.body.style.setProperty('--bulb', `var(--black)`);
    } else if(theme == 'light') {
        document.body.style.setProperty('--bg', 'unset');
        document.body.style.setProperty('--text_primary', 'unset');
        document.body.style.setProperty('--link_primary', 'unset');
        document.body.style.setProperty('--btn_border', 'unset');
        document.body.style.setProperty('--bulb', 'unset');
    }
}
function changeTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    console.log(theme)
    themes()
}
