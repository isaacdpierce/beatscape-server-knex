require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

const soundscapesRouter = require('./routers/soundscapes-router');
const spritesRouter = require('./routers/sprites-router');
const environmentsRouter = require('./routers/environments-router');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

// 'db' is set in server.js then passed in to app -> app.set

app.use('/soundscapes', soundscapesRouter);
app.use('/sprites', spritesRouter);
app.use('/environments', environmentsRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
  1;
});

module.exports = app;
