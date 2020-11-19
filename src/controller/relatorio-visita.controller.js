const express = require ('express')
const authMiddleware = require('../middlewares/auth.middlewares')

const RelatorioVisita = require('../models/relatorio-visita.model');

const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req,res)=>{
  try {
    const relatorioVisitas = await RelatorioVisita.find().populate('user');

    return res.send({relatorioVisitas});

  } catch{
    return res.status(400).send({error: 'Error loading projects'});
  }
});

router.get('/:relatorioId', async (req,res)=>{
  try {
    const relatorioVisitas = await RelatorioVisita.findById(req.params.relatorioId).populate('user');

    return res.send({relatorioVisitas});

  } catch{
    return res.status(400).send({error: 'Error loading project'});
  }
});

router.post('/', async (req,res)=>{
  try {
    const relatorioVisita = await RelatorioVisita.create({...req.body, user: req.userId });

    return res.send({relatorioVisita});

  } catch{
    return res.status(400).send({error: 'Error creating new project'});
  }
});

router.put('/:relatorioId', async (req,res)=>{
  try {
    const relatorioVisita = await RelatorioVisita.findByIdAndUpdate(
      req.params.relatorioId,
      { ...req.body},
      {new: true}
    );

    return res.send({relatorioVisita});

  } catch{
    return res.status(400).send({error: 'Error updating project'});
  }
});

router.delete('/:relatorioId', async (req,res)=>{
  try {
    await RelatorioVisita.findByIdAndRemove(req.params.relatorioId).populate('user');

    return res.send();

  } catch{
    return res.status(400).send({error: 'Error deleting project'});
  }
});

module.exports = (app) => app.use('/relatorio-visita', router)