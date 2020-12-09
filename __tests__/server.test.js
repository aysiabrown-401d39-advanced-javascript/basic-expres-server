'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('web server', () => {
    it('should respond with a 404 on a bad route',() => {
        return mockRequest
        .get('/kiara')
        .then(results => {
            expect(results.status).toBe(404)
        }).catch(console.error);
    })

    it('should respond with a 404 on a bad method', () => {
        return mockRequest
        .post('/person')
        .then(results => {
            expect(results.status).toBe(404)
        }).catch(console.error);
    })

    it('should respond with 500 if no name in the query string', () => {
        return mockRequest
        .get('/person')
        .then(results => {
            expect(results.status).toBe(500)
        }).catch(console.error);
    })

    it('should respond with 200 if the name is in the query string', () => {
        return mockRequest
        .get('/person?name=midna')
        .then(results => {
            expect(results.status).toBe(200)
            expect(results.text).toBe("{\"name\":\"midna\"}")
        }).catch(console.error)
    })
})




// 404 on a bad route
// 404 on a bad method
// 500 if no name in the query string
// 200 if the name is in the query string
// given an name in the query string, the output object is correct