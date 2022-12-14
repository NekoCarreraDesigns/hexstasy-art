const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("Hexstasy0");
        console.log("Successfully connected to mongoDB");
      }
      return callback(err);
    });
  },
  getDb: function () {
    return _db;
  },
};
