function toggleMenu() {
    var navbar = document.querySelector(".navbar");
    navbar.style.display = (navbar.style.display === "flex") ? "none" : "flex";
    var disimg = document.getElementById("tiltImage");
    disimg.style.display = (disimg.style.display === "none") ? "block" : "none";

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


function tiltImage(event) {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = 0.5 - (clientY - top) / height;
  
    const tiltImage = document.getElementById('tiltImage');
  
    tiltImage.style.transform = `
      rotateX(${y * 70}deg)
      rotateY(${x * 70}deg)
    `;
  }
  

