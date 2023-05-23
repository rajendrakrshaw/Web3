/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    CONTRACT_ADDRESS:"0x70f8b2A88C7A87CC4412db52A3d2d3eB983146b2",
    
    ABI:[
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          }
        ],
        "name": "writeName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_num",
            "type": "uint256"
          }
        ],
        "name": "writeNum",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "readName",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "readNum",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ]
  }
}

module.exports = nextConfig
