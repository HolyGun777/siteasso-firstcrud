const express = require('express')
const router = express.Router()
const db = require('./config/db')
const bcrypt = require('bcrypt')


// db.query('select * from article', (err, data) => {
//     console.log('pdrfisgjrqes', data)
// })

// Router
router.get('/', function (req, res) {
    res.render('home')
})

router
    .get('/article/:id', async (req, res) => {
        const {
            id
        } = req.params
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

router
    .get('/inscription', function (req, res) {
        res.render('inscription')
    })
    .post('/inscription', async (req, res) => {
        const {
            nom,
            prenom,
            mail,
            numero,
            pseudo,
            motdepasse
        } = req.body;
        console.log('inscription', req.body)

        db.query(`INSERT INTO user (nom,prenom,mail,numero,pseudo,motdepasse) VALUES 
    ("${ nom }","${ prenom }","${ mail }","${ numero }","${ pseudo }","${ await bcrypt.hash(motdepasse, 10) }")`)
        res.redirect('/')
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

router.get('/profile', function (req, res) {
    res.render('profile')
})

router.get('/pageerreur', function (req, res) {
    res.render('pageerreur')
})

router.get('/*', function (req, res) {
    res.render('pageerreur')
})

//Inscription
router
    .get('/:id', async (req, res) => {
        const {
            id
        } = req.params
        const user = await db.query(`SELECT * FROM user WHERE id = ${ id }`)
        if (user.length <= 0) res.redirect('/')
        else res.render('/', {
            user: user[0]
        })
    })
    .put('/:id', async (req, res) => {
        console.log('edit::user', req.params, req.body)
        const {
            id
        } = req.params;
        const {
            nom,
            prenom,
            mail,
            numero,
            pseudo,
            motdepasse
        } = req.body;
        if (nom) await db.query(`UPDATE user SET nom = "${ nom }" WHERE id = ${ id }`)
        if (prenom) await db.query(`UPDATE user SET prenom = "${ prenom }" WHERE id = ${ id }`)
        if (mail) await db.query(`UPDATE user SET mail = "${ mail }" WHERE id = ${ id }`)
        if (numero) await db.query(`UPDATE user SET numero = "${ numero }" WHERE id = ${ id }`)
        if (pseudo) await db.query(`UPDATE user SET nom = "${ pseudo }" WHERE id = ${ id }`)
        if (motdepasse) await db.query(`UPDATE user SET nom = "${ motdepasse }" WHERE id = ${ id }`)
        res.redirect('/')
    })

//Connection
router
    .post('/login', (req, res) => {
        const {
            mail,
            password
        } = req.body

        console.log("login", req.body)

        db.query(`SELECT * FROM user WHERE mail ="${mail}"`, function (err, data) {
            if (err) throw err;
            console.log(data);
            if (!data[0]) return res.redirect('/')

            bcrypt.compare(password, data[0].motdepasse, function (err, result) {
                if (result === true) {

                    let user = data[0];

                    // Assignation des data user dans la session
                    req.session.user = {
                        id: user.id,
                        email: user.mail,
                        pseudo: user.pseudo
                    };
                    console.log('ok login');
                    res.redirect('/')
                } else return res.render('home', {
                    flash: "L\'email ou le mot de passe n\'est pas correct !"
                })
            });
        })
    })

//variable global des donner utilisateur pour leur utiliser avec HBS par la suite
router.use('*', (req, res, next) => {
    res.locals.user = req.session.user;
    next();
})

// Partie deconnection

router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('poti-gato');
        console.log("Clear Cookie session :", req.sessionID);
        res.redirect('/');
    })
})


module.exports = router