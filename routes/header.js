const express = require('express');
const router = express.Router();
const headerController = require('../controllers/header');

router.get("/:userId",headerController.getHeader);
router.put("/:id", headerController.updateHeader)

module.exports = router;
