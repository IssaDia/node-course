const express = require('express');
const router = express.Router();
const formationController = require('../controllers/formation');

router.post("/", formationController.postFormation);

router.get("/:userId", formationController.getFormation);

router.delete("/:id", formationController.deleteFormation);

router.put("/:id", formationController.updateFormation);

module.exports = router;