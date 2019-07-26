const SpritesService = {
  getAllSprites(knex) {
    return knex.select('*').from('sprites');
  },
  insertSprite(knex, newSprite) {
    return knex
      .insert(newSprite)
      .into('sprites')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex
      .select('*')
      .from('sprites')
      .where('sprite_id', id)
      .first();
  },
  // TODO - Get working with new db config
  // getByCategory(knex, category_id) {
  //   return knex
  //     .select('*')
  //     .from('sprites')
  //     .where('sprite_id', category_id);
  // },
  deleteSprite(knex, sprite_id) {
    return knex
      .from('sprites')
      .where({ sprite_id })
      .delete();
  },
};

module.exports = SpritesService;
