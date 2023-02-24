const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    id: {
      type: Number,
  },
  name: {
      type: String,
  },
  status: {
      type: String,
  },
  species: {
      type: String,
  },
  type: {
      type: String,
  },
  gender: {
      type: String,
  },
  origin: {
        name:{type:String},
        url:{type:String}
  },
  location: {
        name:{type:String},
        url:{type:String}
    },
  image: {
        type: String,
    },
    episode: {
        type: [String],
    },
    url: {
        type: String,
  },
  created:{
    type:String
  }
});

module.exports = mongoose.model("cartoon", userschema);