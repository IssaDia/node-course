const CompetenceHard = require("./../models/CompetenceHard.js");

exports.getCompetenceHard = (req, res, next) => {
  CompetenceHard.find().then((competence) => {
    res.status(200).json(competence);
  });
};

exports.postCompetenceHard = (req, res, next) => {
  const competence = new CompetenceHard({ ...req.body });

  competence
    .save()
    .then(() => {
      res.status(201).json({ message: "Competence successfully inserted." });
    })
    .catch(() => {
      res.status(400).json({ message: "Failed to insert competence." });
    });
};

exports.updateCompetenceHard = (req, res, next) => {
  CompetenceHard.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() =>
      res.status(200).json({ message: "Competence successfully updated." })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteCompetenceHard = (req, res, next) => {
  CompetenceHard.deleteOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() =>
      res.status(200).json({ message: "Competence successfully deleted." })
    )
    .catch((error) => res.status(400).json({ error }));
};
