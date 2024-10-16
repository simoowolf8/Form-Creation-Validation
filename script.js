document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Add your form validation logic here
        feedbackDiv.textContent = 'Form submission prevented for validation.';
    });

    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        let messages = [];

        // Username validation
        if (usernameInput.value.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation
        if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
            isValid = false;
            messages.push('Email must contain "@" and "." characters.');
        }

        // Password validation
        if (passwordInput.value.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        if (!isValid) {
            feedbackDiv.textContent = messages.join(' ');
        } else {
            feedbackDiv.textContent = 'Form submitted successfully!';
            form.submit();
        }
    });
    feedbackDiv.style.display = 'block';

    if (isValid) {
        feedbackDiv.textContent = 'Registration successful!';
        feedbackDiv.style.color = '#28a745';
    } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = '#dc3545';
    }
});