const Header = require('../models/Header');
const User = require('../models/User');

exports.getHeader = (req, res) => {
  User
  Header.find({ userId: req.params.userId }).then((headers) =>
    res.status(200).json(headers)
  );
};

exports.updateHeader = (req, res) => {
  Header.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Header modifié" }))
    .catch((error) => res.status(400).json({ error }));
};