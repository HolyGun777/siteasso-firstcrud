// Import Module global
require('dotenv').config()
const express = require('express');
const {
  engine
} = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const expressSession = require("express-session");
const MySQLStore = require("express-mysql-session")(expressSession);

// config swagger
// const expressOasGenerator = require('express-oas-generator');
// expressOasGenerator.init(app, {})

const swaggerUi = require('swagger-ui-express'),
  swaggerDocument = require('./api/config/swagger.json');
/////////////////////////////////////////////////////////////////

const {
  limitArray,
  stripTags,
  inc,
  ifCond,
  formatDate,
  upper,
  truncStr
} = require('./helpers');

// Config Handlebars
app.engine('.hbs', engine({
  extname: '.hbs',
  defaultLayout: "main",
  adminLayout: "adminLayout",
  helpers: {
    limitArray,
    stripTags,
    inc,
    ifCond,
    formatDate,
    upper,
    truncStr
  }
}));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(methodOverride('_method'));

// Route fichier static
app.use('/assets', express.static('public'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));
// parse application/json
app.use(bodyParser.json());

const configDB = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Configuration Express-Session
var sessionStore = new MySQLStore(configDB);
app.use(
  expressSession({
    secret: "securite",
    name: "poti-gato",
    saveUninitialized: true,
    resave: false,
    store: sessionStore
  })
);

// Session Connexion for HBS
app.use('*', (req, res, next) => {
  console.log("log::session", req.session);
  res.locals.user = req.session.user;
  next();
})

// Route pour API Swagger
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Router
const ROUTER = require("./api/router")
app.use(ROUTER)

// Run server
// app.listen(3000);
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Ecoute le port ${port}, lancé le : ${new Date().toLocaleString()}`);
});

module.exports = {
  db,
  app
}
