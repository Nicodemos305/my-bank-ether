const Web3 = require('web3');

class EtherService {
  constructor(providerUrl) {
    this.web3 = new Web3(providerUrl);
  }

  async sendTransaction(fromAddress, toAddress, privateKey, value) {
    try {
      const nonce = await this.web3.eth.getTransactionCount(fromAddress);
      const gasPrice = await this.web3.eth.getGasPrice();
      const gasLimit = 21000;

      const txObject = {
        from: fromAddress,
        to: toAddress,
        value,
        nonce,
        gasPrice,
        gasLimit,
      };

      const signedTx = await this.web3.eth.accounts.signTransaction(txObject, privateKey);
      const receipt = await this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);

      return receipt.transactionHash;
    } catch (error) {
      throw new Error('Erro ao enviar a transação');
    }
  }

  isAccountValid(publicKey, privateKey) {
    try {
      const account = this.web3.eth.accounts.privateKeyToAccount(privateKey);
      return account.address.toLowerCase() === publicKey.toLowerCase();
    } catch (error) {
      return false;
    }
  }


  async getBalance(address) {
    try {
      const balance = await this.web3.eth.getBalance(address);
      return this.web3.utils.fromWei(balance, 'ether');
    } catch (error) {
      throw new Error('Erro ao obter o saldo da conta');
    }
  }
}

module.exports = EtherService;
