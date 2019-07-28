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
     console.log(`Sprite Service Called ID is ${id}`);
     return knex
       .select('sprite_url')
       .from('sprites')
       .innerJoin(
         'categories_sprites',
         'sprites.sprite_id',
         'categories_sprites.sprite_id'
       )
       .where({ 'categories_sprites.category_id': id });
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
