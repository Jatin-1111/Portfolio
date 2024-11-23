document.addEventListener('DOMContentLoaded', () => {
    try {
        const message = "Your contact form has been successfully enhanced!";

        localStorage.setItem("formEnhancementMessage", message);

        const storedMessage = localStorage.getItem("formEnhancementMessage");
        console.log(storedMessage);
    } catch (error) {
        console.error("localStorage is not available:", error);
    }
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    hamburger.classList.toggle('open');
});

navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
    }
});
