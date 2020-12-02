const User = require('../models/user.model')

module.exports =  {
 dados (data = new User ()) {
  const Data = {
    Nome: data.name,
    Sobrenome: data.last_name,
    Patente: data.patent,
    "Numero de Registro": data.register_number,
    Email: data.email
  }
  return Data
},
dadosForAdmin (data = new User ()) {
  const Data = {
    Nome: data.name,
    Sobrenome: data.last_name,
    Patente: data.patent,
    "Numero de Registro": data.register_number,
    Email: data.email,
    Admin: data.admin,
    Autorizado: data.authorized,
    Criado: data.createdAt
  }
  return Data
},
RenderMany (users = new User()) {
    return users.map(todo => this.dadosForAdmin(todo))
  }
}







