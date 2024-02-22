// validate.js

exports.handler = async (event, context) => {
  const { password } = JSON.parse(event.body);
  const hashedPassword = "b9af17af4fc5708e9ba636512213b9d0cf6f894c0c3ba6e1d970c13a921c5db9"; // Replace with your hashed password
  
  if (password === hashedPassword) {
    return {
      statusCode: 302, // Redirect status code
      headers: {
        Location: 'https://github.com/TrainTree/Brinstar/blob/main/index.html', // Redirect location
      },
      body: '',
    };
  } else {
    return {
      statusCode: 401, // Unauthorized status code
      body: 'Incorrect password. Please try again.',
    };
  }
};
