const db = require('../../database/models')

module.exports = {

    usersAll: function(req, res){
    db.Users.findAll()
    .then(function(results){
      return  res.send(JSON.stringify(results))
    })
    },

    usersDetail: function(req,res){
        db.Users.findOne({
            where:{
                id: req.params.id
                }
        })
        .then(function(results){
            return res.send(JSON.stringify(results))
        })
    .catch(function(e){
        return res.json("User not found")
    })
    
    },

CharactersAll: function(req, res){
    db.Characters.findAll({
        include: [
          {model: db.Movies, as: 'movies_characters'},
          {model: db.Series, as: 'series_characters'}
        ]
      })
    .then(function(results){
      return  res.send(JSON.stringify(results))
    })
},

charactersDetail: function(req,res){
    db.Characters.findOne({
        where:{
            id: req.params.id
            },
            include: [
                {model: db.Movies, as: 'movies_characters'},
                {model: db.Series, as: 'series_characters'}
              ]
    })
    .then(function(results){
        return res.send(JSON.stringify(results))
    })
.catch(function(e){
    return res.json("Character not found")
})

},

moviesAll:  function(req, res){
    db.Movies.findAll({
        include: [
          {model: db.Genres, as: 'genremovie'},
          {model: db.Characters, as: 'characters_movies'}
        ]
      }
    )
    .then(function(results){
      return  res.send(JSON.stringify(results))
    })
},

moviesDetail : function(req,res){
    db.Movies.findOne({
       
        where:{
            id: req.params.id
            },
        include: [
            {model: db.Genres, as: 'genremovie'},
            {model: db.Characters, as: 'characters_movies'}
              ]
            
    })
    .then(function(results){
        return res.send(JSON.stringify(results))
    })
.catch(function(e){
    return res.json("Movie not found")
})

},

seriesAll : function(req, res){
    db.Series.findAll({
        include: [
          {model: db.Genres, as: 'seriesgenre'},
          {model: db.Characters, as: 'characters_series'}
        ]
      })
    .then(function(results){
      return  res.send(JSON.stringify(results))
    })
},


seriesDetail : function(req,res){
    db.Series.findOne({
        where:{
            id: req.params.id
            },
        include: [
            {model: db.Genres, as: 'seriesgenre'},
            {model: db.Characters, as: 'characters_series'}
            ]
    })
    .then(function(results){
        return res.send(JSON.stringify(results))
    })
.catch(function(e){
    return res.json("Serie not found")
})

},


genresAll :  function(req, res){
    db.Genres.findAll()
    .then(function(results){
      return  res.send(JSON.stringify(results))
    })
},

genresDetail : function(req,res){
    db.Genres.findOne({
        where:{
            id: req.params.id
            }
    })
    .then(function(results){
        return res.send(JSON.stringify(results))
    })
.catch(function(e){
    return res.json("Genre not found")
})

},




}