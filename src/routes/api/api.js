const express = require('express')
const router = express.Router();

const apiController = require('../../controllers/api/apiController')

//Users
router.get('/users', apiController.usersAll);
router.get('/users/:id', apiController.usersDetail);

//Characters
router.get('/characters', apiController.CharactersAll);
router.get('/characters/:id', apiController.charactersDetail);

//Movies
router.get('/movies', apiController.moviesAll);
router.get('/movies/:id', apiController.moviesDetail);

//Series
router.get('/series', apiController.seriesAll);
router.get('/series/:id', apiController.seriesDetail);

//Genres
router.get('/genres', apiController.genresAll);
router.get('/genres/:id', apiController.genresDetail);

module.exports = router;