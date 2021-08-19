const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const Header = require("./../models/Header.js")

exports.signUp = async (req, res, next) => {
    await User
    .findOne({mail : req.body.mail})
    .then(((user)=>{
     if (user) {
       res.status(400).send({ message: "Failed! Username is already in use!" });
     } else {
       const user = new User({
         username: req.body.username,
         mail: req.body.mail,
         password: bcrypt.hashSync(req.body.password, 8),
       });
       user.save().then((user)=> {
          const header = new Header({
            name: "Prénom et Nom",
            job:"Intitulé du poste",
            phone:"Number",
            mail:"Mail",
            portfolio: "Portfolio",
            userId: user._id
          });
          header.save().then(()=> {
            console.log('Header crée');
          })
       })
       res.status(200).send({ message: "Username is saved in database!" });
     }
    }))
    .catch((error) => res.status(400).json({ error }));
}