const crypto = require('crypto');

// Generate a digital signature using SHA-256 and RSA
function generateDigitalSignature(privateKey, data) {
  const sign = crypto.createSign('SHA256');
  sign.update(data);
  const signature = sign.sign(privateKey, 'hex');
  return signature;
}

// Verify the digital signature using SHA-256 and RSA
function verifyDigitalSignature(publicKey, data, signature) {
  const verify = crypto.createVerify('SHA256');
  verify.update(data);
  const isValid = verify.verify(publicKey, signature, 'hex');
  return isValid;
}

// Demo usage
const privateKey = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDQ7AB4VLOoKu6m
UW0seA5eJqQJ1AM3DlQ8r2DK5C29cUZNJzQnhv1vi5Q8e8uh4BY5Tcv6RtRn9Oam
a7ZOQYxVtJHVZtDn0e4JTKthZ5mJst2PKdPGofTQafCDpVWxySmmqPnV/ScmTkwT
ru/0K80vDczSLnLLR/81mcIsD6uWJ8rGd4kSNFG4fHwEh2vDudxF8b8fyCplzGZK
-----END PRIVATE KEY-----`;

const publicKey = `-----BEGIN PUBLIC KEY-----

-----END PUBLIC KEY-----`;

const data = 'This is the data to be signed';

// Generate the digital signature
const signature = generateDigitalSignature(privateKey, data);
console.log('Digital Signature:', signature);

// Verify the digital signature
const isValid = verifyDigitalSignature(publicKey, data, signature);
console.log('Signature is valid:', isValid);
