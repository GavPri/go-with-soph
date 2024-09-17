const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const { MONGODB_URL, PORT } = process.env;

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log("MONGODB is connected."))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server is listenting on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://local.host:4000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(express.json());

app.use("/signup", authRoute);
