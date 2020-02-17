const { getOverview, makeTransaction } = require('../controllers/overview');
const express = require('express');
const router = express.Router();


router.route('/')
   .get(getOverview)
   .post(makeTransaction)

module.exports = router;
