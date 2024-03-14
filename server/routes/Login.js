const express = require('express')
const passport = require('passport')

const logRouter = express.Router()

logRouter.post('/login', passport.authenticate('jwt', {session: false}))

logRouter.get('/login/failed', (req, res) => {
  res.json({ msgErr: 'Email is invalid' })  // Send the Error msg
})
module.exports = logRouter;