const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

<<<<<<< HEAD
require('./app/controller/index.controller')(app)
=======
require('./controller/auth.controller')(app)
require('./controller/user.controller')(app)
require('./controller/relatorio-visita.controller')(app)


>>>>>>> backend

dotenv.config();
app.listen(process.env.PORT);