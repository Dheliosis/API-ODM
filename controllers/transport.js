/* eslint-disable no-console */
var { Transport } = require('../models/transport');
var ObjectID = require( 'mongoose'). Types.ObjectId;
exports.index = (req, res ) => {
  console.log('get transport');
  Transport.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};