const express = require('express');
const SpritesService = require('../services/sprites-service');

const spritesRouter = express.Router();
const jsonParser = express.json();

spritesRouter.route('/').get((req, res, next) => {
  const knexInstance = req.app.get('db');
  SpritesService.getAllSprites(knexInstance)
    .then(sprites => {
      res.json(sprites);
    })
    .catch(next);
});

spritesRouter.route('/:sprite_id').get((req, res, next) => {
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
spritesRouter.route('/scenes/:scene').get((req, res, next) => {
  const knexInstance = req.app.get('db');

  console.log('Scenes parameters is ' + req.params.scene);

  SpritesService.getByScene(knexInstance, req.params.scene)
    .then(sprites => {
      res.json(sprites);
    })
    .catch(next);
});

module.exports = spritesRouter;
