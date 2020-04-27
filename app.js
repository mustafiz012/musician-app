const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Database
const db = require('./config/db');

//Test DB
db.authenticate()
    .then(() => console.log('Database connected.'))
    .catch(err => console.error('Error: ' + err));

const app = express();

/*//Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');*/

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send("Home");
});

//Routes
app.use('/songs', require('./routes/songs'));
app.use('/artists', require('./routes/artists'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is live at ${PORT}`));