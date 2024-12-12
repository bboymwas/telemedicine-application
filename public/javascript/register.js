document.getElementById('registerForm').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission
  const formData = new FormData(this);
  const response = await fetch('http://localhost:3000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData)
  });
  console.log([...formData.entries()]);


  if (response.ok) {
      alert('Registration successful!');
      window.location.href = 'login.html'; // Redirect to login page
  } else {
      alert('Registration failed.');
  }
});