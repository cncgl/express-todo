var expect = require('chai').expect,
  request = require('supertest'),
  app = require('../app');

describe('todos', function() {
  var id;

  it('posts an object', function(done) {
    request(app)
      .post('/api/todos')
      .send({ status: false, title: 'meeting' })
      .end(function(err, res) {
        // console.log(res.body);
        expect(err).to.eql(null);
        id = res.body.id;
        // console.log('id:'+id);
        done();
      });
  });

  it('retrieves an object', function(done) {
    request(app)
      .get('/api/todos/'+id)
      .end(function(err, res) {
        // console.log(res);
        expect(err).to.eql(null);
        expect(res.body.status).to.eql(false);
        done();
      });
  });

  it('retrieves a collection', function(done) {
    request(app)
      .get('/api/todos')
      .end(function(err, res) {
        // console.log(res.body);
        expect(res.body[res.body.length-1].id).to.eql(id);
        done();
      });
  });

  it('updates an object', function(done) {
    request(app)
      .put('/api/todos/'+id)
      .send({ status: true, title: 'movie' })
      .end(function(err, res) {
        // console.log(res.body);
        expect(res.body.id).to.eql(id);
        expect(res.body.status).to.eql(true);
        done();
      });
  });

  it('checks an updated object', function(done) {
    request(app)
      .get('/api/todos/'+id)
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.status).to.eql(true);
        done();
      });
  });

  it('removes an object', function(done) {
    request(app)
      .del('/api/todos/'+id)
      .end(function(err, res) {
        // console.log(res.body);
        expect(err).to.eql(null);
        done();
      })
  })
});