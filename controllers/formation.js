const Formation = require('../models/Formation');

exports.postFormation = (req, res, next) => {
  const formation = new Formation({ ...req.body });
  formation
    .save()
    .then(() => res.status(201).json({ message: "OK" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getFormation = (req, res, next) => {
  Formation.find().then((formations) => res.status(200).json(formations));
};

exports.deleteFormation = (req, res, next) => {
  Formation.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Formation supprimée" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateFormation = (req, res, next) => {
  Formation.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Formation modifiée" }))
    .catch((error) => res.status(400).json({ error }));
};