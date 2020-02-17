const express = require('express');
const router = express.Router();
const { getTransactions } = require('../controllers/transaction');

router.route('/')
   .get(getTransactions)

module.exports = router;
