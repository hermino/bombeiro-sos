
const Relatorio = require('../models/relatorio-visita.model')

module.exports = {
  dados(data = new Relatorio()){
    const Data = {
      "ID relatorio": data._id,
      "Área Identificada": data.area_edificada,
      "Proprietário": data.proprietario,
      "Bombeiro": data.user.last_name,
      "Status": data.status
    }
    return Data
  },
  dadosForAdmin(data = new Relatorio()){
    const Data = {
      "ID relatorio": data._id,
      "Área Identificada": data.area_edificada,
      "Proprietário": data.proprietario,
      "Bombeiro": data.user.last_name,
      "Status": data.status
    }
    return Data
  },
  RenderMany(relatorios = new Relatorio()){
    return relatorios.map(todo => this.dados(todo))
  },
  RenderManyAdmin(relatorios = new Relatorio()){
    return relatorios.map(todo => this.dadosForAdmin(todo))
  }
}
