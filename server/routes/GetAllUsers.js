const express = require('express')
const getUsersRouter = express.Router()
const User = require('../database/userModel')

getUsersRouter.get('/getUsers', (req, res, next) => {
  User.find({})
    .then(data => {
      return res.json(data)
    })
})
module.exports = getUsersRouter;