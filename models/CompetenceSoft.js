const mongoose = require("mongoose");

const competenceSoftSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("CompetenceSofts", competenceSoftSchema);
