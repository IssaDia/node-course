const express = require("express");
const router = express.Router();
const experienceDevController = require('../controllers/experienceDev')

router.post("/", experienceDevController.postExperienceDev);

router.get("/:userId", experienceDevController.getExperienceDev);

router.delete("/:id", experienceDevController.deleteExperienceDev);

router.put("/:id", experienceDevController.updateExperienceDev);

module.exports = router;
