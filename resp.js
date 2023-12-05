function toggleMenu() {
    var navbar = document.querySelector(".navbar");
    navbar.style.display = (navbar.style.display === "flex") ? "none" : "flex";

    event.preventDefault();
}
