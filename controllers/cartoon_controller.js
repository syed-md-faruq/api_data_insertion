const axios=require('axios');
const cartoon = require('../models/cartoon_model');

exports.cartoon_post = async (req, res) => {
    try {
      const response_d = await axios.get('https://rickandmortyapi.com/api/character')
      await cartoon.insertMany(response_d.data.results)
      res.send("Data inserted into database")
    }
     catch (error) {
        res.status(500).send(error);
      }
  }