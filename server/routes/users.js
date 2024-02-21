
const express = require('express')

const regRouter = express.Router()


regRouter.post('signup', async (req, res, next) => {
  const { avatar, name, des, email, password } = req.body

  if (i in [name, email, password] == null){
    return res.status(400).json({ err: "All of these field must be filled"})
  }
})