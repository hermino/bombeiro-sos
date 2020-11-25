const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()


module.exports = (req,res,next)=>{
  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).send({error:'Token não foi informado'})
  }

  const parts = authHeader.split(' ')

  if(!parts.length === 2){
    return res.status(401).send({error:' Token error'})
  }

  const [ scheme, token ] = parts;

  if(!/^Bearer$/i.test(scheme)){
    return res.status(401).send({error:'Token mal formado'})
  }

  jwt.verify(token, process.AUTH_CONFIG_SECRET,(err,decoded)=>{
    if (err) return res.status(401).send({error:'Token invalida'})

    req.userId = decoded.id ;
    return next();
  });


}