require('dotenv').config()

const mongoose = require('mongoose')

const User = require('./userModel')


async function connectDB(){
  try{
    await mongoose.connect(process.env.DATABASE_URL)
      .then(console.log("Database started successfuly"))
      .catch(err => console.error('Database`s connection is failed', err))
  } catch (err) {
    console.error("Connection to database err -", err);
  }
}

module.exports = connectDB
