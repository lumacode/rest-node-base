'use strict'

const router = require('express').Router();
//requerimos middlewares

//requirimos el  controlador 
const AuthController = require('../controllers/Auth');

router.get('/login', AuthController.login);
router.get('/register', AuthController.register )

module.exports = router;