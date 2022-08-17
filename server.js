// Import Module global
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const { limitArray, stripTags, inc, ifCond, formatDate, upper, truncStr } = require('./helpers');

// Config Handlebars
app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: "main",
    adminLayout: "adminLayout",
    helpers: {
        limitArray, stripTags, inc, ifCond, formatDate, upper, truncStr
    }
}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(methodOverride('_method'));

// Route fichier static
app.use('/assets', express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


// Router
const ROUTER =  require("./api/router")
app.use(ROUTER)

// Run server
// app.listen(3000);
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Ecoute le port ${port}, lancé le : ${new Date().toLocaleString()}`);
});

const bcrypt = require('bcrypt')

const str = "1234695"

bcrypt.hash(str, 10, (err, hash) => {

    console.log('hash', hash)

    bcrypt.compare('133658', hash, (err, result) => {

        console.log('result', result)

    })
})

