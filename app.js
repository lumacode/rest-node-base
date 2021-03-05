'use strict'

const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

//cargamos ficheros de las rutas 
const authRouter = require('./routes/auth');

app.use(express.json());

//config cors 
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//agregamos prefijos de rutas
app.use('/api', authRouter)

app.listen(process.env.APP_PORT || 3000)

