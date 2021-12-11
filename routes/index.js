const express = require('express');
const router = express.Router();
const moviesList = require('../models/movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req,res) => {
    moviesList.find()
    .then((movies) => {
        res.render("movies", {movies})
    })
})

router.get("/movies/:id", (req,res) => {
    const {id} = req.params
    moviesList.findById(id)
    .then((movieId) => {
        res.render("detail", {movieId})
    })
})

module.exports = router;
