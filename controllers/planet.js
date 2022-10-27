/* eslint-disable no-console */
var { Planet } = require('../models/planet');
var ObjectID = require( 'mongoose'). Types.ObjectId;
exports.index = (req, res ) => {
  console.log('get planet');
  Planet.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};