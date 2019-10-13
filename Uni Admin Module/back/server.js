const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8000;
require("./mongo");
require("./model/uni.model");

app.use(bodyParser.json());
app.use(cors());

app.use("/universities", require("./routes/uni"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
