document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const feedbackDiv = document.getElementById("form-feedback")

    form.addEventListener("submit", function(event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Input retrieval and trimming
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Array to store validation error messages
        const messages = []; 

        // Validate inputs
        let isValid = true;

        if (username.length < 3) {
            messages.push('Username must be at least 3 characters long');
            isValid = false;
        }

        if (!isValidEmail(email)) {
            messages.push('Please enter a valid email address');
            isValid = false;
        }

        if (password.length < 8) {
            messages.push('Password must be at least 8 characters long');
            isValid = false;
        }

        if (isValid) {
            console.log("Registration successful!");
            // Here you would typically send the form data to a server
            // For demonstration, we'll just log the values
            console.log('Username:', username);
            console.log('Email:', email);
            console.log('Password:', password);
        } else {
            console.log('Form is invalid, please correct the errors');
        }
    });

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});