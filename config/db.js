const Sequelize = require('sequelize');

//musician: DB-name, postgres: user, BanglaDesh: user-password, localhost: host, postgres: DB
module.exports = new Sequelize('dfia4vj1b1lrc6', 'mwrydqyxitfwbd', 'ec55ae8ac265506808be30a0642156cfb78059124d4b3652075c5de485b741f2', {
    host: 'ec2-50-17-178-87.compute-1.amazonaws.com',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 50000,
        idle: 10000
    }
});