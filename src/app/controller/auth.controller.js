const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const mailer = require('../../modules/mailer.modules');

const dotenv = require('dotenv')
dotenv.config()

const User = require('../models/user.model');

const router = express.Router();

function generateToken(params = {}){
  return jwt.sign(params,process.env.AUTH_CONFIG_SECRET,{
    expiresIn: 86400,
  })
}

router.post('/authenticate',async (req,res)=>{
  const {email, password } = req.body;

  const user = await User.findOne({email}).select('+password');

  if(!user){
    return res.status(400).send({ error: 'Usuário não existe'})
  }

  if (!await bcrypt.compare(password,user.password)){
    return res.status(400).send({ error: 'Senha Invalida'})
  }
  
  user.password = undefined;

  if(!user.authorized){
    return res.status(401).send({error:'Você ainda não tem acesso ao sistema, consulte seu Administrador'});
  }

  res.send({
    user,
    token:generateToken({ id: user.id })
  });
})

router.post('/forgot_password',async (req,res)=>{
  const { email } = req.body

  try{
    const user = await User.findOne({ email})

    if (!user){
      res.status(400).send({error: ' Usuário não encontrado !'})
    }

    const token = crypto.randomBytes(20).toString('hex')
    
    const now = new Date();
    now.setHours(now.getHours()+1)
    await User.findByIdAndUpdate(user.id,{
      '$set':{
        passwordResetToken: token,
        passwordResetExpire : now
      }
    })

    mailer.sendMail({
      subject: 'Token de recuperação de Acesso',
      to: email,
      from: process.env.AUTH_CONFIG_MAIL_USER,
      html: `
          <html>
          <body>
          <p> Prezado <b>${user.name}</b> ! <p>
          <p> Você esqueceu a sua Senha ? <br/> Não tem problema, utilize esse token:<b><i>${token}</i></b><br/></p>
          <p> Atenciosamente <br/> Equipe do App CMB.</p>
          </body>
          </html>
      `,  
    },(err) =>{
      if (err){
        return res.status(400).send({ error: 'Cannot send forgot password email'})
      }
      return res.send();
    })

  }catch(err){
    res.status(400).send({error: 'Erro de senha esquecida, tente novamente !'})
  }

})

router.post('/reset_password',async (req,res)=>{
  const { email, token, password } = req.body

  try{
    const user = await User.findOne({ email})
    .select('+passwordResetToken passwordResetExpire')

    if (!user){
      res.status(400).send({error: ' Usuário não encontrado !'})
    }

    if (token !== user.passwordResetToken){
      res.status(400).send({error: ' Token invalido !'})
    }

    const now = new Date()

    if (now >user.passwordResetExpire){
      res.status(400).send({error: ' Token expirado, Gera um Novo Token !'})
    }

    user.password = password

    await user.save()

    res.send()



  }catch (err){
    res.status(400).send({ error: 'Impossivel de Resetar a Senha, Tenta Novamente !'})
  }

})
module.exports = (app) => app.use('/auth', router);
