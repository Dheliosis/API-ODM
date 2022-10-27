/* eslint-disable no-console */
var { Specie } = require('../models/specie');
var ObjectID = require( 'mongoose'). Types.ObjectId;
exports.index = (req, res ) => {
  console.log('get specie');
  Specie.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};