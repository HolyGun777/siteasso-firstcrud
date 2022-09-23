const mysql = require('mysql');
const assert = require('assert');

////////////////////////////test database//////////////////////////////////////////

// Config DB
let configDB = {
  host: 'localhost',
  user: 'eddy',
  password: 'bambi1',
  database: 'test'
};

// Création de la connection avec les paramètres donner
let db = mysql.createConnection(configDB);

// Config ASYNC
const util = require("util");
db.query = util.promisify(db.query).bind(db);

describe('Test data', function () {

  it('Test connexion DB', function () {
    // Connexion de la db mysql
    db.connect((err) => {
      if (err) console.error('error connecting: ', err.stack);
      // console.log('connected as id ', db.threadId);
      assert.equal(typeof 0, typeof db.threadId);
    });
  });

  describe('Test database', function () {
    let stage = {}
    let newStage = {}

    beforeEach(async () => {
      console.log("beforeEach")
      // on insert un stage dans la db
      let art = await db.query(`INSERT INTO stage (titre, text) VALUES ("TITRE 1", "loremloremlorem")`)
      let res = await db.query(`SELECT * FROM stage WHERE idstage = ${art.insertId}`)
      //on stocke res dans stage 
      stage = res[0]
    })

    afterEach(async () => {
      console.log("after each")
      await db.query(`DELETE FROM stage WHERE idstage = ${stage.idstage}`)
      if (newStage.idstage) await db.query(`DELETE FROM article WHERE idstage = ${newStage.idstage}`)
    })

    it('Test Async getStage', async function () {
      console.log('it')
      let res = await db.query('Select * from stage')
      // console.log(res);
      assert.strictEqual(typeof res, typeof []);
    });

    it('Test Create ID', async function () {
      console.log('it')
      let art = await db.query(`INSERT INTO stage (titre, text) VALUES ("TITRE 1", "TaSoeurEnShort")`)
      const data = await db.query(`Select * from stage WHERE idstage = ${art.insertId}`)
      newArticle = data[0]
      assert.strictEqual(typeof data[0], typeof {});
    });
  });
});
