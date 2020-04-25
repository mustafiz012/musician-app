const express = require('express');
const Sequelize = require('sequelize');

//Database
const db = require('./config/db');

//Test DB
db.authenticate()
    .then(() => console.log('Database connected.'))
    .catch(err => console.error('Error: ' + err));

const app = express();

app.get('/', (req, res) => {
    res.send("Home");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is live at ${PORT}`));