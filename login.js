// Mock data for demonstration (you would replace this with actual backend data or database queries)
const users = [
    { email: 'farmer@example.com', password: 'farmer123', role: 'farmer' },
    { email: 'retailer@example.com', password: 'retailer123', role: 'retailer' },
    { email: 'trader@example.com', password: 'trader123', role: 'trader' }
];

// Handle the login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered email, password, and selected role
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    // Find the user that matches the email, password, and role
    const user = users.find(user => user.email === email && user.password === password && user.role === role);

    if (user) {
        // If user is found, store the session (for demo purposes, we're using localStorage)
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('userEmail', user.email);

        // Redirect user to their respective dashboard based on the role
        if (user.role === 'farmer') {
            window.location.href = 'farmer-dashboard.html'; // Redirect to farmer dashboard
        } else if (user.role === 'retailer') {
            window.location.href = 'retailer-dashboard.html'; // Redirect to retailer dashboard
        } else if (user.role === 'trader') {
            window.location.href = 'trader-dashboard.html'; // Redirect to trader dashboard
        }
    } else {
        // Show error message if user is not found or credentials don't match
        document.getElementById('error-message').textContent = 'Invalid email, password, or role';
    }
});
