const express = require('express');
const router = express.Router();
const signInController = require('../controllers/signIn')

router.post('/', signInController.signIn);
router.get("/isUserAuth",signInController.verifyJWT, signInController.isUserAuth);

module.exports = router;