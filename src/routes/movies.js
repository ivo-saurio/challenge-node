const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const movieController = require('../controllers/movieController');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../../public/image/movies'));
    },
    filename: function (req, file, cb) {
        cb(null, req.body.email + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({ storage: storage })

// 1. /movies (GET)
// Listado de peliculas
router.get('/list', movieController.all)

// 2. /movies/create (GET) Formulario de creación de una pelicula
router.get('/create', movieController.create);

// 4. /movies/create (POST) Acción de creación (a donde se envía el formulario) 
router.post ('/create', upload.any(),movieController.movieCreate);

// 5. /movies/ :id /edit (GET) Formulario de edición de una pelicula
router.get('/edit/:id',movieController.movieEdit);

// 6. /movies/ :id (PUT) Acción de edición (a donde se envía el formulario): 
router.post('/edit/:id', upload.single('image'), movieController.save)

// 7. /movies/ :id (DELETE) Acción de borrado
router.delete('/edit/:id', movieController.delete)

// 3. /movie/ :id (GET) Detalle de un personaje particular
router.get('/:id', movieController.movieDetail);

module.exports = router;