// RESPONSIVENESS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// when we click on hamburger icon its close

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}



// POP-UPS
document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.popup-trigger');
    const popups = document.querySelectorAll('.popup');
    const closeButtons = document.querySelectorAll('.close-button');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', event => {
            event.preventDefault();
            const popupId = `popup-${trigger.dataset.popup}`;
            document.getElementById(popupId).style.display = 'flex';
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.popup').style.display = 'none';
        });
    });

    window.addEventListener('click', event => {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = 'none';
        }
    });
});
