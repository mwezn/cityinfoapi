const supertest = require('supertest');
const app = require("../server");
const request= supertest(app)

describe('api test', () => {
    it('gets the cinema endpoint', async ()=> {
        const res = await request.get("/cinemas");
        expect(res.statusCode).toBe(200)
    });
});
