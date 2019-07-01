require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const SpritesService = require('./services/sprites-service');
const SoundscapesService = require('./services/soundscapes-service');
const EnvironmentsService = require('./services/environments-service');

const app = express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(cors());
app.use(helmet());

// 'db' is set in server.js then passed in to app -> app.set

app.get('/soundscapes', (req, res, next) => {
  const knexInstance = req.app.get('db');
  SoundscapesService.getAllSoundscapes(knexInstance)
    .then(soundscapes => {
      res.json(soundscapes);
    })
    .catch(next);
});

app.get('/soundscapes/:soundscape_id', (req, res, next) => {
  const knexInstance = req.app.get('db');
  SoundscapesService.getById(knexInstance, req.params.soundscape_id)
    .then(soundscape => {
      if (!soundscape) {
        return res.status(404).json({
          error: { message: `Soundscape doesn't exist` },
        });
      }
      res.json(soundscape);
    })
    .catch(next);
});

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
      if (!sprite) {
        return res.status(404).json({
          error: { message: `Sprite doesn't exist` },
        });
      }
      res.json(sprite);
    })
    .catch(next);
});

app.get('/environments', (req, res, next) => {
  const knexInstance = req.app.get('db');
  EnvironmentsService.getAllEnvironments(knexInstance)
    .then(environments => {
      res.json(environments);
    })
    .catch(next);
});

app.get('/environments/:environment_id', (req, res, next) => {
  const knexInstance = req.app.get('db');
  EnvironmentsService.getById(knexInstance, req.params.environment_id)
    .then(environment => {
      if (!environment) {
        return res.status(404).json({
          error: { message: `Environment doesn't exist` },
        });
      }
      res.json(environment);
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
