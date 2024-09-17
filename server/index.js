const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const { MONGODB_URL, PORT } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => console.log(err));

// * middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
