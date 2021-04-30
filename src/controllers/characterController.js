let db = require('../database/models')
const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')

module.exports = {

    all: function(req, res){
        db.Characters.findAll()
        .then(function(characters){
            return res.render('characterCatalog', {characters:characters})
        })
    },

    create: function (req, res){
        db.Characters.findAll()
        .then(function(characters){
        res.render('createCharacter', {
          characters: characters
        })
      })
      },

      characterCreate: (req, res, next) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
          db.Characters.create({
            name: req.body.name,
            age: req.body.age,
            image: req.files[0].filename,
            history: req.body.history,
            
    })
    .then(function(){
        res.redirect('/characters/list')
        
    }).catch(function(e){
      console.log(e);
      })
        } else {
          return res.render('create', {errors:errors.mapped()})
        }
        
          },  

        characterEdit: function(req, res) {
            let detail = req.params.id;
            db.Characters.findOne({
              where: {
                  id: detail, 
              }
              })
            .then(function(character){  
              db.Movies.findAll()
              .then(function(movie){
                db.Series.findAll()
                .then(function(serie){
                  res.render('editCharacter', {
                    movie: movie,
                    serie: serie,
                    character : character
                   })
                })
                
                 
              }) 
              
            })
    
           
          }, 
        

              save: function(req, res){
                db.Characters.update({
                  name: req.body.name,
                  age: req.body.age,
                  image: req.files[0].filename,
                  history: req.body.history,
                  movie_id : req.body.movie_id,
                  serie_id: req.body.serie_id
                },
                  {
                    where: {
                      id: req.params.id,
                    },
                  }
                ).then(function(){
                  res.redirect('/characters/' + req.params.id)
                })
              },

              delete: function(req, res) {
                db.Characters.destroy({
                  where: {
                    id: req.params.id
                  }
                })
                .then(function(){
                  res.redirect('/characters/list')
                }).catch(function(e){
                  console.log(e);
                })
              }, 

              characterDetail : function(req, res) {
                let detail = req.params.id;
                db.Characters.findOne({
                  where: {
                      id: req.params.id, 
                  }
                  })
                .then(function(character){
                  res.render('characterdetail', {character : character})
                })
        
               
              }
        
}