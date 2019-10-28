const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  'divert hire staff cage lecture require plug shed size hub prefer salmon',
  'https://rinkeby.infura.io/v3/f8025fe66a4d4bf982516b769b8bab2d'
);
const web3 = new Web3(provider);

const deploy= async()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('deploying from account', accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode }) // add bytecode
    .send({ from: accounts[0] }); // remove gas

    console.log('Contract deployed to ', result.options.address);
};
deploy();