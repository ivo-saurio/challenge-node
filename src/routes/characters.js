const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const characterController = require('../controllers/characterController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/image/characters'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

// 1. /characters (GET)
// Listado de personajes
router.get('/list', characterController.all)

// 2. /characters/create (GET) Formulario de creación de un personaje
router.get('/create', characterController.create);

// 4. /character/create (POST) Acción de creación (a donde se envía el formulario) 
router.post ('/create', upload.any(),characterController.characterCreate);

// 5. /characters/ :id /edit (GET) Formulario de edición de un personaje
router.get('/edit/:id',characterController.characterEdit);

// 6. /characters/ :id (PUT) Acción de edición (a donde se envía el formulario): 
router.post('/edit/:id', upload.any(), characterController.save)

// 7. /characters/ :id (DELETE) Acción de borrado
router.delete('/edit/:id', characterController.delete)

// 3. /characters/ :id (GET) Detalle de un personaje particular
router.get('/:id', characterController.characterDetail);

module.exports = router;