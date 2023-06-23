const crypto = require('crypto');
const fs = require('fs');

// Function to calculate the SHA-256 hash of a file
function calculateFileChecksum(filePath) {
  const hash = crypto.createHash('sha256');
  const fileData = fs.readFileSync(filePath);
  hash.update(fileData);
  const checksum = hash.digest('hex');
  return checksum;
}

// Simulating storing the file and its SHA-256 checksum
function storeFileWithChecksum(filePath) {
  // Simulated storage
  const fileData = fs.readFileSync(filePath);
  const checksum = calculateFileChecksum(filePath);

  // Store the file data and checksum (e.g., in a database)
  // ... Save file data and checksum

  console.log('File and checksum stored successfully! >>>', checksum);
}

// Usage
const filePath1 = 'D:\\hashing-algorithm\\sha\\file-correct.txt';
const filePath2 = 'D:\\hashing-algorithm\\sha\\file-wrong.txt';

storeFileWithChecksum(filePath1);

function retrieveFileAndVerify(filePath) {
  // Simulated stored checksum
  const storedChecksum =
    '80971238021706de152cc19ca05dda14afa4abe3c32e3ab0cd5ae0ec4a2ba2c0';

  // Retrieve the file data (simulated)
  const fileData = fs.readFileSync(filePath);

  // Calculate the SHA-256 checksum of the retrieved file
  const calculatedChecksum = calculateFileChecksum(filePath);

  // Compare the stored and calculated checksums
  if (storedChecksum === calculatedChecksum) {
    console.log('File integrity verified. >>>', filePath);
  } else {
    console.log('File integrity verification failed. >>>', filePath);
  }
}

retrieveFileAndVerify(filePath1);
retrieveFileAndVerify(filePath2);
