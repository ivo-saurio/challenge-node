const bcrypt = require('bcrypt');
const db = require('../database/models');
const {validationResult} = require('express-validator');
const Sequelize = require("sequelize");

let op = Sequelize.Op;

module.exports = {
    
    login : function(req, res) {
        return res.render('login');
    },

    processLogin: (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
          db.Users.findOne({
            where: {
              email: req.body.email,
            },
          })
            .then((result) => {
              let user = result;
              if (user != undefined) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                  req.session.usuario = user;
                  if (req.body.remember) {
                    res.cookie("user", user.email, { maxAge: 2592000000 });
                  }
                  res.redirect("/");
                } else {
                  res.render("login", { errors: errors });
                }
              } else {
                res.render("login", { errors: errors });
              }
            })
            .catch((e) => {
              console.log(e);
            });
        } else {
          return res.render("login", { errors: errors.errors });
        }
      },

        logOut:function(req,res){
            req.session.destroy();
            res.redirect('/');
        },

        register: function(req, res){
            return res.render('register')
        
        },

        create: function(req, res){
            let errors = validationResult(req);
            console.log(errors);
            if(errors.isEmpty()){
                if(req.body.password === req.body.repassword){
                    db.Users.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 12),
            })
            .then(function(userCreated){
                req.session.usuario = userCreated.dataValues;
                res.redirect('/users/login')
            })
            .catch(function(e){
                res.send(e);
            })
            }
            } else {
                return res.render('register', {
                    errors:errors.mapped(),
                    old:req.body
                    })
            
        }       
               
        },

        search: function(req, res){
          db.Characters.findAll({
            where: {
              [op.or]: [
                { name: { [op.like]: `%${req.query.search}%` } },
                { history: { [op.like]: `%${req.query.search}%` } },
              ],
            }
            })    
              .then((character) => {
                    db.Movies.findAll({
                      include: [
                        {model: db.Genres, as: 'genremovie'}
                          ],
                      where: {
                        [op.or]: [
                          { title: { [op.like]: `%${req.query.search}%` } },
                          { genre_id: { [op.like]: `%${req.query.search}%` } },
                        ],
                      }
                    })
                        .then((movie) => {
                          db.Series.findAll({
                            include: [
                              {model: db.Genres, as: 'seriesgenre'}
                                ],
                            where: {
                              [op.or]: [
                                { title: { [op.like]: `%${req.query.search}%` } },
                                { genre_id: { [op.like]: `%${req.query.search}%` } },
                              ],
                            }
                          })
                              .then(function(serie){
                                res.render("search", { 
                                  character : character,
                                  movie : movie,
                                  serie : serie
                                });
                              })
                        })
                
              })
      .catch((e) => {
        console.log(e);
      });
        },

//        searchTwo : function(req, res){
//            let userSearch = req.query.search;
//            let result = [];
//
//            db.Characters.forEach(function(search){
//              if((search.name).includes(userSearch)){
//                result.push(search)
//              }
//           })
//            res.render('searchTwo', {result:result})
 //       }
}