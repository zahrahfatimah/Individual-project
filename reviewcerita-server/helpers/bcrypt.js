const bcrypt = require('bcryptjs')

const hash = (password) =>{
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

const compare = (password, hassedPass) =>{
  return bcrypt.compareSync(password, hassedPass)
} 

module.exports = { hash, compare }