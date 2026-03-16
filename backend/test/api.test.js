const request = require('supertest');
const express = require('express');

// Create a mock app for testing without DB connection
const app = express();
app.use(express.json());

// Mock health route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

describe('API Endpoints', () => {
  it('should return 200 OK for /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('OK');
  });
});
