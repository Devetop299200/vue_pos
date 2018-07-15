var should = require('chai').should()
  , expect = require('chai').expect
  , supertest = require('supertest')
  , api = supertest('http://127.0.0.1:24004');

describe('node_port', function(){
  it('should return a 200 response', function(done){
    api.get('/ssrconfig')
      .set('Accept', 'application/json')
      .expect(200, done);
    this.timeout(500);
    setTimeout(done, 300);
  })
})

describe('node_port2', function(){
  it('should return a 200 response', function(done){
    api.get('/ssrconfig')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body).to.have.property('name');
    })
    this.timeout(500);
    setTimeout(done, 300);
  })
})

describe('node_port3', function(){
  it('should return a 200 response', function(done){
    api.post('/adminlogin')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function (err, res) {
        expect(res.body).to.have.property('name');
      })
    this.timeout(500);
    setTimeout(done, 300);
  })
})
