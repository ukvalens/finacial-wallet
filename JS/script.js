// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Wallet App is ready!');

    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Perform sign-up logic (e.g., send data to server)
            console.log('Sign-up form submitted');
            window.location.href = 'login.html';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Perform login logic (e.g., validate credentials)
            console.log('Login form submitted');
            window.location.href = 'wallet.html';
        });
    }
});
