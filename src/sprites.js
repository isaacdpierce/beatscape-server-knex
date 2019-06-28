require('dotenv').config();
const knex = require('knex');
const SpritesService = require('./sprites-service');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

// use all the SpritesService methods!!
SpritesService.getAllSprites(knexInstance)
  .then(sprites => console.log(sprites))
  .then(() =>
    SpritesService.insertSprite(knexInstance, {
      sprite_name: 'New Name',
      sprite_url: 'https://www.new-url.com',
      category: 'New Category',
    })
  )
  .then(() => SpritesService.getById(knexInstance, newSprite.sprite_id))
  .then(sprite => {
    console.log(sprite);
    return SpritesService.deleteSprite(knexInstance, sprite.sprite_id);
  });

console.log(SpritesService.getAllSprites());
