/* eslint-disable no-console */
var { Starship } = require('../models/starship');
var ObjectID = require('mongoose').Types.ObjectId;
exports.index = (req, res) => {
  console.log('get starship');
  Starship.find((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
};

exports.searchById = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(400).send(`No record with given id: ${id}`)
  }
  Starship.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
}

exports.insert = (req, res) => {
  console.log(req.body);
  const starship = req.body;
  const newStarship = new Starship(starship);
  newStarship.save((err, docs) => {
    if (!err) {
      res.status(201).send(docs)
    } else {
      res.status(500).send(err)
    }
  });
}

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(`update with given id: ${id}`);

  if (!ObjectID.isValid(id)) {
    return res.status(400).send(`No record with given id: ${id}`)
  }

  const starship = req.body;

  Starship.findByIdAndUpdate(id, { $set: starship }, { new: true }, (err, docs) => {
    if (!err) {
      res.status(200).send(docs)
    } else {
      console.log('Error while updating the data' + JSON.stringify(err, undefined, 2))
    }
  })
}

exports.delete = (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.send(400).send(`No record with given id: ${id}`)
  }

  Starship.findByIdAndRemove(id, (err, docs) => {
    const result = {
      data: docs,
      message: 'Starship has been removed successfully.',
      status: 200,
    }

    if (!err) {
      res.status(200).send(result)
    } else {
      res.status(500).send(err)
    }
  })
}