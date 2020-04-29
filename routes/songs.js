const express = require('express');
const router = express.Router();
const db = require('../config/db');
const Song = require('../models/Song');

//get song list
router.get('/', (req, res) => {
    Song.findAll()
        .then(songs => {
            res.render('songs', {
                songs
            })
            /* // create context Object with 'usersDocuments' key
             const context = {
                 songList: songs.map(song => {
                     return {
                         title: song.title,
                         artist: song.artist
                     }
                 })
             }
             // rendering usersDocuments from context Object
             console.log(context.songList.length)
             res.render('songs', {
                 songList: context.songList
             })*/
        })
        .catch(err => console.log(err));
})

//show add new song form
router.get('/add', (req, res) => {
    res.render('add_song');
});

//add a song
router.post('/add', (req, res) => {

    let {title, album, artist, albumArtist, year, disc, track, genre, lyrics} = req.body;
    let errors = [];
    lyrics = lyrics.trim();

    //validation
    if (!title) {
        errors.push({text: 'Please add the title'});
    }
    if (!album) {
        errors.push({text: 'Please add the album'});
    }
    if (!albumArtist) {
        errors.push({text: 'Please add the album artist'});
    }
    if (!year) {
        errors.push({text: 'Please add the year of release'});
    }
    if (!genre) {
        errors.push({text: 'Please add the genre'});
    }

    //checking errors
    if (errors.length > 0) {
        res.render('add_song', {
            errors,
            title,
            album,
            artist,
            albumArtist,
            year,
            disc,
            track,
            genre,
            lyrics,
        });

    } else {
        if (!disc) disc = '';
        if (!track) track = '';
        if (!lyrics) lyrics = '';

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
            lyrics,
        })
            .then(() => res.redirect('/songs'))
            .catch(err => {
                console.log('Error:' + err);
                res.sendStatus(500);
            });
    }
})

module.exports = router;