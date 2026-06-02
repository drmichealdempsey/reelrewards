document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('waitlist-form');
  const message = document.getElementById('form-message');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      message.textContent = 'Sending...';
      try {
        const response = await fetch('https://formspree.io/f/mvznpkpy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            address: form.address.value
          })
        });
        const result = await response.json();
        if (response.ok) {
          message.textContent = 'Application received! We\'ll review and get back to you within 24 hours.';
          form.reset();
        } else {
          message.textContent = 'Error: ' + (result.error || 'Please try again.');
        }
      } catch (err) {
        message.textContent = 'Network error: ' + err.message;
      }
    });
  }
});
