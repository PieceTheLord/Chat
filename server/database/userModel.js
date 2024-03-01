require('dotenv').config()

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  name: {
    require: true,
    type: String,
    unique: true
  },
  email: {
    require: true,
    type: String,
    unique: true
  },
  password: {
    require: true,
    type: String,
  },
  description: {
    tpye: String,
  },
},)

const User = mongoose.model('Users', userSchema)

module.exports = User