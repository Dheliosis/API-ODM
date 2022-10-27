/* eslint-disable no-console */
var { Vehicle } = require('../models/vehicle');
var ObjectID = require( 'mongoose'). Types.ObjectId;
exports.index = (req, res ) => {
  console.log('get vehicle');
  Vehicle.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};