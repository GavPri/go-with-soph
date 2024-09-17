const express = require("express");
const router = express.Router();
const cors = require("cors");

// * middleware
router.use(
  cors({
    credentials: true,
    origin: "*",
  })
);

router.post('/register', registerUser)

module.exports = router;