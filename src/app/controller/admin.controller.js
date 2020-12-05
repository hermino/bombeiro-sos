const express = require('express')
const adminMiddleware = require('../middlewares/admin.middlewares')

const User = require('../models/user.model');

const router = express.Router();
const userViews = require('../views/user.view')

router.use(adminMiddleware);

router.post('/register', async (req, res) => {
	const { email } = req.body;

	try {
		if (await User.findOne({ email })) {
			return res.status(400).send({ error: 'Este e-mail já está registrado!' });
		}
		const user = await User.create(req.body);

		user.password = undefined;

		return res.send({
			user
		});
	} catch (err) {
		return res.status(400).send({ error: 'Registration failed.' });
	}
});

router.get('/list', async (req, res) => {
	try {
		const user = await User.findById(req.userId);

		const Todos_User = await User.find()
		return res.send(userViews.RenderMany(Todos_User))

	} catch (err) {
		return res.status(400).send({ error: 'Error loading users' });
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

router.delete('/:userId', async (req,res)=>{
  try {
    await User.findByIdAndRemove(req.params.userId);

    return res.send('Usuário removido com sucesso!');

  } catch{
    return res.status(400).send({error: 'Error deleting user'});
  }
});

module.exports = (app) => app.use('/admin', router)