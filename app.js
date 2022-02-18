const express = require('express');
const logger = require('morgan');
const PORT = 3000;
const Web3 = require('web3');
const ganacheChainAddress = "http://localhost:7545";

const web3 = new Web3(ganacheChainAddress);
global.web3 = web3;
web3.eth.getAccounts().then((accounts)=>{
  console.log(accounts);
  global.ganacheAccounts = accounts;
})

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());

app.get('/', (req, res)=>{
  res.send('Hello!!');
})

app.listen(PORT, ()=>{
  console.log('Server Start!!');
})
