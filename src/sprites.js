require('dotenv').config();
const knex = require('knex');
const SpritesService = require('./sprites-service');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

console.log(SpritesService.getAllSprites());
