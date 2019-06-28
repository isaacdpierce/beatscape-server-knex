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
  getById(knex, id) {
    return knex
      .from('sprites_list')
      .select('*')
      .where('sprite_id', id)
      .first();
  },
  deleteSprite(knex, sprite_id) {
    return knex('sprites_list')
      .where({ sprite_id })
      .delete();
  },
};

module.exports = SpritesService;
