const express = require('express')
const movie = express.Router()
const Movie = require('../models/movie.js')

movie.get('/', (req, res) => {
  console.log('WE SMACKED /movies routes!!!')
    Movie.find()
        .then(foundMovie => {
            res.send(foundMovie)
        })
        .catch(err => {
            console.log(err) 
            res.render('error404')
          })
})         

movie.get('/:id', (req, res) => {
    Movie.findById(req.params.id)
        .then(foundMovies => {
            res.send(foundMovies)
            })
            .catch(err => {
                console.log(err) 
                res.render('error404')
              })
        })

movie.post('/', (req, res) => {
  console.log('BODY in post for movie route!',req.body)
    Movie.create (req.body)
    .then(foundMovie => {
        res.send(foundMovie)
    })
    .catch(err => {
        console.log(err) 
        res.render('error404')
      })
})

movie.delete('/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id) 
      .then(deletedMovie => { 
        res.json(deletedMovie)
       // res.status(303).redirect('/movie')
      })
      .catch(err => {
        console.log(err) 
        res.render('error404')
      })
})

movie.put('/:id', (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, req.body) 
    .then(updatedMovie => { 
      res.status(303).redirect('/movie')
    })
    .catch(err => {
      console.log(err) 
      res.render('error404')
    })
})


// export
module.exports = movie       
