const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const serieController = require('../controllers/serieController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/image/series'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.name + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage })

// 1. /series (GET)
// Listado de series
router.get('/list', serieController.all);

// 2. /series/create (GET) Formulario de creación de una serie
router.get('/create', serieController.create);

// 4. /series/create (POST) Acción de creación (a donde se envía el formulario) 
router.post ('/create', upload.any(),serieController.serieCreate);

// 5. /series/ :id /edit (GET) Formulario de edición de una serie
router.get('/edit/:id',serieController.serieEdit);

// 6. /series/ :id (PUT) Acción de edición (a donde se envía el formulario): 
router.post('/edit/:id', upload.any(), serieController.save);

// 7. /series/ :id (DELETE) Acción de borrado
router.delete('/edit/:id', serieController.delete);

// 3. /series/ :id (GET) Detalle de una serie particular
router.get('/:id', serieController.serieDetail);



module.exports = router;