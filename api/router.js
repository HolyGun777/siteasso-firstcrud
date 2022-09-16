const express = require('express')
const router = express.Router()
const db = require('./config/db')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
require('dotenv').config()
const multer = require("multer");
const {
    MulterError
} = require('multer')

require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: "pop-mail.outlook.com",
    service: 'outlook',
    port: '995',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

/*
 * Config Multer
 * ************** */

// Ici nous définissons la config de stockage de multer
const storage = multer.diskStorage({
    // Ici la destination (ou seront stocker nos fichiers par default)
    destination: (req, file, cb) => {
        cb(null, './public/upload')
    },
    // Ici est définit le format du nom de l'image à stocker
    filename: (req, file, cb) => {
        console.log('config multer', file, file.originalname)
        const ext = file.originalname.slice(-3),

            completed = file.originalname

        file.completed = completed

        // name_timestamp.ext

        cb(null, completed)
    }
})

// Ici seront initialiser les parametre de la config de multer
const upload = multer({
    // Ici nous renseignons le stockage definit au dessus
    storage: storage,
    // Ici seront renseigner les limits des fichiers (taile, proportion, ...)
    limits: {
        files: 1
    },
    // Ici nous avons un filtre qui va nous permetre de configurer les extensions accepter par notre middleware ou autre
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/gif"
        ) {
            cb(null, true)
        } else {
            cb(null, false)
            cb(new Error('Le fichier doit être au format png, jpg, jpeg ou gif.'))
        }
    }
})
///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * ----ROUTER----
 * ************** */

router.route('/ping').get((req, res) => res.json({
    message: "Pong !"
}))

router.get('/', function (req, res) {
    res.render('home')
})

/*
 * Router Multer
 * ************* */
router.route("/article")
    .post(upload.single('image'))

router.post("/admin/:id", upload.single('image'), async (req, res) => {
    const {
        image
    } = req.body;
    const imageID = req.file ? req.file.filename : false;

    if (image) await db.query(`INSERT INTO article SET image="${image}", id="${imageID}" , image="${image}"`),
        console.log("image OK");
    else await db.query(`INSERT INTO article SET image="${image}", id="${imageID}" , image=''`);

    res.redirect("/");
})

///////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Router article
 * ************** */
router
    .get('/article/:id', async (req, res) => {
        const {
            id
        } = req.params
        const article = await db.query(`SELECT * FROM article WHERE idarticle = ${ id }`)
        if (article.length <= 0) res.redirect('/')
        else res.render('articleID', {
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Router stage
 * ************ */

router
    .get('/stage/:id', async (req, res) => {
        // console.log('stage ID', req.params);
        const {
            id
        } = req.params
        const [stage] = await db.query(`SELECT * FROM stage WHERE idstage = ${ id }`)

        if (!stage) {
            if (process.env.MODE === 'test') {
                res.json({
                    message: "Stage introuvable",
                })
            } else {
                res.redirect('/')
            }
        } else {
            if (process.env.MODE === 'test') {
                res.json({
                    message: "Stage trouvé",
                    stage
                })
            } else {
                res.render('stageID', {
                    stage
                })
            }
        }
    })

    .put('/stage/:id', async (req, res) => {
        console.log('edit::stage', req.params, req.body)
        const {
            id
        } = req.params;
        const {
            titre,
            text
        } = req.body;

        if (titre) await db.query(`UPDATE stage SET titre = "${ titre }" WHERE idstage = ${ id }`)
        if (text) await db.query(`UPDATE stage SET text = "${ text }" WHERE idstage = ${ id }`)
        const data = await db.query(`SELECT * FROM stage WHERE idstage = ${ id }`)

        // condition pour renvoyer du Json en MODE test
        if (process.env.MODE === 'test') {
            res.json({
                message: "Put stage :id",
                dbstage: data
            })
        } else {
            res.redirect('/admin')
        }
    })
    .delete('/stage/:id', async (req, res) => {
        // console.log('delete::stage', req.params, req.body)
        const {
            id
        } = req.params
        if (id) await db.query(`DELETE FROM stage WHERE idstage = ${id}`)

        const data = await db.query('SELECT * FROM stage')
        
        if (process.env.MODE === 'test') {
            res.json({
                message: "delete ok",
                dbstage: data
            })
        } else {
            res.redirect('/admin')
        }

    })

router
    .get('/stage', async (req, res) => {
        const data = await db.query('SELECT * FROM stage')
        console.log('test1');

        if (process.env.MODE === 'test') {
            res.json({
                dbstage: data,
                            
            })
        } else {
            res.render('stage', {
                dbstage: data
            })
            console.log('test2');
        }
    })

    .post('/stage', async (req, res) => {
        const {
            titre,
            text
        } = req.body

        const data = await db.query(`INSERT INTO stage (titre, text) VALUES ("${ titre }", "${ text }")`)
        const [newStage] = await db.query(`SELECT * FROM stage WHERE idstage = ${ data.insertId }`)

        if (process.env.MODE === 'test') {
            res.json({
                dbStage: data,
                newStage
            })
        } else {
            res.redirect('/stage')
        }
    })

router.get('/admin', async (req, res) => {
    res.render('admin', {
        layout: 'adminLayout',
        dbstage: await db.query('SELECT * FROM stage'),
        dbArticles: await db.query('SELECT * FROM article')
    })
})
////////////////////////////////////////////////////////////////////////////////////////////////////////////


router.get('/biographie', function (req, res) {
    res.render('biographie')
})

router.get('/formulaire', async function (req, res) {
    res.render('formulaire', {
        dbstage: await db.query('SELECT * FROM stage')
    })
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

        if (!nom || !prenom || !mail || !numero || !pseudo || !motdepasse) {
            if (process.env.MODE === "test") {
                return res.json({
                    message: "Il manque une information dans votre formulaire"
                })
            } else {
                return res.redirect('/')
            }
        }

        const data = await db.query(`INSERT INTO user (nom,prenom,mail,numero,pseudo,motdepasse) VALUES 
        ("${ nom }","${ prenom }","${ mail }","${ numero }","${ pseudo }","${ await bcrypt.hash(motdepasse, 10) }")`)

        const [newUser] = await db.query(`SELECT * FROM user WHERE id = ${ data.insertId }`)
        if (process.env.MODE === "test") {
            res.json({
                message: "Il manque une information dans votre formulaire",
                newUser
            })
        } else {
            res.redirect('/')
        }

    })

router.get('/pageerreur', function (req, res) {
    res.render('pageerreur')
})


/*
 * Router inscription
 * ****************** */
router
    // .get('/user/:id', async (req, res) => {
    //     const {
    //         id
    //     } = req.params
    //     const user = await db.query(`SELECT * FROM user WHERE id = ${ id }`)
    //     if (user.length <= 0) res.redirect('/')
    //     else res.render('/', {
    //         user: user[0]
    //     })
    // })
    .put('/user/:id', async (req, res) => {
        // console.log('edit::user', req.params, req.body)
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

/*
 * Connection utilisateur
 * ****************** */
router
    .post('/login', (req, res) => {
        const {
            email,
            password
        } = req.body

        db.query(`SELECT * FROM user WHERE mail = "${email}"`, function (err, data) {
            if (err) console.log(err);

            if (!data[0]) return res.redirect('/')

            bcrypt.compare(password, data[0].motdepasse, function (err, result) {
                if (err) console.log(err)
                if (!result) {

                    if (process.env.MODE === "test") {
                        res.json({
                            message: 'Une erreur est survenu !'
                        })
                    } else {
                        return res.render('home', {
                            flash: "L\'email ou le mot de passe n\'est pas correct !"
                        })
                    }
                }
                if (result) {
                    let user = data[0];
                    // Assignation des data user dans la session
                    req.session.user = {
                        id: user.id,
                        email: user.mail,
                        pseudo: user.pseudo
                    };

                    if (process.env.MODE === "test") {
                        res.json({
                            message: 'vous êtes connecté'
                        })
                    } else {
                        res.redirect('/')
                    }
                }
            });
        })
    })
///////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Router Nodemailer
 * ***************** */
router.post('/contact', (req, res) => {
    console.log('form contact', req.body)
    const {
        email,
        message
    } = req.body
    let mailOptions = {
        from: 'eddyleguen2@outlook.fr',
        to: 'eddyleguen2@outlook.fr',
        subject: 'Sujet',
        html: `
                  <h2>Mail:</h2>
                  ${email}
                  <h2>Sujet:</h2>
                  ${message}
                `
    }
    // On demande à notre transporter d'envoyer notre mail
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err)
        else {
            console.log(info)
            res.render('home', {
                success: "Un email à bien été envoyer à ",
                flash: ('Votre message a été envoyé !!!')
            })
        }
    })
})

// Partie deconnection
router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('poti-gato');
        console.log("Clear Cookie session :", req.sessionID);
        res.redirect('/');
    })
})


// router.get('/*', function (req, res) {
//     res.render('pageerreur')
// })

module.exports = router