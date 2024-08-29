require("@nomicfoundation/hardhat-toolbox"); // Import Hardhat toolbox
require("dotenv").config();                   // Load environment variables

module.exports = {
  solidity: "0.8.19",                         // Specify Solidity compiler version
  networks: {                                 // Define network configurations
    swisstronik: {                             // Name your network
      url: "https://json-rpc.testnet.swisstronik.com/", // RPC URL of Swisstronik testnet
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Array of private keys (from .env)
    },
  },
};