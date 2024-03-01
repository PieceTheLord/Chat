const express = require('express')

const regRouter = express.Router()
const User = require('../database/userModel')



regRouter.post('/signup', async (req, res, next) => {
  const { avatar, name, des, email, password } = req.body
  const user = {
    name,
    email,
    password,
    avatar,
    des,
  }
  console.log('request is gone')
  res.status(200).json({data: user})
  req.session.confirmCode = 300
})

regRouter.get('/signup', (req, res, next) => {
  res.send(`The code `)
})

module.exports = regRouter;