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

router.get('/list', async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    
    if (user.admin) {
      const Todos_User = await User.find()
      return res.send(userViews.RenderMany(Todos_User))
    } else {
      return res.status(400).send({ error: 'Você não tem a permissão para consultar esses dados' });
    }

  } catch (err) {
    return res.status(400).send({ error: 'Error loading users' });
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

router.put('/:userId', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { ...req.body },
      { new: true }
    );

    return res.send({ user });

  } catch {
    return res.status(400).send({ error: 'Error updating user' });
  }
});


// CASO PRECISE!!!!
// router.delete('/:userId', async (req,res)=>{
//   try {
//     await User.findByIdAndRemove(req.params.userId);

//     return res.send();

//   } catch{
//     return res.status(400).send({error: 'Error deleting user'});
//   }
// });

module.exports = (app) => app.use('/user', router)