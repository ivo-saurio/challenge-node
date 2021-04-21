const express = require('express')
const router = express.Router();

//Users
router.get('users', apiController.usersAll);
router.get('users/:id', apiController.usersDetail);

//Characters
router.get('/characters', apiController.CharactersAll);
router.get('/characters/:id', apiController.charactersDetail);
router.get('/onlyCharacter', apiController.onlyCharacter);

//Movies
router.get('/movies', apiController.moviesAll);
router.get('/movies/:id', apiController.moviesDetail);
router.get('/onlyMovie', apiController.onlyMovie);

//Series
router.get('/series', apiController.seriesAll);
router.get('/series/:id', apiController.seriesDetail);
router.get('/onlySerie', apiController.onlySerie);

//Genres
router.get('/genres', apiController.genresAll);
router.get('/genres/:id', apiController.genresDetail);
router.get('/onlyGenre', apiController.onlyGenre);

module.exports = router;