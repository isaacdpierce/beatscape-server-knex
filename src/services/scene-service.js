const SceneService = {
  getById(knex, id) {
    return knex
      .select('sprite_url')
      .from('sprites')
      .innerJoin('categories_sprites')
      .where('sprite_id', id)
      
  }
};

module.exports = SpritesService;


// select sprite_url from sprites 
// inner join categories_sprites 
// on sprites.sprite_id = categories_sprites.sprite_id 
// where categories_sprites.category_id = 1