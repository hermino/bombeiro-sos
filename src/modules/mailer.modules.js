const nodemailer = require('nodemailer')

const {host, port, user, pass} = require('../config/mail.config.json')

const transport = nodemailer.createTransport({
  host,
  port,
  secure: false,
  auth: { user, pass },
  tls:{
    rejectUnauthorized:false,
  }
})

module.exports = transport