// ../JS/login@signup.js
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

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!isStrongPassword(password)) {
                alert('Password must be at least 8 characters long, include a mix of uppercase, lowercase, numbers, and special characters.');
                return;
            }

            // Save credentials to local storage for demo purposes (not secure for production)
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userPassword', password);

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

            const storedEmail = localStorage.getItem('userEmail');
            const storedPassword = localStorage.getItem('userPassword');

            if (email === storedEmail && password === storedPassword) {
                console.log('Login successful');
                window.location.href = '../HTML/wallet.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }
});

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isStrongPassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}
