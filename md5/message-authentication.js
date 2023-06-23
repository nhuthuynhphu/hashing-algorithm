const crypto = require('crypto');

// Function to generate the MD5-based MAC for a message
function generateMAC(message, secretKey) {
  const hmac = crypto.createHmac('md5', secretKey);
  hmac.update(message);
  const mac = hmac.digest('hex');
  return mac;
}

// Function to verify the MAC for a received message
function verifyMAC(message, mac, secretKey) {
  const calculatedMAC = generateMAC(message, secretKey);
  if (mac === calculatedMAC) {
    console.log('MAC verification successful. >>>', mac);
  } else {
    console.log('MAC verification failed. >>>', mac);
  }
}

// Usage
const secretKey = 'mySecretKey';
const originalMessage = 'Hello, this is the original message!';
// Generate the MAC for the original message
const mac = generateMAC(originalMessage, secretKey);
console.log('Original Message:', originalMessage);
console.log('Generated MAC:', mac);

// Simulating message transmission and verification
const receivedMessage = 'Hello, this is the original message!';
const receivedMACCorrect = generateMAC(receivedMessage, secretKey); // Assume this is the received MAC
const secretKeyWrong = 'mySecretKeyWrong';
const receivedMACWrong = generateMAC(receivedMessage, secretKeyWrong);

// Verify the MAC for the received message
verifyMAC(receivedMessage, receivedMACCorrect, secretKey);
verifyMAC(receivedMessage, receivedMACWrong, secretKey);
