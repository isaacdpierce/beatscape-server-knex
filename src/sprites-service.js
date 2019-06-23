const SpritesService = {
  getAllSprites(knex) {
    return knex.select('*').from('sprites_list');
  },
  insertSprite(knex, newSprite) {
    return knex
      .insert(newSprite)
      .into('sprites_list')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
};

module.exports = SpritesService;
