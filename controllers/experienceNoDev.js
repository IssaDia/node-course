const ExperienceNoDev = require("./../models/ExperienceNoDev.js");

exports.getExperienceNoDev = (req, res, next) => {
  ExperienceNoDev.find({ userId: req.params.userId }).then((experience) => {
    res.status(200).json(experience);
  });
};

exports.postExperienceNoDev = (req, res, next) => {
  const experience = new ExperienceNoDev({ ...req.body });

  experience
    .save()
    .then(() => {
      res.status(201).json({ message: "Experience successfully inserted." });
    })
    .catch(() => {
      res.status(400).json({ message: "Failed to insert experience." });
    });
};

exports.updateExperienceNoDev = (req, res, next) => {
  ExperienceNoDev.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() =>
      res.status(200).json({ message: "Experience successfully updated." })
    )
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteExperienceNoDev = (req, res, next) => {
  ExperienceNoDev.deleteOne({ _id: req.params.id })
    .then(() =>
      res.status(200).json({ message: "Experience successfully deleted." })
    )
    .catch((error) => res.status(400).json({ error }));
};
