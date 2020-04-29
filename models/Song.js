const Sequelize = require('sequelize');
const db = require('../config/db');

module.exports = db.define('song', {
    title: {
        type: Sequelize.STRING
    }, album: {
        type: Sequelize.STRING
    }, artist: {
        type: Sequelize.STRING
    }, albumArtist: {
        type: Sequelize.STRING
    }, year: {
        type: Sequelize.INTEGER
    }, disc: {
        type: Sequelize.INTEGER
    }, track: {
        type: Sequelize.INTEGER
    }, genre: {
        type: Sequelize.STRING
    }, lyrics: {
        type: Sequelize.TEXT
    }
})