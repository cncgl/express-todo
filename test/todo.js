var router = require('../routes'),
    should = require('chai').should(),
    expoect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3000/api');

describe('todos', function() {
    it('should return a 200 response', function(done) {
        api.get('/todos/1')
            .set('Accespt', 'application/json')
            .expect(200, done);
    })
});