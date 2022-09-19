const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided" });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};

isUser = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    User.find(
      {
        _id: { $in: user },
      },
      (err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        for (let i = 0; i < user.length; i++) {
          if (user[i].name === true) {
            next();
            return;
          }
        }
        res.status(403).send({ message: "Invalid user" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  isUser,
};

module.export = authJwt;
