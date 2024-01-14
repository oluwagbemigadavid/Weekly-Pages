function changeTheme() {
    const themeBtn = document.getElementById('theme-switch')
    const theme = themeBtn.checked ? 'dark' : 'light';
    const light = document.getElementById('light-switch');
    const dark = document.getElementById('dark-switch');
    if(theme === 'dark') {
        document.body.style.setProperty('--bg', `var(--dark_bg)`);
        document.body.style.setProperty('--text_primary', `var(--white_70)`);
        document.body.style.setProperty('--text_secondary', `var(--white_100)`);
        document.body.style.setProperty('--nav_text', `var(--white_90)`);
        document.body.style.setProperty('--logo_text', `var(--white_100)`);
        document.body.style.setProperty('--border_color', `var(--white_30)`);
        document.body.style.setProperty('--placeholder', `var(--white_40)`);
        document.body.style.setProperty('--hero-img-card', `var(--hero-img-cards-dark)`);
        document.body.style.setProperty('--logos_bg', `var(--white_60)`);
        document.body.style.setProperty('--cards-bg', `var(--cs_bg_dark)`);
        document.body.style.setProperty('--grid-bg-lines', `var(--hero-bg-lines-dark)`);
        document.body.style.setProperty('--icons', `var(--white_90)`);
        document.body.style.setProperty('--lines', `rgba(255, 255, 255, 0.06)`);
        dark.classList.add('active');
        light.classList.remove('active');
    } else if(theme === 'light') {
        document.body.style.setProperty('--bg', 'unset');
        document.body.style.setProperty('--text_primary', 'unset');
        document.body.style.setProperty('--text_secondary', 'unset');
        document.body.style.setProperty('--nav_text', 'unset');
        document.body.style.setProperty('--logo_text', 'unset');
        document.body.style.setProperty('--border_color', 'unset');
        document.body.style.setProperty('--placeholder', 'unset');
        document.body.style.setProperty('--hero-img-card', 'unset');
        document.body.style.setProperty('--logos_bg', 'unset');
        document.body.style.setProperty('--cards-bg', 'unset');
        document.body.style.setProperty('--grid-bg-lines', 'unset');
        document.body.style.setProperty('--icons', 'unset');
        document.body.style.setProperty('--lines', 'unset');
        dark.classList.remove('active');
        light.classList.add('active');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const linesGrid = document.getElementById("linesGrid");

    const horizontalLineGap = 72;
    const verticalLineGap = 72;

    // Add horizontal lines
    for (let i = 0; i <= linesGrid.clientHeight; i += horizontalLineGap) {
        createLine('horizontal', i);
    }

    // Add vertical lines
    for (let i = 0; i <= linesGrid.clientWidth; i += verticalLineGap) {
        createLine('vertical', i);
    }

    function createLine(orientation, position) {
        const line = document.createElement("div");
        line.className = `line ${orientation}`;
        linesGrid.appendChild(line);

        if (orientation === 'horizontal') {
            line.style.width = "100%";
            line.style.height = "1px";
            line.style.top = `${position}px`;
        } else {
            line.style.width = "1px";
            line.style.height = "100%";
            line.style.left = `${position}px`;
        }
    }
});
