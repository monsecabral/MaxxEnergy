"use strict"

// This is what makes the forms switch DO NOT TOUCH. 

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

// js for login and registration data starts here

document.addEventListener('DOMContentLoaded', () => {
  const signUpForm = document.getElementById('signUpForm');
  const signInForm = document.getElementById('signInForm');
  const signUpMessage = document.getElementById('signUpMessage');
  const signInMessage = document.getElementById('signInMessage');
  
  signUpForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('signUpName').value;
      const email = document.getElementById('signUpEmail').value;
      const password = document.getElementById('signUpPassword').value;

      try {
          const response = await fetch('http://167.71.252.138/server-info.php', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams({ action: 'register', name, email, password })
          });

          const result = await response.json();

          if (response.ok && result.success) {
              signUpMessage.textContent = 'Registration successful! Redirecting...';
              signUpMessage.style.color = 'green';
              setTimeout(() => {
                  window.location.href = 'data.html'; // Update this URL as needed
              }, 2000); // Delay for 2 seconds
          } else {
              signUpMessage.textContent = result.message || 'Registration failed.';
              signUpMessage.style.color = 'red';
          }
      } catch (error) {
          console.error('Error during registration:', error);
          signUpMessage.textContent = 'An error occurred.';
          signUpMessage.style.color = 'red';
      }
  });

  signInForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('signInEmail').value;
      const password = document.getElementById('signInPassword').value;

      try {
          const response = await fetch('http://167.71.252.138/server-info.php', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams({ action: 'login', email, password })
          });

          const result = await response.json();

          if (response.ok && result.success) {
              signInMessage.textContent = 'Login successful! Redirecting...';
              signInMessage.style.color = 'green';
              setTimeout(() => {
                  window.location.href = 'data.html'; // Update this URL as needed
              }, 2000); // Delay for 2 seconds
          } else {
              signInMessage.textContent = result.message || 'Login failed.';
              signInMessage.style.color = 'red';
          }
      } catch (error) {
          console.error('Error during login:', error);
          signInMessage.textContent = 'An error occurred.';
          signInMessage.style.color = 'red';
      }
  });

  document.getElementById('signIn').addEventListener('click', () => {
      document.querySelector('.overlay').style.transform = 'translateX(-50%)';
  });

  document.getElementById('signUp').addEventListener('click', () => {
      document.querySelector('.overlay').style.transform = 'translateX(0)';
  });
});
