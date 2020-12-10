const express = require ('express')

const adminMiddleware = require('../middlewares/admin.middlewares')
const RelatorioVisita = require('../models/relatorio-visita.model')
const relatorioViews = require('../views/relatorio-visita.view')

const router = express.Router()

router.use(adminMiddleware)

router.get('/', async (req,res)=>{
  try {
    const todosRelatorios = await RelatorioVisita.find().populate('user')
    return res.send(relatorioViews.renderManyAdmin(todosRelatorios))

  } catch(err){
    return res.status(400).send({error: 'Falha ao carregar relatórios!'})
  }
})

router.get('/:relatorioId', async (req,res)=>{
  try {
    const relatorioVisitas = await RelatorioVisita.findById(req.params.relatorioId).populate('user')

    return res.send({relatorioVisitas})

  } catch{
    return res.status(400).send({error: 'Falha ao carregar relatório!'})
  }
})

router.post('/', async (req,res)=>{
  try {
    const relatorioVisita = await RelatorioVisita.create({...req.body, user: req.userId })

    return res.send({relatorioVisita})

  } catch{
    return res.status(400).send({error: 'Falha ao criar novo relatório!'})
  }
})

router.put('/:relatorioId', async (req,res)=>{
  try {
    const relatorioVisita = await RelatorioVisita.findByIdAndUpdate(
      req.params.relatorioId,
      { ...req.body},
      {new: true}
    )

    return res.send({relatorioVisita})

  } catch{
    return res.status(400).send({error: 'Falha ao atualizar relatório!'})
  }
})

router.delete('/:relatorioId', async (req,res)=>{
  try {
    await RelatorioVisita.findByIdAndRemove(req.params.relatorioId).populate('user')

    return res.send('Relatório removido!')

  } catch{
    return res.status(400).send({error: 'Falha ao remover relatório!'})
  }
})

router.get("/download", (req, res) => {
  const document = new PDFDocument({bufferPages: true})

  let download = document.pipe(fs.createWriteStream('./relatorio_de_visita.pdf'))
  const date = Date.now;

  document.page.margins.top = 0
  document.page.margins.left = 0
  document.page.margins.right = 0
  document.page.margins.bottom = 0
  
  document.image(path.join(__dirname, '../') +'assets/img/img1.png', 12, 0, {
    fit: [750, 830],
  }); 
  
  document.text(req.body.area_edificada, 155, 125)
  document.text(req.body.area_informada, 420, 125)

  req.body.rrt ? document.text('x', 92, 142) : document.text('x', 167, 142)
  req.body.dare ? document.text('x', 423, 142) : document.text('x', 477, 142)
  req.body.edificacao_terrea ? document.text('x', 158, 160) : document.text('x', 208, 160)

  document.text(req.body.numero_pavimento, 420, 160)

  req.body.edificacao_isolada ? document.text('x', 157, 180) : document.text('x', 204, 180)

  document.text(req.body.salas.ocupadas, 437, 175)
  document.text(req.body.salas.desocupadas, 545, 175)

  req.body.parede_unica ? document.text('x', 157, 202) : document.text('x', 202, 202)
  req.body.abertura_interpredial ? document.text('x', 440, 202) : document.text('x', 490, 202)

  if(req.body.tipo_abertura.toLowerCase() === "portas"){
    document.text('x', 197, 220)
  } else if(req.body.tipo_abertura.toLowerCase() === "janela") {
    document.text('x', 255, 220)
  } else if(req.body.tipo_abertura.toLowerCase() === "telhados") {
    document.text('x', 335, 220)
  } else {
    document.text(req.body.tipo_abertura, 392, 218)
  }

  if(req.body.armario_produtos_perigosos.tipo){
    document.text('x', 222, 238)
    document.text(req.body.armario_produtos_perigosos.tipo, 385, 238)
  } else {
    document.text('x', 273, 238)
  }

  req.body.projeto_tecnico ? document.text('x', 145, 255) : document.text('x', 200, 255)

  document.text(req.body.numero_cap, 350, 255)

  req.body.sistema_atende ? document.text('x', 492, 256) : document.text('x', 537, 256)
  req.body.funcao_relatorio === 0 ? document.text('X', 180, 275) : req.body.funcao_relatorio === 1 ? document.text('X', 350, 275) : document.text('X', 560, 275)

  req.body.medidas_seguranca.saida_emergencia.largura_portas ? document.text('x', 310, 333) : document.text('x', 348, 333)
  req.body.medidas_seguranca.saida_emergencia.corrimao_ambos_lados ? document.text('x', 525, 333) : document.text('x', 563, 333)

  req.body.medidas_seguranca.saida_emergencia.largura_escadas ? document.text('x', 310, 350) : document.text('x', 348, 350)
  req.body.medidas_seguranca.saida_emergencia.corrimao_mezanino ? document.text('x', 525, 350) : document.text('x', 563, 350)

  req.body.medidas_seguranca.saida_emergencia.piso_antiderrapante ? document.text('x', 310, 367) : document.text('x', 348, 367)
  req.body.medidas_seguranca.saida_emergencia.material_escada_incombustivel ? document.text('x', 525, 367) : document.text('x', 563, 367)

  req.body.medidas_seguranca.saida_emergencia.guarda_corpo ? document.text('x', 310, 384) : document.text('x', 348, 384)
  req.body.medidas_seguranca.saida_emergencia.barras_antipanico ? document.text('x', 525, 384) : document.text('x', 563, 384)

  req.body.medidas_seguranca.saida_emergencia.desobstruidas ? document.text('x', 310, 401) : document.text('x', 348, 401)
  req.body.medidas_seguranca.saida_emergencia.outros_itens ? document.text('x', 525, 401) : document.text('x', 563, 401)

  req.body.medidas_seguranca.iluminacao_emergencia.altura_instalacoes ? document.text('x', 310, 415) : document.text('x', 348, 415)
  req.body.medidas_seguranca.iluminacao_emergencia.teste_funcionamento ? document.text('x', 525, 415) : document.text('x', 563, 415)

  req.body.medidas_seguranca.iluminacao_emergencia.distancia_luminarias ? document.text('x', 310, 428) : document.text('x', 348, 428)
  req.body.medidas_seguranca.iluminacao_emergencia.lotacao ? document.text('x', 525, 435) : document.text('x', 563, 435)

  req.body.medidas_seguranca.iluminacao_emergencia.edificacao ? document.text('x', 310, 443) : document.text('x', 348, 443)
  req.body.medidas_seguranca.iluminacao_emergencia.outros_itens ? document.text('x', 525, 463) : document.text('x', 563, 463)

  req.body.medidas_seguranca.iluminacao_emergencia.moteis ? document.text('x', 310, 464) : document.text('x', 348, 464)

  req.body.medidas_seguranca.sinalizacao_emergencia.altura_instalacoes ? document.text('x', 310, 480) : document.text('x', 348, 480)
  req.body.medidas_seguranca.sinalizacao_emergencia.forma_geometrica ? document.text('x', 525, 480) : document.text('x', 563, 480)

  req.body.medidas_seguranca.sinalizacao_emergencia.tamanho ? document.text('x', 310, 495) : document.text('x', 348, 495)
  req.body.medidas_seguranca.sinalizacao_emergencia.distancia_visualizacao ? document.text('x', 525, 495) : document.text('x', 563, 495)

  req.body.medidas_seguranca.sinalizacao_emergencia.cores ? document.text('x', 310, 508) : document.text('x', 348, 508)
  req.body.medidas_seguranca.sinalizacao_emergencia.outros_itens ? document.text('x', 525, 508) : document.text('x', 563, 508)

  req.body.medidas_seguranca.hidrantes.posicionamento ? document.text('x', 310, 525) : document.text('x', 348, 525)
  req.body.medidas_seguranca.hidrantes.desligamento_bomba_manual ? document.text('x', 525, 525) : document.text('x', 563, 525)

  req.body.medidas_seguranca.hidrantes.abrigos_desobstruidos ? document.text('x', 310, 545) : document.text('x', 348, 545)
  req.body.medidas_seguranca.hidrantes.acessorios_abrigos ? document.text('x', 525, 545) : document.text('x', 563, 545)

  req.body.medidas_seguranca.hidrantes.cobertura ? document.text('x', 310, 564) : document.text('x', 348, 564)
  req.body.medidas_seguranca.hidrantes.tubulacao ? document.text('x', 525, 564) : document.text('x', 563, 564)

  req.body.medidas_seguranca.hidrantes.bomba_automatico ? document.text('x', 310, 579) : document.text('x', 348, 579)
  req.body.medidas_seguranca.hidrantes.rti_independente ? document.text('x', 525, 579) : document.text('x', 563, 579)
  
  req.body.medidas_seguranca.hidrantes.botoeiras ? document.text('x', 310, 602) : document.text('x', 348, 602)
  req.body.medidas_seguranca.hidrantes.saida_consumo_predial ? document.text('x', 525, 602) : document.text('x', 563, 602)

  req.body.medidas_seguranca.hidrantes.pressurizacao_bomba ? document.text('x', 310, 620) : document.text('x', 348, 620)
  req.body.medidas_seguranca.hidrantes.pressurizacao_gravidade ? document.text('x', 525, 620) : document.text('x', 563, 620)

  req.body.medidas_seguranca.hidrantes.ligacao_independente ? document.text('x', 310, 635) : document.text('x', 348, 635)
  req.body.medidas_seguranca.hidrantes.outros_itens ? document.text('x', 525, 635) : document.text('x', 563, 635)

  req.body.medidas_seguranca.extintores.quantidade ? document.text('x', 310, 650) : document.text('x', 348, 650)
  req.body.medidas_seguranca.extintores.pressao ? document.text('x', 525, 650) : document.text('x', 563, 650)

  req.body.medidas_seguranca.extintores.instalacao ? document.text('x', 310, 665) : document.text('x', 348, 665)
  req.body.medidas_seguranca.extintores.selo_inmetro_recarga ? document.text('x', 525, 665) : document.text('x', 563, 665)

  req.body.medidas_seguranca.extintores.sinalizacao ? document.text('x', 310, 678) : document.text('x', 348, 678)
  req.body.medidas_seguranca.extintores.selo_inmetro_novos ? document.text('x', 525, 678) : document.text('x', 563, 678)

  req.body.medidas_seguranca.extintores.desobstruidos ? document.text('x', 310, 693) : document.text('x', 348, 693)
  req.body.medidas_seguranca.extintores.outros_itens ? document.text('x', 525, 693) : document.text('x', 563, 693)

  req.body.medidas_seguranca.alarme_deteccao.central_alarme ? document.text('x', 310, 710) : document.text('x', 348, 710)
  req.body.medidas_seguranca.alarme_deteccao.audivel ? document.text('x', 525, 710) : document.text('x', 563, 710)

  req.body.medidas_seguranca.alarme_deteccao.caminhamento ? document.text('x', 310, 727) : document.text('x', 348, 727)
  req.body.medidas_seguranca.alarme_deteccao.outros_itens ? document.text('x', 525, 727) : document.text('x', 563, 727)

  req.body.medidas_seguranca.detectores.fumaca.area ? document.text('x', 310, 745) : document.text('x', 348, 745)
  req.body.medidas_seguranca.detectores.fumaca.raio ? document.text('x', 525, 745) : document.text('x', 563, 745)

  req.body.medidas_seguranca.detectores.temperatura.area ? document.text('x', 310, 765) : document.text('x', 348, 765)
  req.body.medidas_seguranca.detectores.temperatura.raio ? document.text('x', 525, 765) : document.text('x', 563, 765)

  document.addPage()

  document.image(path.join(__dirname, '../') +'assets/img/img2.png', 12, 0, {
    fit: [750, 830],
  });

  req.body.medidas_seguranca.chuveiros_automaticos.acionamento ? document.text('x', 310, 27) : document.text('x', 348, 27)
  req.body.medidas_seguranca.chuveiros_automaticos.saida_teste ? document.text('x', 522, 27) : document.text('x', 563, 27)

  req.body.medidas_seguranca.chuveiros_automaticos.desligamento ? document.text('x', 310, 45) : document.text('x', 348, 45)
  req.body.medidas_seguranca.chuveiros_automaticos.outros_itens ? document.text('x', 522, 45) : document.text('x', 563, 45)

  req.body.medidas_seguranca.brigada_incendio.acordo_memorial ? document.text('x', 310, 67) : document.text('x', 348, 67)
  req.body.medidas_seguranca.brigada_incendio.fat ? document.text('x', 522, 67) : document.text('x', 563, 67)

  req.body.medidas_seguranca.brigada_incendio.treinamento ? document.text('x', 310, 87) : document.text('x', 348, 87)
  req.body.medidas_seguranca.brigada_incendio.aprovacao_teste ? document.text('x', 522, 87) : document.text('x', 563, 87)

  req.body.medidas_seguranca.brigada_incendio.calculo_presente ? document.text('x', 310, 103) : document.text('x', 348, 103)
  req.body.medidas_seguranca.brigada_incendio.outros_itens ? document.text('x', 522, 103) : document.text('x', 563, 103)

  req.body.medidas_seguranca.glp.retirar_interior ? document.text('x', 310, 118) : document.text('x', 348, 118)
  req.body.medidas_seguranca.glp.utilizacao_central ? document.text('x', 522, 118) : document.text('x', 563, 118)

  req.body.medidas_seguranca.glp.distancia_seguranca ? document.text('x', 522, 136) : document.text('x', 563, 136)
  req.body.medidas_seguranca.glp.outros_itens ? document.text('x', 522, 151) : document.text('x', 563, 151)

  document.text(req.body.medidas_seguranca.glp.quantidade, 230, 136)
  document.text(req.body.medidas_seguranca.glp.classe, 230, 151)

  //document.lineJoin('miter').rect(26, 162, 558, 461).fill('white')
  
  document.text(req.body.obs, 30, 166, {
    width: 550,
    height: 458
  })

  req.body.status ? document.text("x", 280, 634) : document.text("x", 348, 634)

  document.text(req.body.proprietario, 430, 636)
  document.text(req.body.createdAt, 262, 650)

  document.end();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=relatorio_de_visita.pdf');

  download.on('finish', () => {
    res.download('./relatorio_de_visita.pdf', 'relatorio_de_visita.pdf')
  })
})

module.exports = (app) => app.use('/relatorio_visita_admin', router)