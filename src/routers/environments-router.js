const express = require('express');
const EnvironmentsService = require('../services/environments-service');

const environmentsRouter = express.Router();
const jsonParser = express.json();

environmentsRouter.route('/').get((req, res, next) => {
  const knexInstance = req.app.get('db');
  EnvironmentsService.getAllEnvironments(knexInstance)
    .then(environments => {
      res.json(environments);
    })
    .catch(next);
});

environmentsRouter.route('/:environment_id').get((req, res, next) => {
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

module.exports = environmentsRouter;
