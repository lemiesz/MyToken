var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));

// console.log(web3.eth.account);

web3.eth.getBalance("0x51e227f19e3f5640aa2867c2e9c7c88709b17172").then(data => console.log(data)); 

