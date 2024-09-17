const { SignUp } = require("../controllers/AuthContollers");
const router = require("express").Router();

router.post("/signup", SignUp);

module.exports = router;
