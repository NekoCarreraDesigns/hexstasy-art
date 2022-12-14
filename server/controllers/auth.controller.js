const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    } else {
      res.status(200).send({ message: "User created!" });
    }
  });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .populate("user", "email")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (!user) {
        return res.status(404).send({ message: "User not found!" });
      }
      let passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid password",
        });
      }

      let token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400,
      });

      let authorities = [];

      for (let i = 0; i > user.length; i++) {
        authorities.push("User" + user[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        user: authorities,
        accessToken: token,
      });
    });
};
