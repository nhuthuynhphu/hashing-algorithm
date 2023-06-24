const crypto = require('crypto');

// Function to calculate the SHA-256 hash of block data
function calculateBlockHash(blockData) {
  const hash = crypto.createHash('sha256');
  hash.update(JSON.stringify(blockData));
  const blockHash = hash.digest('hex');
  return blockHash;
}

// Simulating the creation of a block
function createBlock(blockData) {
  const timestamp = new Date().toISOString();
  // Placeholder for the previous block's hash
  const previousBlockHash = '00000000000000000000000000000000';

  const block = {
    timestamp: timestamp,
    previousBlockHash: previousBlockHash,
    data: blockData,
  };

  // Calculate the SHA-256 hash of the block's data
  const blockHash = calculateBlockHash(block);

  // Add the calculated hash to the block
  block.blockHash = blockHash;

  return block;
}

// Demo usage
const blockData = {
  transactions: [
    { from: 'Alice', to: 'Bob', amount: 10 },
    { from: 'Bob', to: 'Charlie', amount: 5 },
    { from: 'Charlie', to: 'Alice', amount: 3 },
  ],
  nonce: 123456,
};

const block = createBlock(blockData);

console.log('Block created:');
console.log(block);
