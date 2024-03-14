const bcrypt = require('bcrypt')

const hashingPsw = async (psw) => {
  const ronud = 10 
  const salt = await bcrypt.genSalt(ronud)  // Create salt 
  const hashedPassword = await bcrypt.hash(psw, salt)  // Hasihng the password
  return hashedPassword // Return the hashed password
}

module.exports = hashingPsw