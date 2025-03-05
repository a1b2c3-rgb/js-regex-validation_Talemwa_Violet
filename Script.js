document.getElementById("validationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let fullName = document.getElementById("fullName").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value.trim();

    let isValid = true;

    // Full Name Validation
    let nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(fullName) || fullName === "") {
        showError("fullName", "Enter a valid name (only letters and spaces).");
        isValid = false;
    } else {
        hideError("fullName");
    }

    // Email Validation
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email) || email === "") {
        showError("email", "Enter a valid email address.");
        isValid = false;
    } else {
        hideError("email");
    }

    // Phone Number Validation (Only digits, 10-15 characters)
    let phoneRegex = /^\d{10,15}$/;

    if (!phoneRegex.test(phone) || phone.length > 15) {
       showError("phone", "Enter a valid phone number (10-15 digits).");
         isValid = false;
        } else {
              hideError("phone");
           }
    // Password Validation (At least 8 characters, 1 uppercase, 1 lowercase, 1 number)
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password) || password === "") {
        showError("password", "Password must be at least 8 characters with an uppercase, lowercase, and number.");
        isValid = false;
    } else {
        hideError("password");
    }

    // If form is valid
    if (isValid) {
        document.getElementById("successMessage").textContent = "Form submitted successfully!";
    } else {
        document.getElementById("successMessage").textContent = "";
    }
});

// Function to show error message
function showError(inputId, message) {
    document.getElementById(inputId).classList.add("invalid");
    document.getElementById(inputId + "Error").textContent = message;
}

// Function to hide error message
function hideError(inputId) {
    document.getElementById(inputId).classList.remove("invalid");
    document.getElementById(inputId + "Error").textContent = "";
}
