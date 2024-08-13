"use strict"


document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the form elements
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission success
    // You can replace this part with actual form submission logic
    console.log('Form submitted with:', { name, email, message });

    // Display the success message
    const successMessageDiv = document.getElementById('success-message');
    successMessageDiv.textContent = 'Thank you for contacting us, ' + name + '! Your message has been sent.';

    // Clear the form fields
    document.getElementById('contact-form').reset();
});


