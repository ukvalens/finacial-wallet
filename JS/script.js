document.addEventListener('DOMContentLoaded', () => {
    console.log('App is ready!');

    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');

    // Load user session for dashboard
    const dashboardHeading = document.getElementById('dashboard-heading');
    const profileName = document.getElementById('profile-name');
    const profilePic = document.getElementById('profile-pic');
    const logoutBtn = document.getElementById('logout-btn');

    // Get user data from session storage
    const userName = sessionStorage.getItem('userName');
    const userProfilePic = sessionStorage.getItem('userProfilePic') || '../IMAGES/profile.jpg';

    if (userName) {
        document.title = `Welcome, ${userName} - Wallet App`;
        if (dashboardHeading) dashboardHeading.textContent = `Welcome, ${userName}`;
        if (profileName) profileName.textContent = userName;
        if (profilePic) profilePic.src = userProfilePic;
    }

    // SIGN-UP FORM HANDLING
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const profileImage = document.getElementById('profileImage').files[0];

            if (!name || !email || !password) {
                alert('All fields are required.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            if (!isStrongPassword(password)) {
                alert('Password must be at least 8 characters long, including uppercase, lowercase, numbers, and special characters.');
                return;
            }

            // Check if the user already exists
            if (localStorage.getItem(email)) {
                alert('An account with this email already exists. Please log in.');
                return;
            }

            // Handle profile image
            let profileImageURL = null;
            if (profileImage) {
                profileImageURL = URL.createObjectURL(profileImage);
            }

            // Store user data and image in localStorage
            const user = { name, email, password, profileImageURL };
            localStorage.setItem(email, JSON.stringify(user));

            console.log('Sign-up successful:', user);
            alert('Sign-up successful! Redirecting to login page.');

            window.location.href = '../HTML/login.html';
        });
    }

    // LOGIN FORM HANDLING
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();

            if (!email || !password) {
                alert('Email and password are required.');
                return;
            }

            // Retrieve stored user data
            const storedUser = localStorage.getItem(email);
            if (!storedUser) {
                alert('No account found with this email. Please sign up.');
                return;
            }

            const user = JSON.parse(storedUser);
            if (user.password === password) {
                // Save session with profile image URL
                sessionStorage.setItem('userName', user.name);
                sessionStorage.setItem('userEmail', user.email);
                sessionStorage.setItem('userProfilePic', user.profileImageURL || '../IMAGES/profile.jpg'); // Default if no image

                console.log('Login successful');
                alert('Login successful! Redirecting to dashboard.');

                window.location.href = '../HTML/wallet.html';
            } else {
                alert('Invalid email or password.');
            }
        });
    }

    // LOGOUT FUNCTION
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sessionStorage.clear();
            alert('You have been logged out.');
            window.location.href = '../HTML/login.html';
        });
    }
});

// VALIDATION FUNCTIONS
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isStrongPassword(password) {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
}
