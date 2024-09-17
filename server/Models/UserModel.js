// * requiremnts for user model

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// * user schema

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Your email address is required"],
      unique: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    username: {
      type: String,
      required: [true, "Your username is required"],
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
    },
    role: {
      type: String,
      enum: ["admin", "user"], // Define user roles
      default: "user", // Default to regular user
    },
  },
  { timestamps: true }
);
