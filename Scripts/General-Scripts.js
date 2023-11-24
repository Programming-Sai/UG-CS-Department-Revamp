


function openNav() {
    let navElement = document.querySelector("nav");
    navElement.classList.toggle("nav-open");
    let menuButton = document.querySelector(".menu-button");
    let menuHTML =  `<button><i class="fas fa-bars"></i></button>`;
    if (navElement.classList.contains("nav-open")) {
        menuButton.innerHTML = `<button><i class="fas fa-close"></i></button>`;
    } else {
        menuButton.innerHTML = `<button><i class="fas fa-bars"></i></button>`;
    }
}
