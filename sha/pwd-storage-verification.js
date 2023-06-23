const crypto = require('crypto');

// Simulating a user registration
function registerUser(username, password) {
  // Generate SHA-256 hash of the password
  const hashedPassword = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');

  // Store the username and hashed password in the database (simulated)
  const user = { username, password: hashedPassword };
  // ... Save user to the database or any other storage

  console.log('User registered successfully! >>>', hashedPassword);
}

// Simulating a user login
function loginUser(username, password) {
  // Retrieve the user's hashed password from the database (simulated)
  // Sample hashed password
  const user = {
    username,
    password:
      '71d4ec024886c1c8e4707fb02b46fd568df44e77dd5055cadc3451747f0f2716',
  };

  // Generate SHA-256 hash of the entered password
  const hashedPassword = crypto
    .createHash('sha256')
    .update(password)
    .digest('hex');

  // Compare the hashed passwords
  if (hashedPassword === user.password) {
    console.log('Login successful! >>>', username);
  } else {
    console.log('Invalid username or password. >>>', username);
  }
}

// Usage
const username = 'john_doe';
const passwordCorrect = 'myPassword123';
const passwordWrong = 'myPassword321';

registerUser(username, passwordCorrect);
loginUser(username, passwordCorrect);
loginUser(username, passwordWrong);
