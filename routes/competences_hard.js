const express = require("express");
const router = express.Router();
const CompetenceHardController = require('../controllers/competenceHard')

router.post("/", CompetenceHardController.postCompetenceHard);

router.get("/:userId", CompetenceHardController.getCompetenceHard);

router.delete("/:id", CompetenceHardController.deleteCompetenceHard);

router.put("/:id", CompetenceHardController.updateCompetenceHard);

module.exports = router;
