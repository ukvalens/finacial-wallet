// ../JS/auth-script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Auth script is ready!');

    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!name || !email || !password) {
                alert('All fields are required.');
                return;
            }

            // Perform sign-up logic (e.g., send data to server)
            console.log('Sign-up form submitted with:', { name, email, password });

            // Simulate successful sign-up and redirect to login
            window.location.href = '../HTML/login.html';
        });

        // Remove the required attribute from inputs
        document.getElementById('name').removeAttribute('required');
        document.getElementById('email').removeAttribute('required');
        document.getElementById('password').removeAttribute('required');
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!email || !password) {
                alert('Email and password are required.');
                return;
            }

            // Perform login logic (e.g., validate credentials)
            console.log('Login form submitted with:', { email, password });

            // Simulate successful login and redirect to wallet
            window.location.href = '../HTML/wallet.html';
        });
    }
});
