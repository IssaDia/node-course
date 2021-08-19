const express = require("express");
const router = express.Router();
const CompetenceSoftController = require("../controllers/competenceSoft");


router.post("/", CompetenceSoftController.postCompetenceSoft);

router.get("/:userId", CompetenceSoftController.getCompetenceSoft);

router.delete("/:id", CompetenceSoftController.deleteCompetenceSoft);

router.put("/:id", CompetenceSoftController.updateCompetenceSoft);

module.exports = router;
