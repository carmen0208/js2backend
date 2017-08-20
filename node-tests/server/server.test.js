const expect = require('expect');
const request = require('supertest');

var app = require('./server').app

describe('Server', () => {
    describe('GET /', () => {
        it('should return hello world respone', (done)=> {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    error: 'Page not found.'
                });
            })
            .end(done);
        });
    });

    describe('GET /users', () => {
        // Make a new test
        // assert 200
        // Assert that you exist in users array
        it('should return my user object', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res)=> {
                expect(res.body).toInclude({
                    name: 'carmen',
                    age: 5
                });
            })
            .end(done);
        });
    });
});