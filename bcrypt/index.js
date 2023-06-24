const bcrypt = require('bcrypt');

// User Authentication
async function registerUser(username, password) {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  // Store the username and hashed password in the database
  // Example: Save the username and hashed password to a user collection in db
  console.log('User registered successfully:', hashedPassword);
  return hashedPassword;
}

async function authenticateUser(username, password, storedHashedPassword) {
  // Retrieve the hashed password from the database based on the username
  // Example: Retrieve the hashed password from the user collection in db
  const match = await bcrypt.compare(password, storedHashedPassword);
  if (match) {
    console.log('User authenticated successfully:', username);
  } else {
    console.log('Authentication failed. Invalid username or password.');
  }
}

// Usage
const username = 'john.doe';
const password = 'SecretPassword123';
(async () => {
  const hashedPassword = await registerUser(username, password);
  console.log('storedHashedPassword >>>', hashedPassword);
  await authenticateUser(username, password, hashedPassword);
})();
