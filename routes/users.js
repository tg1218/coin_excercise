const router = require('express').Router();
const {makeAccount} = require('../domain/account');

/* GET users listing. */
router.post('/new', makeAccount);

module.exports = router;
