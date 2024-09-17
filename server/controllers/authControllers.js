const User = require("../models/authModels");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // * Check if name was enetered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // * check for password
    if (!password || password.length < 8) {
      return res.json({
        error: "Password required to be 8 or more characters.",
      });
    }
    const exists = await User.findOne({ email });
    if (exists) {
      return res.json({
        error: "This email adress is taken",
      });
    }
    let role = "user";
    const authorEmail = "sophie@gmail.com";
    if (email === authorEmail) {
      role = "author";
    }

    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {}
};
