# Decentralized Ethereum App

## Overview

The Decentralized Ethereum App is a study application that simulates a decentralized Ethereum bank. It allows users to perform basic banking operations, such as sending transactions and checking account balances, using the Ethereum blockchain.

## Dependencies

The application has the following dependencies:

- Node.js (version 12 or higher)
- Express.js (version 4.18.2)
- Web3.js (version 1.10.0)
- Body-parser (version 1.20.2)
- Dotenv (version 16.1.2)

## Compatibility

The application is compatible with Node.js version 12 or higher. It is recommended to use the latest stable version of Node.js for optimal performance and security.

## Main Functionality

The  App offers the following main functionalities:

1. **Sending Transactions**: Users can send transactions from one Ethereum address to another. The application calculates the required gas price and gas limit automatically. Users need to provide the sender's address, receiver's address, and the amount of Ether to be sent.

2. **Checking Account Balances**: Users can check the account balance of a specific Ethereum address. The application retrieves the balance from the Ethereum blockchain and presents it in Ether.

## Configuration: .env File

To configure the application, you need to create a `.env` file in the project root directory. The `.env` file should contain the following environment variables:

- `API_PORT`: The port number on which the server will listen for incoming requests. For example, `API_PORT=3000`.

- `BLOCKCHAIN_NETWORK`: The URL of the Ethereum network to connect to. It should be a valid Ethereum provider URL. For example, `BLOCKCHAIN_NETWORK=https://mainnet.infura.io/v3/your-infura-project-id`.

- `PRIVATE_KEY`: The private key associated with the Ethereum address used to send transactions and check balances. This key is required for account validation. For example, `PRIVATE_KEY=0xYourPrivateKey`.

Make sure to replace the placeholder values (`your-infura-project-id` and `YourPrivateKey`) with your actual values.

## Conclusion

The Decentralized Ethereum Study App is a simple application that provides a hands-on experience with Ethereum blockchain development. It allows users to interact with the Ethereum network, send transactions, and check account balances. By studying and experimenting with this application, users can gain practical knowledge of decentralized applications and the Ethereum ecosystem.

To get started, ensure that Node.js is installed, install the project dependencies using `npm install`, configure the `.env` file, and run the application using `node index.js` or `npm start`.