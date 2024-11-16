document.addEventListener('DOMContentLoaded', () => {
    try {
        // Data to be stored in localStorage
        const message = "Your contact form has been successfully enhanced!";

        // Store the message in localStorage
        localStorage.setItem("formEnhancementMessage", message);

        // Retrieve and log the stored message
        const storedMessage = localStorage.getItem("formEnhancementMessage");
        console.log(storedMessage); // Output: Your contact form has been successfully enhanced!
    } catch (error) {
        console.error("localStorage is not available:", error);
    }
});
