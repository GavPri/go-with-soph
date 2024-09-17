const { Signup } = require("../controllers/AuthContollers");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;
