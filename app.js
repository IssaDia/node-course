const express = require('express');
const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose');
const app = express();


const formationRoutes = require('./routes/formation');
const headerRoutes = require("./routes/header");
const experienceNoDevRoutes = require("./routes/experiences_no_dev");
const experienceDevRoutes = require("./routes/experiences_dev");
const competenceHardRoutes = require("./routes/competences_hard");
const competenceSoftRoutes = require("./routes/competences_soft");
const signUpRoutes = require("./routes/sign_up")
const signInRoutes = require("./routes/sign_in");


mongoose.connect(
  `mongodb+srv://${process.env.NODE_LOGIN_MONGOOSE}:${process.env.NODE_PASSWORD_MONGOOSE}@cluster0.5rvch.mongodb.net/${process.env.NODE_DBNAME_MONGOOSE}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log("connextion à MongoDB réussie!")).catch(() => console.log("connexion a MongoDB échouée !")
);

app.use(cors());
app.use(express.json());
app.use('/api/formation',formationRoutes);
app.use("/api/header", headerRoutes);
app.use("/api/experience/noDevexp", experienceNoDevRoutes);
app.use("/api/experience/devexp", experienceDevRoutes);
app.use("/api/competences/hard", competenceHardRoutes);
app.use("/api/competences/soft", competenceSoftRoutes);
app.use("/api/auth/signin", signInRoutes);
app.use("/api/auth/signup", signUpRoutes);

module.exports = app