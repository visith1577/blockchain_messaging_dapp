const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./inbox');

const provider = new HDWalletProvider(
    'ritual prepare wonder expose festival spray seminar play cabin infant fatigue cheese',
    'https://rinkeby.infura.io/v3/31a14e4cf1e04b2ea5339c22c410fb31'
);

const web3 = new Web3(provider);

const deploy = async () => {
    accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy accounts', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data : bytecode, arguments : ['Hi there!']})
    .send({gas : '1000000', from : accounts[0]});

    console.log('Contract deployed to', result.options.address);

};

deploy();