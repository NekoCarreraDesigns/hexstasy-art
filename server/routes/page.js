const express = require("express");
const pageRoutes = express.Router();
const db = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

pageRoutes.route("/user").get(function (req, res) {
  let db_connect = db.getDb("Hexstasy0");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

pageRoutes.route("/user/add").post(function (req, response) {
  let db_connect = db.getDb();
  let userObj = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  db_connect.collection("users").insertOne(userObj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

pageRoutes.route("/user/update").post(function (req, response) {
  let db_connect = db.getDb();
  let myQuery = { _id: ObjectId(req.params.id) };
  let newValues = {
    $set: {
      name: req.body.name,
      email: req.body.email,
    },
  };
  db_connect
    .collection("users")
    .updateOne(myQuery, newValues, function (err, res) {
      if (err) throw err;
      console.log("User updated");
      response.json(res);
    });
});

module.exports = pageRoutes;
