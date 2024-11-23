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
