const crypto = require('crypto');

// Simulating a user registration
function registerUser(username, password) {
  // Generate MD5 hash of the password
  const hashedPassword = crypto
    .createHash('md5')
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
  const user = { username, password: '487753b954871b5b05f854060de151d8' }; // Sample hashed password

  // Generate MD5 hash of the entered password
  const hashedPassword = crypto
    .createHash('md5')
    .update(password)
    .digest('hex');

  // Compare the hashed passwords
  if (hashedPassword === user.password) {
    console.log('Login successful! >>>', password);
  } else {
    console.log('Invalid username or password. >>>', password);
  }
}

// Usage
const username = 'john_doe';
const passwordCorrect = 'myPassword123';
const passwordWrong = 'myPassword321';

registerUser(username, passwordCorrect);
loginUser(username, passwordCorrect);
loginUser(username, passwordWrong);
