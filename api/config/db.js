const mysql = require("mysql");
require('dotenv').config()

const config = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

// Instance mysql
db = mysql.createConnection(config);

const util = require("util");
// permet d utiler db dans des fonctions assyncrhone.
db.query = util.promisify(db.query).bind(db);

// Connect node -> mysql
db.connect((err) => {
    if (err) console.error("error connecting: " + err.stack);
    console.log("connected as id " + db.threadId);
});

module.exports = db