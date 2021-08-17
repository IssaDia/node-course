const ExperienceDev = require("./../models/ExperienceDev.js");

exports.getExperienceDev = (req, res, next) => {
  ExperienceDev.find().then((experience) => {
    res.status(200).json(experience);
  });
};

exports.postExperienceDev = (req, res, next) => {
  const experience = new ExperienceDev({ ...req.body });

  experience
    .save()
    .then(() => {
      res.status(201).json({ message: "Experience successfully inserted." });
    })
    .catch(() => {
      res.status(400).json({ message: "Failed to insert experience." });
    });
};

exports.updateExperienceDev = (req, res, next) => {
  ExperienceDev.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() =>
      res.status(200).json({ message: "Experience successfully updated." })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteExperienceDev = (req, res, next) => {
  ExperienceDev.deleteOne({ _id: req.params.id })
    .then(() =>
      res.status(200).json({ message: "Experience successfully deleted." })
    )
    .catch((error) => res.status(400).json({ error }));
};
