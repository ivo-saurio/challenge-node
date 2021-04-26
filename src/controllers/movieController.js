let db = require('../database/models')
const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')

module.exports = {

    all: function(req, res){
        db.Movies.findAll()
        .then(function(movies){
            return res.render('movieCatalog', {movies:movies})
        })
    },

    create: function (req, res){
        db.Genres.findAll()
        .then(function(genres){
        res.render('createMovie', {
          genres: genres
        })
      })
      },

      movieCreate: (req, res, next) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
          db.Movies.create({
            title: req.body.title,
            image: req.files[0].filename,
            rating: req.body.rating,
            release_date: req.body.release_date,
            history: req.body.history,
            genre_id: req.body.genre_id
    })
    .then(function(){
        res.redirect('/movies/list')
        
    }).catch(function(e){
      console.log(e);
      })
        } else {
          return res.render('createMovie', {errors:errors.mapped()})
        }
        
          },  

        movieEdit: function(req, res) {
            let errors = validationResult(req);
            if(errors.isEmpty()) { 
            db.Movies.findByPk(req.params.id, {
              include: {
              all:true,
              nested:true
              }
                })
                .then(function(movieEdited){
                  db.Movies.findAll()
                  .then(function(movies){
                
                  res.render('editMovie', {
                    movieEdited: movieEdited,
                    movies: movies
                  })
                })
              })
            
              } else {
                return res.render('editMovie', {errors:errors.mapped()})
              }
              },

              save: function(req, res){
                let errors = validationResult(req);
                if(errors.isEmpty()) {
                
                  db.Movies.update({
                    title: req.body.title,
                    image: req.files[0].filename,
                    rating: req.body.rating,
                    release_date: req.body.release_date,
                    history: req.body.history,
                    genre_id: req.body.genre_id
                },
                {
                  where: {
                    id: req.params.id
                  }
                })
                .then(function(){
                  res.redirect('/movies/list')
                })
                .catch(function(e){
                  console.log(e);
              })
            } else {
              return res.render('createMovie', {errors:errors.mapped()})
            }
              },

              delete: function(req, res) {
                db.Movies.destroy({
                  where: {
                    id: req.params.id
                  }
                })
                .then(function(){
                  res.redirect('/movies/list')
                })
              }, 

              movieDetail : function(req, res) {
                let detail = req.params.id;
                db.Movies.findOne({
                  where: {
                      id: req.params.id, 
                  }
                  })
                .then(function(movie){
                  res.render('moviedetail', {movie : movie})
                })
        
               
              }
        
}