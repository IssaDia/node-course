const express = require("express");
const experienceNoDevController = require("../controllers/experienceNoDev");
const router = express.Router();

router.get("/", experienceNoDevController.getExperienceNoDev);
router.post("/", experienceNoDevController.postExperienceNoDev);
router.put("/:id", experienceNoDevController.updateExperienceNoDev);
router.delete("/:id", experienceNoDevController.deleteExperienceNoDev);

module.exports = router;
