"use strict"


const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// -------------------------------------------------------------------------------------------------------------------------------------

// api data starts here i think???

// Get the form elements
const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');
const overlay = document.querySelector('.overlay-container .overlay');

// Add event listeners to the forms
signUpForm.addEventListener('submit', handleSignUp);
signInForm.addEventListener('submit', handleSignIn);

// Function to handle sign up
function handleSignUp(event) {
  event.preventDefault();
  const name = document.querySelector('.sign-up-container input[type="text"]').value;
  const email = document.querySelector('.sign-up-container input[type="email"]').value;
  const password = document.querySelector('.sign-up-container input[type="password"]').value;

  // Validate the form fields
  if (name === '' || email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  // Send a POST request to the server to register the user
  fetch('http://167.71.252.138/register.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `name=${name}&email=${email}&password=${password}`
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Registration successful!');
      // Redirect to a data page (you would replace this with your actual redirect logic)
      window.location.href = 'data-page.html';
    } else {
      alert('Registration failed: ' + data.error);
    }
  })
  .catch(error => {
    console.error('Error registering user:', error);
  });
}

// Function to handle sign in
function handleSignIn(event) {
  event.preventDefault();
  const email = document.querySelector('.sign-in-container input[type="email"]').value;
  const password = document.querySelector('.sign-in-container input[type="password"]').value;

  // Send a POST request to the server to login the user
  fetch('http://167.71.252.138/login.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `email=${email}&password=${password}`
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Login successful!');
      // Redirect to a data page (you would replace this with your actual redirect logic)
      window.location.href = 'data-page.html';
    } else {
      alert('Login failed: ' + data.error);
    }
  })
  .catch(error => {
    console.error('Error logging in user:', error);
  });
}

// Add event listeners to the overlay buttons
document.querySelector('#signUp').addEventListener('click', () => {
  overlay.classList.add('right-panel-active');
});

document.querySelector('#signIn').addEventListener('click', () => {
  overlay.classList.remove('right-panel-active');
});

