document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission

  const response = await fetch(this.action, {
      method: this.method,
      body: new URLSearchParams(new FormData(this))
  });

  if (response.ok) {
      window.location.href = 'dashboard.html'; // Redirect to the dashboard page
  } else {
      alert('Login failed. Please check your credentials.');
  }
});