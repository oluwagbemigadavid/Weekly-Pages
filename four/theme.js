function changeTheme() {
    const themeBtn = document.getElementById('theme-switch')
    const theme = themeBtn.checked ? 'dark' : 'light';

    if(theme === 'dark') {
        document.body.style.setProperty('--bg', `var(--grey_900)`);
        document.body.style.setProperty('--text_primary', `var(--white_70)`);
        document.body.style.setProperty('--text_secondary', `var(--white_100)`);
        document.body.style.setProperty('--nav_text', `var(--white_90)`);
        document.body.style.setProperty('--logo_text', `var(--white_100)`);
        document.body.style.setProperty('--border_color', `var(--white_30)`);
        document.body.style.setProperty('--figures_cont_bg', `var(--white_30)`);
        document.body.style.setProperty('--pricing', `var(--white_30)`);
    } else if(theme === 'light') {
        document.body.style.setProperty('--bg', 'unset');
        document.body.style.setProperty('--text_primary', 'unset');
        document.body.style.setProperty('--text_secondary', 'unset');
        document.body.style.setProperty('--nav_text', 'unset');
        document.body.style.setProperty('--logo_text', 'unset');
        document.body.style.setProperty('--border_color', 'unset');
        document.body.style.setProperty('--figures_cont_bg', 'unset');
        document.body.style.setProperty('--hero-pricing-card', 'unset');
    }
}
