require('dotenv').config()

const express = require('express')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const app = express()

const regRouter = require('./routes/authentication.js')
const connectDB = require('./database/connection.js')
const authStrategy = require('./config/passport.js')
const User = require('./database/userModel.js')

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
app.use(passport.initialize())
app.use(passport.session())


app.get('/', (req, res) => {
  res.send('hello world')
})

app.use('/', regRouter)


async function startServer() {
  await connectDB()
  
  app.listen(process.env.EXPRESS_PORT, () => {
    console.log(`Server is started by ${process.env.EXPRESS_PORT}:port`)
  })
}

startServer()