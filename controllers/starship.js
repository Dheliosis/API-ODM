/* eslint-disable no-console */
var { Starship } = require('../models/starship');
var ObjectID = require( 'mongoose'). Types.ObjectId;
exports.index = (req, res ) => {
  console.log('get starship');
  Starship.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};