require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const SpritesService = require('./services/sprites-service');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

// TODO create GET sprites by id endpoint
app.get('/sprites', (req, res, next) => {
  const knexInstance = req.app.get('db');
  SpritesService.getAllSprites(knexInstance)
    .then(sprites => {
      res.json(sprites);
    })
    .catch(next);
});

app.get('/sprites/:sprite_id', (req, res, next) => {
  const knexInstance = req.app.get('db');
  SpritesService.getById(knexInstance, req.params.sprite_id)
    .then(sprite => {
      res.json(sprite);
    })
    .catch(next);
});

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
