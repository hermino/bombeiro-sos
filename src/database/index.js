const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bombeiros-sos', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise

module.exports = mongoose