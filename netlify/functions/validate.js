exports.handler = async (event, context) => {
  const { password } = JSON.parse(event.body);
  const rawPassword = "worm"; // Set your raw password here

  if (password === rawPassword) {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ redirectUrl: 'https://1drv.ms/o/c/6e78a42f5055b217/EheyVVAvpHgggG6hggAAAAAB1gY8D9gQhUETVEN1Vqardw?e=l2Vqjc' }) // Redirect location
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Incorrect password. Please try again.' }) // Error message
    };
  }
};
