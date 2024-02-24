function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting

    // Get form values
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    // Validation criteria
    if (fullName.length < 5) {
        alert("Full Name must be at least 5 characters long.");
        return;
    }

    if (!email.includes('@')) {
        alert("Enter a valid Email ID.");
        return;
    }

    if (phoneNumber.length !== 10 || phoneNumber === '123456789') {
        alert("Enter a valid Phone Number.");
        return;
    }

    if (password.length < 8 || password === 'password' || password === fullName) {
        alert("Password must be at least 8 characters long and not be 'password' or your name.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match.");
        return;
    }

    // If all validations pass, you can submit the form or perform further actions
    alert("Form submitted successfully!");
}
