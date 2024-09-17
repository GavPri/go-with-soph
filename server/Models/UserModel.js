// * requiremnts for user model

const mongoose = require('mongoose');
const bcrypt = require('bcrypt')

// * user schema 

const userSchema = new mongoose.Schema({
    email:{},
    username:{},
    password:{},
    createdAt:{}
})