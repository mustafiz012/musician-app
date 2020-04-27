const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Song = require('../models/Song');

//get song list
router.get('/', (req, res) => {
    Song.findAll()
        .then(songs => {
            console.log(songs);
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
})

//add a song
router.get('/add', (req, res) => {
    const data = {
        title: 'Blank Space',
        album: '1989',
        artist: 'Taylor Swift',
        albumArtist: 'Taylor Swift',
        year: 2018,
        disc: 1,
        track: 2,
        genre: 'Unknown',
    }

    let {title, album, artist, albumArtist, year, disc, track, genre} = data;

    //insert into table
    Song.create({
        title,
        album,
        artist,
        albumArtist,
        year,
        disc,
        track,
        genre,
    })
        .then(() => res.redirect('/songs'))
        .catch(err => console.log('Error:' + err));
})

module.exports = router;