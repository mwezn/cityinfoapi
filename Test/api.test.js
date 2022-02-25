const request = require('supertest');
const app = require("../app");

describe('api test', () => {
    it('tests /cinema endpoints', async() => {
        const response = await request(app).get("/cinema");
        expect(response.body).toEqual({});
        expect(response.statusCode).toBe(200);
    });

    it('tests /parks endpoints', async() => {
        const response = await request(app).get("/parks");
        expect(response.body).toEqual({});
        expect(response.statusCode).toBe(200);
    });
    it('tests /cities endpoints', async() => {
        const response = await request(app).get("/cities");
        expect(response.body).toEqual({});
        expect(response.statusCode).toBe(200);
    });
    it()
});
