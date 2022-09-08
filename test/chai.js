const chaiHttp = require('chai-http'),
    chai = require('chai'),
    should = chai.should(),
    expect = chai.expect,
    {
        app
    } = require("../server");

chai.use(chaiHttp);

///////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////TEST Chai////////////////////////////////////

// Description de notre test
describe("CHAI // CONTROLLER // STAGE", () => {

    // On définit des variables à utiliser plus tard
    let id;
    let cookieSess = "";

    it("CHAI // POST // LOGIN", (done) => {
        chai
            .request(app)
            .get('/ping')
            .end((err, res) => {
                if (err) return done(err)
                console.log(res.body)
                done()
            })

    })

    it("CHAI // POST // LOGIN", (done) => {

        chai
            .request(app)
            .post('/login')
            .set("Accept", "application/json")
            .send({
                email: "ccc@ccc",
                password: "ccc"
            })
            .end((err, res) => {
                cookieSession = res.res.headers['set-cookie'][0].split(';')[0]
                console.log('test res login', cookieSession)
                if (err) return done(err);
                res.should.have.status(200);
                done();
            });
    });
///////////////////////////////////////////////////////////////////////
    // // Test Route POST Articles
    // it("ChaiRouter // GET // STAGE", (done) => {
    //     // Nous appelons chai avec .request(app) afin de venir cherher les routes de notre application
    //     chai
    //         .request(app)
    //         // Ensuite nous stipulons la route
    //         .get("/stage")
    //         // Et enfin nous allons pouvoir checker le format de notre réponse
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             // Ici on demande à ce que res.body.stage doit être un 'array'
    //             res.body.stage.should.be.a("array");
    //             // Ici on demande à ce que res soit un status 200
    //             res.should.have.status(200);
    //             // Et le done() permet de cloturer notre test
    //             done();
    //         });
    // });







    // // Test Route POST Login
    // it(" ChaiRouter // POST // Login", (done) => {
    //     chai
    //         .request(app)
    //         .post("/login")
    //         .set("Accept", "application/json")
    //         .send({email: "admin@admin.mail", password: "admin"})
    //         .end((err, res) => {
    //             cookieSess = res.res.headers['set-cookie'][0].split(';')[0]
    //             if (err) return done(err);
    //             res.should.have.status(200);
    //             done();
    //         });
    // });

    //     // Test Route POST Articles
    //     it(" ChaiRouter // POST // Articles", (done) => {
    //         chai
    //             .request(app)
    //             .post("/article")
    //             .set("Accept", "application/json")
    //             .set('Cookie', cookieSess)
    //             .field("Content-Type", "multipart/form-data")
    //             .field("title", "mon title")
    //             .field("price", "9")
    //             .attach("art_image", path.resolve(__dirname, "./img.png"))
    //             .end((err, res) => {
    //                 if (err) return done(err);
    //                 res.body.id.should.be.a("number");
    //                 id = res.body.id
    //                 res.should.have.status(200);
    //                 done();
    //             });
    //     });

    //     // // Test Route GET Articles ID
    //     it(" ChaiRouter // GET // ID Articles", (done) => {
    //         chai
    //             .request(app)
    //             .get(`/article/${id}`)
    //             .set("Accept", "application/json")
    //             .set('Cookie', cookieSess)
    //             .end((err, res) => {
    //                 if (err) return done(err);
    //                 res.should.have.status(200);
    //                 done();
    //             });
    //     });

    //     // // Test Route PUT Articles
    //     it(" ChaiRouter // PUT // Articles", (done) => {

    //         chai
    //             .request(app)
    //             .put(`/article/${id}`)
    //             .set("Accept", "application/json")
    //             .set('Cookie', cookieSess)
    //             .field("Content-Type", "multipart/form-data")
    //             .field("title", "Bruno Edit Chai")
    //             .field("price", "909")
    //             .attach("edit_image", path.resolve(__dirname, "./img_edit.jpg"))
    //             .end((err, res) => {
    //                 if (err) return done(err);
    //                 res.should.have.status(200);
    //                 done();
    //             });
    //     });

    //     // // Test Route DELETE Articles
    //     it(" ChaiRouter // DELETE // Articles ID", (done) => {
    //         chai
    //             .request(app)
    //             .delete(`/article/${id}`)
    //             .set("Accept", "application/json")
    //             .set('Cookie', cookieSess)
    //             .end((err, res) => {
    //                 if (err) return done(err);
    //                 res.should.have.status(200);
    //                 done();
    //             });
    //     });

});