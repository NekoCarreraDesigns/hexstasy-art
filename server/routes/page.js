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

module.exports = pageRoutes;
