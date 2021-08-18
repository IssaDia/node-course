const express = require("express");
const router = express.Router();
const signUpController = require('../controllers/signUp');

router.post("/", signUpController.signUp);

module.exports = router;
