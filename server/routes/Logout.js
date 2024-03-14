const express = require('express')

const logoutRouter = express.Router()

logoutRouter.post('/logout', (req, res, next) => {
  req.logout(err => {  // * Start logging out the user basing the passport configuration
    if (err) return next(err)
    return res.status(200).json({ msg: 'Logged out Successfully' })  // Send the good response to the front-end
  })
})
module.exports = logoutRouter;