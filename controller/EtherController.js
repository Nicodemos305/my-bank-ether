const web3 = require('web3');
const EtherService = require('../service/EtherService');
require('dotenv').config();

const BLOCKCHAIN_NETWORK = process.env.BLOCKCHAIN_NETWORK
const etherService = new EtherService(BLOCKCHAIN_NETWORK);

const sendTransaction = async (req, res) => {
  const { fromAddress, toAddress, sendValue } = req.body;
  const privateKey = process.env.PRIVATE_KEY;
  const value = web3.utils.toWei(sendValue, 'ether');

  try {
    let isValidAccount = etherService.isAccountValid(fromAddress, privateKey);

    if (isValidAccount) {
      const transactionHash = await etherService.sendTransaction(fromAddress, toAddress, privateKey, value);
      res.json({ transactionHash });
    } else {
      res.status(500).json({ error: 'Conta inválida' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao enviar a transação' });
  }
};

const getBalance = async (req, res) => {
  const address = req.params.address;
  const privateKey = process.env.PRIVATE_KEY;

  try {
    let isValidAccount = etherService.isAccountValid(address, privateKey);
    if (isValidAccount) {
      const balance = await etherService.getBalance(address);
      res.json({ address, balance });
    } else {
      res.status(500).json({ error: 'Erro ao obter o saldo da conta' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o saldo da conta' });
  }
};

module.exports = {
  sendTransaction,
  getBalance
};