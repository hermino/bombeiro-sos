const bcrypt = require("bcryptjs")

const mongoose = require("../../database/index.database")

const RelatorioVisitaSchema = new mongoose.Schema({
  area_edificada: {
    type: String,
    require: true,
  },
  area_informada: {
    type: String,
    require: true,
  },
  rrt: {
    type: Boolean,
    require: true,
  },
  dare: {
    type: Boolean,
    require: true,
  },
  edificacao_terrea: {
    type: Boolean,
    require: true,
  },
  numero_pavimento: {
    type: Number,
    require: true,
  },
  edificacao_isolada: {
    type: Boolean,
    require: true,
  },
  salas: {
    ocupadas: { type: Number, required: true },
    desocupadas: { type: Number, required: true },
  },
  parede_unica: {
    type: Boolean,
    require: true,
  },
  abertura_interpredial: {
    type: Boolean,
    require: true,
  },
  tipo_abertura: {
    type: String,
    require: false,
  },
  armario_produtos_perigosos: {
    tipo: { type: String, required: false },
  },
  projeto_tecnico: {
    type: Boolean,
    require: true,
  },
  numero_cap: {
    type: Number,
    require: true,
  },
  sistema_atende: {
    type: Boolean,
    require: true,
  },

  funcao_relatorio: {
    type: Number,
    require: true,
  },

  medidas_seguranca: {
    saida_emergencia: {
      largura_portas: { type: Boolean, required: true },
      largura_escadas: { type: Boolean, required: true },
      piso_antiderrapante: { type: Boolean, required: true },
      guarda_corpo: { type: Boolean, required: true },
      desobstruidas: { type: Boolean, required: true },
      corrimao_ambos_lados: { type: Boolean, required: true },
      corrimao_mezanino: { type: Boolean, required: true },
      material_escada_incombustivel: { type: Boolean, required: true },
      barras_antipanico: { type: Boolean, required: true },
      outros_itens: { type: Boolean, required: true },
    },
    iluminacao_emergencia: {
      altura_instalacoes: { type: Boolean, required: true },
      distancia_luminarias: { type: Boolean, required: true },
      edificacao: { type: Boolean, required: true },
      moteis: { type: Boolean, required: true },
      teste_funcionamento: { type: Boolean, required: true },
      lotacao: { type: Boolean, required: true },
      outros_itens: { type: Boolean, required: true },
    },
    sinalizacao_emergencia: {
      altura_instalacoes: { type: Boolean, required: true },
      tamanho: { type: Boolean, required: true },
      cores: { type: Boolean, required: true },
      forma_geometrica: { type: Boolean, required: true },
      distancia_visualizacao: { type: Boolean, required: true },
      outros_itens: { type: Boolean, required: true },
    },
    hidrantes: {
      posicionamento: { type: Boolean, required: true },
      abrigos_desobstruidos: { type: Boolean, required: true },
      cobertura: { type: Boolean, required: true },
      bomba_automatico: { type: Boolean, required: true },
      botoeiras: { type: Boolean, required: true },
      pressurizacao_bomba: { type: Boolean, required: true },
      ligacao_independente: { type: Boolean, required: true },
      desligamento_bomba_manual: { type: Boolean, required: true },
      acessorios_abrigos: { type: Boolean, required: true },
      tubulacao: { type: Boolean, required: true },
      rti_independente: { type: Boolean, required: true },
      saida_consumo_predial: { type: Boolean, required: true },
      pressurizacao_gravidade: { type: Boolean, required: true },
      outros_itens: { type: Boolean, required: true },
    },
    extintores: {
      quantidade: { type: Boolean, required: true },
      instalacao: { type: Boolean, required: true },
      sinalizacao: { type: Boolean, required: true },
      desobstruidos: { type: Boolean, required: true },
      pressao: { type: Boolean, required: true },
      selo_inmetro_recarga: { type: Boolean, required: true },
      selo_inmetro_novos: { type: Boolean, required: true },
      outros_itens: { type: Boolean, required: true },
    },
    alarme_deteccao: {
      central_alarme: { type: Boolean, required: true },
      caminhamento: { type: Boolean, required: true },
      audivel: { type: Boolean, required: true },
      outros_itens: { type: Boolean, required: true },
    },
    detectores: {
      fumaca: {
        area: { type: Boolean, required: true },
        raio: { type: Boolean, required: true },
      },
      temperatura: {
        area: { type: Boolean, required: true },
        raio: { type: Boolean, required: true },
      },
    },
    chuveiros_automaticos: {
      acionamento: { type: Boolean, required: true },
      desligamento: { type: Boolean, required: true },
      saida_teste: { type: Boolean, required: true },
      outros_itens: { type: Boolean, required: true },
    },
    brigada_incendio: {
      acordo_memorial: { type: Boolean, required: true },
      treinamento: { type: Boolean, required: true },
      calculo_presente: { type: Boolean, required: true },
      fat: { type: Boolean, required: true },
      aprovacao_teste: { type: Boolean, required: true },
      outros_itens: { type: Boolean, required: true },
    },
    glp: {
      retirar_interior: { type: Boolean, required: true },
      utilizacao_central: { type: Boolean, required: true },
      quantidade: { type: Number, required: true },
      classe: { type: String, required: true },
      distancia_seguranca: { type: Boolean, required: true },
      outros_itens: { type: Boolean, required: true },
    },
  },
  status: {
    type: Boolean,
    required: true,
  },
  proprietario: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const RelatorioVisita = mongoose.model("RelatorioVisita", RelatorioVisitaSchema)

module.exports = RelatorioVisita;