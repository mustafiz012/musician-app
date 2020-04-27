const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Artist = require('../models/Artist');

//get artist list
router.get('/', (req, res) => {
    Artist.findAll()
        .then(artists => {
            console.log(artists);
            res.sendStatus(200);
        }).catch(err => console.log('Error: ' + err));
})

//add an artist
router.get('/add', (req, res) => {
    const data = {
        name: 'Taylor Swift',
        country: 'USA',
        genre: 'Pop'
    }

    let {name, country, genre} = data;

    Artist.create({
        name,
        country,
        genre
    })
        .then(() => res.redirect('/artists'))
        .catch(err => console.log('Error: ' + err));
})

module.exports = router;