const router = require('express').Router();
const {getAccountInfo, makeAccount, transferEth} = require('../domain/account');

router.get('/', getAccountInfo);

router.post('/new', makeAccount);

router.post('/transfer', transferEth);

module.exports = router;
