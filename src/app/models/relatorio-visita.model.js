const mongoose = require('../database/index')

const RelatorioVisitaSchema = new mongoose.Schema({
  area_edificada: {
    type: String,
    require: true
  },
  area_informada: {
    type: String,
    require: true
  },
  rrt: {
    type: Number,
    require: true
  },
  dare: {
    type: Number,
    require: true
  },
  edificacao_terrea: {
    type: Number,
    require: true
  },
  numero_pavimento: {
    type: Number,
    require: true
  },
  edificacao_isolada: {
    type: Number,
    require: true
  },
  salas: {
    ocupadas: { type: Number, required: true },
    desocupadas: { type: Number, required: true }
  },
  parede_unica: {
    type: Number,
    require: true
  },
  abertura_interpredial: {
    type: Number,
    require: true
  },
  tipo_abertura: {
    type: String,
    require: false
  },
  armario_produtos_perigosos: {
    tipo: { type: String, required: false }
  },
  projeto_tecnico: {
    type: Number,
    require: true
  },
  numero_cap: {
    type: Number,
    require: true
  },
  sistema_atende: {
    type: Number,
    require: true
  },

  funcao_relatorio: {
    type: Number,
    require: true
  },

  medidas_seguranca: {
    saida_emergencia: {
      largura_portas: { type: Number, required: true },
      largura_escadas: { type: Number, required: true },
      piso_antiderrapante: { type: Number, required: true },
      guarda_corpo: { type: Number, required: true },
      desobstruidas: { type: Number, required: true },
      corrimao_ambos_lados: { type: Number, required: true },
      corrimao_mezanino: { type: Number, required: true },
      material_escada_incombustivel: { type: Number, required: true },
      barras_antipanico: { type: Number, required: true },
      outros_itens: { type: Number, required: true }
    },
    iluminacao_emergencia: {
      altura_instalacoes: { type: Number, required: true },
      distancia_luminarias: { type: Number, required: true },
      edificacao: { type: Number, required: true },
      moteis: { type: Number, required: true },
      teste_funcionamento: { type: Number, required: true },
      lotacao: { type: Number, required: true },
      outros_itens: { type: Number, required: true }
    },
    sinalizacao_emergencia: {
      altura_instalacoes: { type: Number, required: true },
      tamanho: { type: Number, required: true },
      cores: { type: Number, required: true },
      forma_geometrica: { type: Number, required: true },
      distancia_visualizacao: { type: Number, required: true },
      outros_itens: { type: Number, required: true }
    },
    hidrantes: {
      posicionamento: { type: Number, required: true },
      abrigos_desobstruidos: { type: Number, required: true },
      cobertura: { type: Number, required: true },
      bomba_automatico: { type: Number, required: true },
      botoeiras: { type: Number, required: true },
      pressurizacao_bomba: { type: Number, required: true },
      ligacao_independente: { type: Number, required: true },
      desligamento_bomba_manual: { type: Number, required: true },
      acessorios_abrigos: { type: Number, required: true },
      tubulacao: { type: Number, required: true },
      rti_independente: { type: Number, required: true },
      saida_consumo_predial: { type: Number, required: true },
      pressurizacao_gravidade: { type: Number, required: true },
      outros_itens: { type: Number, required: true }
    },
    extintores: {
      quantidade: { type: Number, required: true },
      instalacao: { type: Number, required: true },
      sinalizacao: { type: Number, required: true },
      desobstruidos: { type: Number, required: true },
      pressao: { type: Number, required: true },
      selo_inmetro_recarga: { type: Number, required: true },
      selo_inmetro_novos: { type: Number, required: true },
      outros_itens: { type: Number, required: true }
    },
    alarme_deteccao: {
      central_alarme: { type: Number, required: true },
      caminhamento: { type: Number, required: true },
      audivel: { type: Number, required: true },
      outros_itens: { type: Number, required: true }
    },
    detectores: {
      fumaca: {
        area: { type: Number, required: true },
        raio: { type: Number, required: true }
      },
      temperatura: {
        area: { type: Number, required: true },
        raio: { type: Number, required: true }
      }
    },
    chuveiros_automaticos: {
      acionamento: { type: Number, required: true },
      desligamento: { type: Number, required: true },
      saida_teste: { type: Number, required: true },
      outros_itens: { type: Number, required: true }
    },
    brigada_incendio: {
      acordo_memorial: { type: Number, required: true },
      treinamento: { type: Number, required: true },
      calculo_presente: { type: Number, required: true },
      fat: { type: Number, required: true },
      aprovacao_teste: { type: Number, required: true },
      outros_itens: { type: Number, required: true }
    },
    glp: {
      retirar_interior: { type: Number, required: true },
      utilizacao_central: { type: Number, required: true },
      quantidade: { type: Number, required: true },
      classe: { type: Number, required: true },
      distancia_seguranca: { type: Number, required: true },
      outros_itens: { type: Number, required: true }
    }
  },
  status: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const RelatorioVisita = mongoose.model('relatorio_visita', RelatorioVisitaSchema)

module.exports = RelatorioVisita
