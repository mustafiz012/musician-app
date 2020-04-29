const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Artist = require('../models/Artist');

//get artist list
router.get('/', (req, res) => {
    Artist.findAll()
        .then(artists => {
            res.render('artists', {
                artists
            })
        }).catch(err => console.log('Error: ' + err));
})

//show add new artist form
router.get('/add', (req, res) => {
    res.render('add_artist');
});

//add an artist
router.post('/add', (req, res) => {

    let {name, country, genre} = req.body;
    let errors = [];

    //validation
    if (!name) {
        errors.push({text: 'Please add the name'});
    }
    if (!country) {
        errors.push({text: 'Please add the country'});
    }
    if (!genre) {
        errors.push({text: 'Please add the genre'});
    }

    //checking errors
    if (errors.length > 0) {
        res.render('add_artist', {
            errors,
            name,
            country,
            genre
        });
    } else {
        Artist.create({
            name,
            country,
            genre
        })
            .then(() => res.redirect('/artists'))
            .catch(err => {
                console.log('Error:' + err);
                res.sendStatus(500);
            });
    }
});

module.exports = router;