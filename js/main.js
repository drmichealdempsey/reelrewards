document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('waitlist-form');
  const message = document.getElementById('form-message');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        message.textContent = 'Thanks! We will be in touch soon.';
        form.reset();
      } else {
        message.textContent = 'Something went wrong. Please try again.';
      }
    });
  }
});
