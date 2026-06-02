document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('waitlist-form');
  const message = document.getElementById('form-message');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = form.email.value.trim();
    if (!email) {
      message.textContent = 'Please enter a valid email.';
      return;
    }
    message.textContent = 'Thanks! You are on the waitlist.';
    form.reset();
  });
});
