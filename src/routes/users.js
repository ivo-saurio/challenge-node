const express = require('express');
const router = express.Router();
const path = require('path');

const userController = require('../controllers/userControllers')





/* GET users listing. */
router.get('/login', userController.login);
router.post('/login',userController.processLogin);
router.get('/logOut',userController.logOut);

//RUTA PARA REGISTRARSE
router.get('/register', userController.register);
router.post('/register',userController.create);

//RUTA PARA EL BUSCADOR

router.get('/search', userController.search);

module.exports = router;