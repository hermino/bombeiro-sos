
const User = require('../models/user.model')

module.exports =  {
 dados (data = new User ()) {
  const Data = {
    name: data.name,
    last_name: data.last_name,
    patent: data.patent,
    register_number: data.register_number,
    email: data.email
  }
  return Data
},
RenderMany (users = new User()) {
    return users.map(todo => this.dados(todo))
  }
}







