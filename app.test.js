const app = require('./app');
const request = require('supertest');

describe('GET /about/', function(){
  test('should return successfully', function(){
    // use .then() to manage the async tests
    // return the promise to jest
    return request(app)
      .get('/about/')
      .then(function(response){
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('About what?');
      });
      // .expect('Content-Type', 'application/json')
  });
});
