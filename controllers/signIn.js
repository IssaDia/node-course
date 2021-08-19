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
                res.status(400).send("Invalid Password.");
           } else {
               const id = user.id;
               const token = jwt.sign({id}, process.env.JWT_SECRET, {
                   expiresIn:300,
               })
               res.status(200).json({ auth:true, token, id })
           }
        }
        else {
             res.status(400).json({ auth: false, message:"no user exist " });
        }
    })
};

exports.isUserAuth = (req,res, next ) => {
    res.status(200).send("Congrats! You're authenticated");
    }


exports.verifyJWT = (req,res, next) => {
    const token = req.headers['x-access-token'];
    if(!token) {
        res.status(400).send('You don\'t have a token')
    } else {
        jwt.verify(token, process.env.JWT_SECRET,(err,decoded)=> {
            if(err) {
                res.json({auth:false, message:'You failed to authenticate'})
            } else {
                req.userId = decoded.id;
                next();
            }
        });
}
}