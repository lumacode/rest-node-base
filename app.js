'use strict'

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//cargamos ficheros de las rutas 
const authRouter = require('./routes/auth');

app.use(express.json());

//config cors 


//agregamos prefijos de rutas
app.use('/api', authRouter)

app.listen(process.env.APP_PORT || 3000)

