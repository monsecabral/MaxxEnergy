"use strict"

const editProfileForm = document.getElementById('edit-profile-form');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

editProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;

    // Validate input fields
    if (!username || !email || !bio) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
    }

    // Send request to update profile information
    fetch('/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, bio }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.success) {
            successMessage.style.display = 'block';
            errorMessage.style.display = 'none';
        } else {
            errorMessage.textContent = data.error;
            errorMessage.style.display = 'block';
        }
    })
    .catch((error) => {
        errorMessage.textContent = 'Error updating profile.';
        errorMessage.style.display = 'block';
    });
});
//
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("edit-profile-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//
