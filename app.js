const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Header = require('./models/Header');
const Formation = require('./models/Formation');
const app = express()

mongoose.connect(
  "mongodb+srv://jazzy69:Shyrone59@cluster0.5rvch.mongodb.net/formationIT?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log("connextion à MongoDB réussie!")).catch(() => console.log("connexion a MongoDB échouée !")
);

app.use(cors());
app.use(express.json());

app.get("/api/header", (req, res, next) => {
  Header.find().then((headers) => res.status(200).json(headers));
});

app.post("/api/formation", (req, res, next) => {
  const formation = new Formation({...req.body})
  formation.save().then(()=>res.status(201).json({message: 'OK'})).catch(error=>res.status(400).json({error}))
});

app.get('/api/formation', (req,res,next) => {
  Formation.find().then((formations) => res.status(200).json(formations));
})

module.exports = app