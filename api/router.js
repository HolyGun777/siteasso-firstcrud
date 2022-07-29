const express = require('express')
const router = express.Router()

const db = require('./config/db')

// db.query('select * from article', (err, data) => {
//     console.log('pdrfisgjrqes', data)
// })

// Router
router.get('/', function (req, res) {
    res.render('home')
})

router
    .get('/article/:id', async (req, res) => {
        const { id } = req.params
        const article = await db.query(`SELECT * FROM article WHERE idarticle = ${ id }`)

        if (article.length <= 0) res.redirect('/')

        else res.render('article', {
            article: article[0]
        })
    })
    .put('/article/:id', async (req, res) => {
        console.log('edit::article', req.params, req.body)
        const {
            id
        } = req.params;
        const {
            titre,
            text
        } = req.body;

        if (titre) await db.query(`UPDATE article SET titre = "${ titre }" WHERE idarticle = ${ id }`)
        if (text) await db.query(`UPDATE article SET text = "${ text }" WHERE idarticle = ${ id }`)

        res.redirect('/admin')
    })
    .delete('/article/:id', async (req, res) => {
        const {
            id
        } = req.params
        if (id) await db.query(`DELETE FROM article WHERE idarticle = ${id}`)
        res.redirect('/admin')
    })

router
    .get('/article', async (req, res) => {
        const data = await db.query('SELECT * FROM article')
        res.render('article', {
            dbArticles: data
        })
    })
    .post('/article', (req, res) => {
        console.log('create::article', req.body)
        const {
            titre,
            text
        } = req.body
        db.query(`INSERT INTO article (titre, text) VALUES ("${ titre }", "${ text }")`)
        res.redirect('/admin')
    })

router.get('/biographie', function (req, res) {
    res.render('biographie')
})

router.get('/formulaire', function (req, res) {
    res.render('formulaire')
})

router.get('/inscription', function (req, res) {
    res.render('inscription')
})

router.get('/admin1', function (req, res) {
    res.render('admin1', {
        layout: 'adminLayout'
    })
})

router.get('/admin', function (req, res) {
    db.query('SELECT * FROM article', (err, data) => {
        res.render('admin', {
            dbArticles: data
        })
    })
})

router.get('/admin2', function (req, res) {
    res.render('admin2')
})

router.get('/sitepartenaire', function (req, res) {
    res.render('sitepartenaire')
})

router.get('/pageerreur', function (req, res) {
    res.render('pageerreur')
})

router.get('/*', function (req, res) {
    res.render('pageerreur')
})

module.exports = router