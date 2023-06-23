const crypto = require('crypto');
const fs = require('fs');

// Function to calculate the MD5 hash of a file
function calculateFileChecksum(filePath) {
  const hash = crypto.createHash('md5');
  const fileData = fs.readFileSync(filePath);
  hash.update(fileData);
  const checksum = hash.digest('hex');
  return checksum;
}

// Simulating storing the file and its MD5 checksum
function storeFileWithChecksum(filePath) {
  // Simulated storage
  const fileData = fs.readFileSync(filePath);
  const checksum = calculateFileChecksum(filePath);

  // Store the file data and checksum (e.g., in a database)
  // ... Save file data and checksum

  console.log('File and checksum stored successfully! >>>', checksum);
}

// Simulating retrieving the file and verifying its integrity
function retrieveFileAndVerify(filePath) {
  const storedChecksum = 'f722f8c1966f16ff09970d39e22cf86b'; // Simulated stored checksum

  // Retrieve the file data (simulated)
  const fileData = fs.readFileSync(filePath);

  // Calculate the MD5 checksum of the retrieved file
  const calculatedChecksum = calculateFileChecksum(filePath);

  // Compare the stored and calculated checksums
  if (storedChecksum === calculatedChecksum) {
    console.log('File integrity verified. >>>', filePath);
  } else {
    console.log('File integrity verification failed. >>>', filePath);
  }
}

// Usage
const filePath1 = 'D:\\hashing-algorithm\\md5\\file-correct.txt';
const filePath2 = 'D:\\hashing-algorithm\\md5\\file-wrong.txt';

storeFileWithChecksum(filePath1);
retrieveFileAndVerify(filePath1);
retrieveFileAndVerify(filePath2);
