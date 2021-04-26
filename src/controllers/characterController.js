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
                  id: req.params.id, 
              }
              })
            .then(function(character){
              res.render('editCharacter', {character : character})
            })
    
           
          }, 
        

              save: function(req, res){
                let errors = validationResult(req);
                if(errors.isEmpty()) {
                
                  db.Characters.update({
                    name: req.body.name,
                    age: req.body.age,
                    history: req.body.description,
                    image: req.files[0].filename,
                },
                {
                  where: {
                    id: req.params.id
                  }
                })
                .then(function(){
                  res.redirect('/characters/list')
                })
                .catch(function(e){
                  console.log(e);
              })
            } else {
              return res.render('createCharacter', {errors:errors.mapped()})
            }
              },

              delete: function(req, res) {
                db.Characters.destroy({
                  where: {
                    id: req.params.id
                  }
                })
                .then(function(){
                  res.redirect('/characters/list')
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