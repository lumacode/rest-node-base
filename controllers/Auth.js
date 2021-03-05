'use strict'
const db = require('../utils/db');

const AuthController = {

    register : (req, res) => { 

        res.json({messaje: 'Registro ok'})
       

    },

    login : (req, res) => {

        res.json({messaje: 'Login ok'})

    }
}


module.exports = AuthController;