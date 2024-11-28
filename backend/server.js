const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const Web3 = require('web3').default;
const web3 = new Web3('http://127.0.0.1:7545'); // replace with your node address

const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "UserDonation",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "UserPromotedToCharity",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "charityAddress",
				"type": "address"
			}
		],
		"name": "donateToCharity",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registerAsCharity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "registerAsUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalCharities",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalUsers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isCharity",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawDonations",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
] // replace with your contract's ABI
const contractAddress = '0x112e0ed78c64E9e5Ac4f8f0AE6FA069732F2265e' // replace with your contract's address
const contract = new web3.eth.Contract(contractABI, contractAddress);

app.use(bodyParser.json({ limit: '10mb' })); // Increase the limit for JSON data
console.log("hello server")

charity_add={
  "Charity 1": "0x302680Efd5EEe5878372Fb119552d3e2dC7b00a6",
  "Charity 2": "0xc534891712E5cc59AE58A956a614fF7C1e68326C",
  "Charity 3": "0x25E6C73B1EEE7e36e3cAbf87E00b72780E0D752f",
}

let accounts = [];

async function getAccounts() {
  accounts = await web3.eth.getAccounts();
}

getAccounts().then(() => {
  console.log(accounts); // Outputs the array of accounts
});

app.post('/donation', (req, res) => {
  const { amount, charity } = req.body;
  // Process the form data here, e.g., store it in a database.
  console.log('Received donation data:');
  console.log('Amount:', amount);
  const amountToSend = web3.utils.toWei(amount, 'ether');
  console.log('Charity:', charity);
  contract.methods.donateToCharity(charity_add[charity]).send({ from: accounts[0], value: amountToSend })
    .on('receipt', function(receipt){
        console.log(receipt);
    })
    .on('error', function(error, receipt) {
        console.log(error);
    });
  // Send a response (e.g., success message or error) back to the client.
  res.status(200).json({ message: 'Donation received successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
