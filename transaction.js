var Web3 = require('web3');
var web3 = new Web3();
//Connecting to the running ethereum node
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));
 
console.log('Ethereum-NodeJS App started.');
console.log('Web3.js - Api version: '+web3.version.api+' Node: '+web3.version.node+' Ethereum: '+web3.version.ethereum+'\n');
 
// Store the hash of the transaction sent
var trxSent;
 
//Get accounts's address
var addr_account_0 = web3.eth.accounts[0];
var addr_account_1 = web3.eth.accounts[1];
 
//Unlock the account to be able to execute the transaction
web3.personal.unlockAccount(addr_account_0,'password');
//Listen the blockchain and wait the block with the transaction
web3.eth.filter('latest', function(error, result){
  if (error){
    console.log(&amp;quot;Error occurred: &amp;quot;+err);
  }else{
    var block = web3.eth.getBlock(result);
    console.log('---BLOCK MINED ['+block.number+']---');
    //Check if trx is in this block
  if(block.transactions.indexOf(trxSent)&amp;gt;-1){
    var balance_0 = web3.fromWei(web3.eth.getBalance(addr_account_0),'ether');
    var balance_1 = web3.fromWei(web3.eth.getBalance(addr_account_1),'ether');
    console.log('Transaction mined: '+trxSent+'\nBalance[0]: '+balance_0+'\nBalance[1]: '+balance_1+'\n');
  }
 }
});
 
//Execute the transaction (value expressed in Wei)
web3.eth.sendTransaction({from:addr_account_0,to:addr_account_1,value:'1000000000000000000'},function (err,trx){
  if(err){
    console.log('Error occurred: ' + err);
  }else{
    trxSent = trx;
    var balance_0 = web3.fromWei(web3.eth.getBalance(addr_account_0),'ether';);
    var balance_1 = web3.fromWei(web3.eth.getBalance(addr_account_1),'ether');
    console.log('Transaction executed - HASH: '+trx+'- WAITING TO BE MINED');
    console.log('Sent 1 ether from ACCOUNT_0 ('+addr_account_0+') to ACCOUNT_1 ('+addr_account_1+')\nBalance[0]: '+balance_0+'\nBalance[1]: '+balance_1+'\n');
  }
});