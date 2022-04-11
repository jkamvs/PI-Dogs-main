/* eslint-disable import/no-extraneous-dependencies */
const {expect} = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const {Dog, conn} = require('../../src/db.js');

const agent = session(app);
const dog = {
    name: 'Pugs'
};

describe('Videogame routes', () => {
    before(async () => await conn.authenticate()
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        }));
    beforeEach(() => Dog.sync({force: true})
        .then(() => Dog.create(dog)));

    it('should get 200', () =>
        agent.get('/dogs')
            .expect('content-Type', /json/)
            .expect(200)
    );
    it('should get 200', () =>
        agent.get('/dogs?name=Kenneth Mazuelos')
            .expect('content-Type', /json/)
            .expect(200)
    )
    it('No encuentra la raza y manda un mensaje de Erro atravez de un objeto', function () {
            return agent.get('/dogs?name=Pugss')
                .expect(200)
                .expect("content-Type", /json/)
                .expect(function (res) {
                    expect(res.body).eql({
                        "Error": "La raza no existe"
                    });
                })
        }
    )
    it('should get 200 temper', () =>
        agent.get('/temperament')
            .expect('content-Type', /json/)
            .expect(200)
    )
    it('create a new data',()=>
        agent.post("/dog")
            .send({	"name":"kenneth",
                "height":"asda",
                "weight":"asdadsa",
                "life_span":"11 years",
                "temp":["Bossy","Loyal"]})
            .expect(201)
    )
});
