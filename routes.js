
const express = require('express');
const router = express.Router();
const  { sendTransaction, getBalance }  = require('./controller/EtherController')

router.post('/sendTransaction', sendTransaction);
router.get('/balance/:address', getBalance);

module.exports = router;
