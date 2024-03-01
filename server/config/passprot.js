const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../database/userModel')
const bcrypt = require('bcrypt')

const authStrategy = new LocalStrategy({
  userNameField: 'username',
  emailField: 'email',
  passwordField: 'password',
}, (name, email, password, description, avatar, done ) => {
  
  User.findOne({ name })
    .then(async user => {
      if (!user) {
        return done(null, false, { msgErr: "such nickname is alreadey exist"})
      }

      console.log(user, 'This user registered!')
    })
})

passport.use(authStrategy)
passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err))
})


module.exports = authStrategy