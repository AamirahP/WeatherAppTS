import express from 'express';
import app from '../backend/backend';

describe('Server Setup Test', () => {
  it('should initialize the express app', () => {
    expect(app).toBeInstanceOf(express.application);
  });

  // it('should use middleware for CORS', () => {
  //   const mockApp = express();
  //   mockApp.use(require('cors')());
  //   expect(app._router.stack).toEqual(mockApp._router.stack);
  // });

  // it('should use JSON parsing middleware', () => {
  //   const mockApp = express();
  //   mockApp.use(require('express').json());
  //   expect(app._router.stack).toEqual(mockApp._router.stack);
  // });


});
