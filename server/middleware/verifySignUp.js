const db = require("../models");
const User = db.user;

checkDuplicateEmailOrUserName = (req, res, next) => {
  User.findOne({
    username: req.body.username,
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Username already exists!" });
      return;
    }

    User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (user) {
        res.status(400).send({ message: " Email already in use!" });
      }
    });
  });
};

const verifySignUp = {
  checkDuplicateEmailOrUserName,
};

module.exports = verifySignUp;
