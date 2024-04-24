document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Perform form validation here
    if (validateForm()) {
      // Redirect to index.html if form is valid
      window.location.href = 'xx.html';
    }
  });

  function validateForm() {
    // Get form inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const password2 = document.getElementById('password2').value.trim();

    // Check if any field is empty
    if (username === '' || email === '' || password === '' || password2 === '') {
      alert('Please fill in all fields');
      return false;
    }

    // Add more validation rules as needed

    // If all validation passed, return true
    return true;
  }
});
