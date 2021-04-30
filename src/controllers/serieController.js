let db = require('../database/models')
const fs = require('fs')
const path = require('path')
const { validationResult } = require('express-validator')

module.exports = {

    all: function(req, res){
        db.Series.findAll()
        .then(function(series){
            return res.render('serieCatalog', {series:series})
        })
    },

    create: function (req, res){
        db.Genres.findAll()
        .then(function(genres){
        res.render('createSerie', {
          genres: genres
        })
      })
      },

      serieCreate: (req, res, next) => {
        let errors = validationResult(req);
        if(errors.isEmpty()) {
          db.Series.create({
            title: req.body.title,
            image: req.files[0].filename,
            rating: req.body.rating,
            release_date: req.body.release_date,
            history: req.body.history,
            genre_id: req.body.genre_id
          
    })
    .then(function(){
        res.redirect('/series/list')
        
    }).catch(function(e){
      console.log(e);
      })
        } else {
          return res.render('createSerie', {errors:errors.mapped()})
        }
        
          },  

        serieEdit: function(req, res) {
            let errors = validationResult(req);
            if(errors.isEmpty()) { 
            db.Series.findByPk(req.params.id, {
              include: {
              all:true,
              nested:true
              }
                })
                .then(function(serie){
                  db.Genres.findAll()
                  .then(function(genres){
                
                  res.render('editSerie', {
                    serie: serie,
                    genres: genres
                  })
                })
              })
            
              } else {
                return res.render('editSerie', {errors:errors.mapped()})
              }
              },

              save: function(req, res){
                db.Series.update({
                  title: req.body.title,
                  image: req.files[0].filename,
                  rating: req.body.rating,
                  release_date: req.body.release_date,
                  history: req.body.history,
                  genre_id: req.body.genre_id
                },
                  {
                    where: {
                      id: req.params.id,
                    },
                  }
                ).then(function(){
                  res.redirect('/series/' + req.params.id)
                })
              },
              delete: function(req, res) {
                db.Series.destroy({
                  where: {
                    id: req.params.id
                  }
                })
                .then(function(){
                  res.redirect('/series/list')
                })
              }, 

              serieDetail : function(req, res) {
                let detail = req.params.id;
                db.Series.findOne({
                  include: [
                    {model: db.Genres, as: 'seriesgenre'}
                      ],
                  where: {
                      id: req.params.id, 
                  }
                  })
                .then(function(serie){
                  res.render('seriedetail', {serie : serie})
                })
        
               
              }
        
}