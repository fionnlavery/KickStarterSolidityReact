import web3 from  './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x59933Ba0E6112023fF2DA7B394CfC56BBC18104A'
);

export default instance;