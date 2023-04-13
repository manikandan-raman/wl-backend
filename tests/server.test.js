const mongoose = require("mongoose");
const createServer = require("../server");
const { connectDB, closeDB } = require("../config/db");
const request = require('supertest');

beforeEach((done) => {
    jest.useFakeTimers('legacy');
    connectDB().then(() => { console.log('db connected'); done();});
});

afterEach(async(done) => {
    await mongoose.connection.close();
    done();
});

const app = createServer();

// test("GET /users/:id", async() => {
//     await request(app).get('/users/6436984a4c301e7cff080a0b')
//     .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzU2YjliNTQ0Mjg1ZTU4YzBlYjgyNCIsIm5hbWUiOiJVc2VyIDIiLCJlbWFpbCI6InVzcl81MmZAZ21haWwuY29tIiwiaWF0IjoxNjgxMjczNjE0LCJleHAiOjE2ODEzNjAwMTR9.iYONoWKAIQQUNd-R36yCdmESgL4vP1Xu-Vj-mUPlnuU')
//     .expect(200)
//     .then((response) => {
//         expect(Array.isArray(response.body)).toBeTruthy();
//         expect(response.body.length).toEqual(1);
//     });
// }, 30000);

describe("GET /users/:id", () => {
    it("should return single user", async () => {
      const res = await request(app).get("/users/6436984a4c301e7cff080a0b")
      .set('Authorization', 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzU2YjliNTQ0Mjg1ZTU4YzBlYjgyNCIsIm5hbWUiOiJVc2VyIDIiLCJlbWFpbCI6InVzcl81MmZAZ21haWwuY29tIiwiaWF0IjoxNjgxMjczNjE0LCJleHAiOjE2ODEzNjAwMTR9.iYONoWKAIQQUNd-R36yCdmESgL4vP1Xu-Vj-mUPlnuU');
      expect(res.statusCode).toBe(200);
    //   expect(res.body.length).toBeGreaterThan(0);
    });
  });
  
