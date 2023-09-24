document.getElementById('userInfoForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    
    // Get user inputs
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const zipCode = document.getElementById('zipCode').value.trim();
    const secretMessage = document.getElementById('secretMessage');

    // Combine first name and last name
    const fullName = firstName + ' ' + lastName;

    // Check if the full name has more than 20 characters
    if (fullName.length > 20) {
        alert('Full name is too long (more than 20 characters).');
        return;
    }

    // Check if the zip code contains exactly 5 digits
    if (!/^\d{5}$/.test(zipCode)) {
        alert('Invalid zip code (should contain exactly 5 digits).');
        return;
    }

    // If inputs are valid, display the secret message
    secretMessage.style.display = 'block';
});
