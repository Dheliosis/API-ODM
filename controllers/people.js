/* eslint-disable no-console */
var { People } = require('../models/people');
var ObjectID = require('mongoose').Types.ObjectId;

exports.index = (req, res) => {
  console.log('get people');
  People.find((err, docs) => {
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
  People.findById(id, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      res.status(500).send(err)
    }
  })
}

exports.insert = (req, res) => {
  console.log(req.body);
  const people = req.body;
  const newPeople = new People(people);
  newPeople.save((err, docs) => {
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

  const people = req.body;

  People.findByIdAndUpdate(id, { $set: people }, { new: true }, (err, docs) => {
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

  People.findByIdAndRemove(id, (err, docs) => {
    const result = {
      data: docs,
      message: 'Person has been removed successfully.',
      status: 200,
    }

    if (!err) {
      res.status(200).send(result)
    } else {
      res.status(500).send(err)
    }
  })
}