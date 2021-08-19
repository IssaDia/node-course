const CompetenceSoft = require("./../models/CompetenceSoft.js");

exports.getCompetenceSoft = (req, res, next) => {
  CompetenceSoft.find({ userId: req.params.userId }).then((competence) => {
    res.status(200).json(competence);
  });
};

exports.postCompetenceSoft = (req, res, next) => {
  const competence = new CompetenceSoft({ ...req.body });

  competence
    .save()
    .then(() => {
      res.status(201).json({ message: "Competence successfully inserted." });
    })
    .catch(() => {
      res.status(400).json({ message: "Failed to insert competence." });
    });
};

exports.updateCompetenceSoft = (req, res, next) => {
  CompetenceSoft.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() =>
      res.status(200).json({ message: "Competence successfully updated." })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteCompetenceSoft = (req, res, next) => {
  CompetenceSoft.deleteOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() =>
      res.status(200).json({ message: "Competence successfully deleted." })
    )
    .catch((error) => res.status(400).json({ error }));
};
