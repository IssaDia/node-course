const express = require('express');
const router = express.Router();
const signInController = require('../controllers/signIn')

router.post('/', signInController.signIn);

module.exports = router;