require('dotenv').config()

const mongoose = require('mongoose')


const database = mongoose.createConnection(process.env.DATABASE_URL)

