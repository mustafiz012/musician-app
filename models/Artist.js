const Sequelize = require('sequelize');
const db = require('../config/db');

module.exports = db.define('artist', {
    name: {
        type: Sequelize.STRING
    }, country: {
        type: Sequelize.STRING
    }, genre: {
        type: Sequelize.STRING
    }, createdAt: {
        type: Sequelize.DATE
    }, updatedAt: {
        type: Sequelize.DATE
    }
})