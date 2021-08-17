const mongoose = require('mongoose');

const headerSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  job: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  mail: {
    type: String,
    require: true,
  },
  porfolio: {
    type: String,
    require: true,
  },
});

module.exports= mongoose.model('Header', headerSchema)