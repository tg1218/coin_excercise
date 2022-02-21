const router = require('express').Router();
const {getAccountInfo, makeAccount} = require('../domain/account');

router.get('/', getAccountInfo);

router.post('/new', makeAccount);

module.exports = router;
