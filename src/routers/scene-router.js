const express = require('express');
const SceneService = require('../services/scene-service');

const sceneRouter = express.Router();
const jsonParser = express.json();


sceneRouter.route('/:scene_id').get((req, res, next) => {
  const knexInstance = req.app.get('db');
  SceneService.getById(knexInstance, req.params.sprite_id)
    .then(scene => {
      if (!scene) {
        return res.status(404).json({
          error: { message: `Scene doesn't exist` },
        });
      }
      res.json(scene);
    })
    .catch(next);
});


module.exports = sceneRouter;
