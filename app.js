const express = require('express');
const logger = require('morgan');
const app = express();
const PORT = 3000;
const Web3 = require('web3');
const ganacheChainAddress = "http://localhost:7545";

// Web3
const web3 = new Web3(ganacheChainAddress);
global.web3 = web3;
web3.eth.getAccounts().then((accounts)=>{
  console.log(accounts);
  global.ganacheAccounts = accounts;
})


// view engine setup
app.use(logger('dev'));
app.use(express.json());

// routing
const users = require('./routes/users');

app.use('/users', users);

app.get('/', (req, res)=>{
  res.send('Hello!!');
})

app.listen(PORT, ()=>{
  console.log('Server Start!!');
})
