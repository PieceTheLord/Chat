const JWTStrategy = require('passport-jwt').Strategy;
const JWTExract = require('passport-jwt').ExtractJwt;
const hashedPassword = require('../util/hashingPassword')

const User = require('../database/userModel');

const authStrategy = new JWTStrategy({
  jwtFromRequest: JWTExract.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}, async (payload, done) => {

  const existingUser = await User.findOne({ email: payload.email })
  if (!existingUser) {
    return done(null, false, { msgErr: "Emila or password is invalid" });
  }

  const compare = await bcrypt.compare(existingUser.psw, hashedPassword(payload.password));
    if (compare) {
      return done(null, existingUser);
    }
  return done(null, false, { msgErr: "Eamil or password is incorrect" });
});

module.exports = authStrategy;
