document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Dummy login credentials (for demonstration purposes)
    const validUsername = 'student';
    const validPassword = 'password123';

    // Basic validation
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        errorMessage.style.display = 'none';
        // Redirect to dashboard or next page
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password.';
        errorMessage.style.display = 'block';
    }
});
