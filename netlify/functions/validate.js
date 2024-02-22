exports.handler = async (event, context) => {
  const { password } = JSON.parse(event.body);
  const rawPassword = "your_raw_password"; // Set your raw password here

  if (password === rawPassword) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ redirectUrl: 'https://github.com/TrainTree/Brinstar/blob/main/index.html' }) // Redirect location
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Incorrect password. Please try again.' }) // Error message
    };
  }
};
