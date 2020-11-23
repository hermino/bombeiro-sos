const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

dotenv.config()

const transport = nodemailer.createTransport({
  host: process.env.AUTH_CONFIG_MAIL_HOST,
  port: process.env.AUTH_CONFIG_MAIL_PORT,
  secure: false,
  auth: { 
    user: process.env.AUTH_CONFIG_MAIL_USER, 
    pass: process.env.AUTH_CONFIG_MAIL_PASS
  },
  tls:{
    rejectUnauthorized:false,
  }
})

module.exports = transport