document.addEventListener('DOMContentLoaded', () => {
    console.log('Auth script is ready!');

    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const signupImages = ['../IMAGES/image1.jpeg', '../IMAGES/image2.jpeg', '../IMAGES/image3.jpeg'];
    const loginImages = ['../IMAGES/image1.jpeg', '../IMAGES/image2.jpeg', '../IMAGES/image3.jpeg'];
    let signupImageIndex = 0;
    let loginImageIndex = 0;

    // SIGNUP FORM HANDLING
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

            // Check if user already exists
            if (localStorage.getItem(email)) {
                alert('An account with this email already exists. Please log in.');
                return;
            }

            // Save user details securely (for demo purposes only)
            const user = {
                name,
                email,
                password,  // Note: NEVER store passwords in plaintext in real applications!
            };
            localStorage.setItem(email, JSON.stringify(user));

            console.log('Sign-up successful:', user);
            alert('Sign-up successful! Redirecting to login page.');
            
            window.location.href = '../HTML/login.html';
        });

        // Remove the required attribute from inputs
        document.getElementById('name').removeAttribute('required');
        document.getElementById('email').removeAttribute('required');
        document.getElementById('password').removeAttribute('required');

        // Image cycling for sign-up page
        document.getElementById('signup-next').addEventListener('click', () => {
            signupImageIndex = (signupImageIndex + 1) % signupImages.length;
            document.getElementById('signup-img').src = signupImages[signupImageIndex];
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
                // Save user session details
                sessionStorage.setItem('userName', user.name);
                sessionStorage.setItem('userEmail', user.email);
                sessionStorage.setItem('userProfilePic', "https://example.com/profile.jpg"); // Replace with actual profile pic URL

                console.log('Login successful');
                alert('Login successful! Redirecting to dashboard.');
                
                window.location.href = '../HTML/wallet.html';
            } else {
                alert('Invalid email or password.');
            }
        });

        // Image cycling for login page
        document.getElementById('login-next').addEventListener('click', () => {
            loginImageIndex = (loginImageIndex + 1) % loginImages.length;
            document.getElementById('login-img').src = loginImages[loginImageIndex];
        });
    }
    let profileImageURL = null;
    if (profileImage) {
        // Create a URL for the uploaded image
        profileImageURL = URL.createObjectURL(profileImage);
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
