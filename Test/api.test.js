const supertest = require('supertest');
const app = require("../server");
const request= supertest(app)

describe('api test', () => {
    it('gets the cinemas endpoint', async ()=> {
        const res = await request.get("/cinemas");
        expect(res.statusCode).toBe(200)
    });
    it('cant post to cinemas endpoint', async ()=>{
        const res=await request.post("/cinemas")
        expect(res.statusCode).toBe(404)
    })
});
