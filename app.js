const express = require('express');
const Handlebars = require('handlebars');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

// Import function exported by newly installed node modules.
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

//Database
const db = require('./config/db');

//Test DB
db.authenticate()
    .then(() => console.log('Database connected.'))
    .catch(err => console.error('Error: ' + err));

const app = express();

//Handlebars
// When connecting Handlebars to the Express app...
app.engine('handlebars', exphbs({
        defaultLayout: 'main',
        // ...implement newly added insecure prototype access
        handlebars: allowInsecurePrototypeAccess(Handlebars)
    })
);
app.set('view engine', 'handlebars');

//Body parser
app.use(bodyParser.urlencoded({extended: false}));

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
    res.render('index', {layout: 'landing'});
});
app.use('/songs', require('./routes/songs'));
app.use('/artists', require('./routes/artists'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is live at ${PORT}`));