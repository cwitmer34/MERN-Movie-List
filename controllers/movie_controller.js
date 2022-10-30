const express = require('express')
const movie = express.Router()
const Movie = require('../models/movie.js')


movie.post('/', (req, res) => {
  console.log (req.body)
    Movie.create (req.body)
    .then(foundMovie => {
        res.send(foundMovie)
    })
    .catch(err => {
        console.log(err) 
        res.render('error404')
      })
})

movie.get('/', (req, res) => {
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
            res.render(foundMovies)
            })
            .catch(err => {
                console.log(err) 
                res.render('error404')
              })
        })


movie.delete('/:id', (req, res) => {
    Movie.findByIdAndDelete(req.params.id) 
      .then(deletedMovie => { 
        res.status(303).redirect('/movie')
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


module.exports = movie 