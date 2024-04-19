exports.handler = async (event, context) => {
  const { password } = JSON.parse(event.body);
  const rawPassword = "worm"; // Set your raw password here

  if (password === rawPassword) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ redirectUrl: 'https://traintree.github.io/VLine/' }) // Redirect location
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Incorrect password. Please try again.' }) // Error message
    };
  }
};
