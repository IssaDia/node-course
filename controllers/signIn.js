const User = require('../models/User');
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signIn = async (req, res, next) => {
     const user = User.findOne({mail: req.body.mail})
    .then((user) =>{
        if(user){
            const validPassword = bcrypt.compare(
              req.body.password,
              user.password
            );
           if (!validPassword) {
                res.status(400).send("Invalid Email or Password.");
           } else {
               res.status(200).send("User exists!")
           }
        }
    })
};