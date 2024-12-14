const f_name = document.getElementById("first-name");
const l_name = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("myForm");
const l_name_error = document.getElementById("l_name_error");
const f_name_error = document.getElementById("f_name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");

form.addEventListener('submit', function (e) {
    let isValid = true;
    e.preventDefault();

    // First name validation
    if (!f_name.value) {
        f_name_error.innerHTML = 'This field is required';
        isValid = false;
    } else {
        f_name_error.innerHTML = '';  // Clear error message if valid
    }

    // Last name validation
    if (!l_name.value) {
        l_name_error.innerHTML = 'This field is required';
        isValid = false;
    } else {
        l_name_error.innerHTML = '';  // Clear error message if valid
    }

    // Email validation
    if (!email.validity.valid) {
        email_error.innerHTML = email.value === '' ? 'This field is required' : 'Please enter a valid email address';
        isValid = false;
    } else {
        email_error.innerHTML = '';  // Clear error message if valid
    }

    // Password validation (minlength)
    if (password.value.length < 8) {
        password_error.innerHTML = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        password_error.innerHTML = '';  // Clear error message if valid
    }

    // Submit the form if valid
    if (isValid) {
        alert("success login")
        form.submit();
    }
});
