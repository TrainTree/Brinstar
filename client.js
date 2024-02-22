document.getElementById('password-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  const password = document.getElementById('password-input').value;

  try {
    const response = await fetch('/.netlify/functions/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    });

    if (response.ok) {
      const data = await response.json();
      window.location.href = data.redirectUrl; // Redirect to the specified URL
    } else {
      const errorData = await response.json();
      alert(errorData.message); // Display error message
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
