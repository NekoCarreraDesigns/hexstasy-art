const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000;
require("./app/routes/auth.routes").app();
require("./app/routes/user.routes").app();

app.use(cors());
app.use(express.json());
app.use(require("./routes/page"));
const db = require("./db/conn");

app.listen(port, () => {
  db.connectToServer(function (err) {
    if (err) console.log(err);
  });
  console.log(`Server is running on ${port}`);
});
