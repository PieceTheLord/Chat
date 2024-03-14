require('dotenv').config()

const jwt = require('jsonwebtoken')
const express = require('express')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')

const app = express()

const getUsersRouter = require('./routes/GetAllUsers.js')
const connectDB = require('./database/connection.js')
const authStrategy = require('./config/passport')
const regRouter = require('./routes/authentication.js')

const allowOrigin = [process.env.FRONT_END_URL]

app.use(express.json())
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 3,
  }
}))
app.use(cors({
  origin: allowOrigin,
  credentials: true,
}))
passport.initialize()
passport.use('auth', authStrategy)
app.use('/auth', [ regRouter ])

app.get('/', (req, res) => {
  res.send('hello world')
})

async function startServer() {
  await connectDB()

  app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server is started by ${process.env.EXPRESS_PORT}:port`)
  })
}

startServer()