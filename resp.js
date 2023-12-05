function toggleMenu() {
    var navbar = document.querySelector(".navbar");
    navbar.style.display = (navbar.style.display === "flex") ? "none" : "flex";

    event.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const currentTheme = localStorage.getItem('theme');

    if (!currentTheme) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    } 
    else {
        body.classList.add(currentTheme);
    }

    const toggleButton = document.getElementById('toggle-theme');
    const themeIcon = document.getElementById('theme-icon');

    themeIcon.className = currentTheme === 'dark-mode' ? 'fas fa-moon' : 'fas fa-sun';

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);

        themeIcon.className = theme === 'dark-mode' ? 'fas fa-moon' : 'fas fa-sun';
    });
});


