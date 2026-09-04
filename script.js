// ==========================================
// DAY 6 : CONTACT FORM INTERACTION
// ==========================================

// Select the form
const form = document.getElementById("contact-form");

// Select the name input
const nameInput = document.getElementById("name");

// Select the success message paragraph
const successMessage = document.getElementById("success-message");

// Listen for form submission
form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get the user's name
    const username = nameInput.value;

    // Display success message
    successMessage.textContent =
        `Thank you, ${username}! Your message has been received.`;

    // Clear the form
    form.reset();

});