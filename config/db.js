const Sequelize = require('sequelize');

module.exports = new Sequelize('musician', 'postgres', 'BanglaDesh', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 50000,
        idle: 10000
    }
});