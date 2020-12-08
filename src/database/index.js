const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

mongoose.connect(
    `mongodb+srv://appbombeiro:${process.env.PASS}@cluster0.lxrzp.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
)

mongoose.Promise = global.Promise

module.exports = mongoose
