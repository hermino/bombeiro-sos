const express = require('express')
const authMiddleware = require('../middlewares/auth.middlewares')

const User = require('../models/user.model');

const router = express.Router();
const userViews = require('../views/user.view')

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    return res.send(userViews.dados(user));

  } catch (err) {
    return res.status(400).send({ error: 'Error loading user' });
  }
});

router.put('/', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.userId,
      { ...req.body },
      { new: true }
    );

    return res.send({ user });

  } catch {
    return res.status(400).send({ error: 'Error updating user' });
  }
});

router.delete('/', async (req,res)=>{
  try {
    await User.findByIdAndRemove(req.userId);

    return res.send('Usuário removido com sucesso!');

  } catch{
    return res.status(400).send({error: 'Error deleting user'});
  }
});

module.exports = (app) => app.use('/user', router)