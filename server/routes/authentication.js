const User = require('../database/userModel');
const jwt = require('jsonwebtoken');
const express = require('express');
const hashingPsw = require('../util/hashingPassword');


const regRouter = express.Router();

regRouter.post('/reg', async (req, res, next) => {
  const { name, email, psw, avatar } = req.body;
  const hashedPsw = await hashingPsw(psw)

  
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(401).json({ msgErr: 'Email is invalid' });
    }

    const newUser = new User({
      name,
      email,
      psw: hashedPsw,
      avatar,
    });
    newUser.save()
      .then(data => {
        const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(201).json({ data, token})
      })
      .catch(err => {
         console.error(err);
       })


  } catch (err) {
    console.error(err);
  }
});

module.exports = regRouter;