const express = require('express');
const SoundscapesService = require('../services/soundscapes-service');

const soundscapesRouter = express.Router();
const jsonParser = express.json();

soundscapesRouter.route('/').get((req, res, next) => {
  const knexInstance = req.app.get('db');
  SoundscapesService.getAllSoundscapes(knexInstance)
    .then(soundscapes => {
      res.json(soundscapes);
    })
    .catch(next);
});

soundscapesRouter.route('/:soundscape_id').get((req, res, next) => {
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

module.exports = soundscapesRouter;
