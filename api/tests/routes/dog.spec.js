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
    describe('GET /dogs', () => {
        it('should get 200', () =>
            agent.get('/dogs').expect(200)
        );
    });
    describe('GET /dogs?name=Kenneth Mazuelos', () => {
        it('should get 200', () =>
            agent.get('/dogs?name=Kenneth Mazuelos').expect(200)
        )
    })
    describe('GET /dogs?name=Pugs', () => {
        it('muestra el nombre Pugs', function () {
                return agent.get('/dogs?name=Pugss')
                    .expect(200)
                    .expect("content-Type",/json/)
                    .expect(function(res){
                        expect(res.body).eql({
                            "Error": "La raza no existe"
                        });
                    })

            }
        )
    })

});
