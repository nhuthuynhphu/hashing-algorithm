const crypto = require('crypto');

// Function to generate a scrypt hash for a password
async function generatePasswordHash(password, salt, keyLength, options) {
  return new Promise((resolve, reject) => {
    crypto.scrypt(password, salt, keyLength, options, (error, hashBuffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(hashBuffer.toString('hex'));
      }
    });
  });
}

// Function to verify a password against a stored hash
async function verifyPassword(password, salt, keyLength, options, storedHash) {
  try {
    const hashToVerify = await generatePasswordHash(
      password,
      salt,
      keyLength,
      options
    );
    console.log('hashToVerify >>>', hashToVerify);
    console.log('Password verification result:', storedHash === hashToVerify);
  } catch (error) {
    throw error;
  }
}

// Usage
const password = 'myStrongPassword';
const salt = crypto.randomBytes(16).toString('hex');
const keyLength = 32; // 32 bytes = 256 bits

const options = {
  N: 16384, // CPU/memory cost parameter
  r: 8, // block size
  p: 1, // parallelization factor
};

(async () => {
  try {
    // Generate a hash for the password during registration
    const passwordHash = await generatePasswordHash(
      password,
      salt,
      keyLength,
      options
    );

    // Simulate storing the hash and other user details
    const storedHash = passwordHash;
    const storedSalt = salt;
    const storedOptions = options;

    console.log('storedHash >>>', storedHash);
    // Verify the password during login
    ['myStrongPassword', 'myWrongPassword'].forEach(async (item) => {
      await verifyPassword(
        item,
        storedSalt,
        keyLength,
        storedOptions,
        storedHash
      );
    });
  } catch (error) {
    console.error('Error:', error);
  }
})();
