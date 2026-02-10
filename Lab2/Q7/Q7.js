 const form = document.getElementById('registrationForm');
    const ageInput = document.getElementById('age');
    const ageAlert = document.getElementById('ageAlert');

    form.addEventListener('submit', function(event) {
      if (ageInput.value < 16) {
        event.preventDefault();
        ageAlert.style.display = 'block';
        ageInput.focus();
      } else {
        ageAlert.style.display = 'none';
      }
    });