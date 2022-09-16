const chaiHttp = require('chai-http'),
    chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    {app} = require("../server");
    chai.use(chaiHttp);

///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////TEST Chai////////////////////////////////////

// Description de notre test
describe("CHAI // CONTROLLER // STAGE", () => {

    // On définit des variables à utiliser plus tard
    let id;
    let stage = "";
    let cookieSess = "";

    it("CHAI // GET // PING", (done) => {
        chai
            .request(app)
            .get('/ping')
            .end((err, res) => {
                if (err) return done(err)
                done()
            })
    })


        // // Test Route POST Login
        // it(" ChaiRouter // POST // Inscription", (done) => {
        //     chai
        //         .request(app)
        //         .post("/inscription")
        //         .set("Accept", "application/json")
        //         .send({
        //             nom: "ccc",
        //             prenom: "ccc",
        //             mail: "ccc@ccc",
        //             numero: "0000000000",
        //             pseudo: "ccc",
        //             motdepasse: "ccc",
        //         })
        //         .end((err, res) => {
        //             if (err) return done(err);
        //             res.should.have.status(200);
        //             done();
        //         });
        // });
    
    
    // // Test Route POST Login
    it("ChaiRouter // POST // Login", (done) => {
        chai
            .request(app)
            .post("/login")
            .set("Accept", "application/json")
            .send({email: "ccc@ccc", password: "ccc"})
            .end((err, res) => {
                cookieSess = res.res.headers['set-cookie'][0].split(';')[0]
                if (err) return done(err);
                res.should.have.status(200);
                done();
            });
    });


///////////////////////////////////////////////////////////////////////
    // Test Route GET stage
    it("ChaiRouter // GET // STAGE", (done) => {
    // Nous appelons chai avec .request(app) afin de venir cherher les routes de notre application
        chai
            .request(app)
            // Ensuite nous stipulons la route
            .get("/stage")
            .set("Accept", "application/json")
            .set('Cookie', cookieSess)
            // Et enfin nous allons pouvoir checker le format de notre réponse
            .end((err, res) => {

                if (err) return done(err);

                // Ici on demande à ce que res.body.stage doit être un 'array'
                res.body.dbstage.should.be.a("array");   

                // Ici on demande à ce que res soit un status 200
                res.should.have.status(200);
                // Et le done() permet de cloturer notre test
                done();
            });
    });

    
        // // Test Route POST stages
        it("ChaiRouter // POST // Stage", (done) => {
            chai
                .request(app)
                .post("/stage")
                .set("Accept", "application/json")
                .set('Cookie', cookieSess)
                .send({
                    titre: "Mon super titre",
                    text: "Mon super text"
                })
                .end((err, res) => {
                    // console.log('test res post stage', res.body);
                    if (err) return done(err);
                    res.body.newStage.should.be.a("object");
                    res.should.have.status(200);
                    stage = res.body.newStage
                    done();
                });
        });

        // // // Test Route GET stage ID
        it("ChaiRouter // GET // ID Stages", (done) => {
            chai
                .request(app)
                .get(`/stage/${stage.idstage}`)
                .set("Accept", "application/json")
                .set('Cookie', cookieSess)
                .end((err, res) => {
                    // console.log('test res getID/stage', res.body)
                    if (err) return done(err);
                    res.should.have.status(200);
                    done();
                });
        });

    //     // // Test Route PUT Stages
        it("ChaiRouter // PUT // Stage", (done) => {

            chai
                .request(app)
                .put("/stage")
                .set("Accept", "application/json")
                .set('Cookie', cookieSess)
                .send({
                    titre: 'Monsupertitre',
                    text: 'mon super text'
                })
                .end((err, res) => {
                    if (err) return done(err);
                    res.should.have.status(200);
                    done();
                });
        });

    //     // // Test Route DELETE Stage 

        it(" ChaiRouter // DELETE // Stage ID", (done) => {
            chai
                .request(app)
                .delete(`/stage/${stage.idstage}`)
                .set("Accept", "application/json")
                .set('Cookie', cookieSess)
                .end((err, res) => {
                    // console.log(res);
                    if (err) return done(err);
                    res.should.have.status(200);
                    done();
                });
        });
});