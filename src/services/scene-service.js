const SceneService = {
  getById(knex, id) {
    console.log(`Scene Service Called ID is ${id}`);
    return knex
      .select('environment_url')
      .from('environments')
      .innerJoin(
        'categories_environments',
        'environments.environment_id',
        'categories_environments.environment_id'
      )
      .where({ 'categories_environments.category_id': id })
      .unionAll([
        knex
          .select('sprite_url')
          .from('sprites')
          .innerJoin(
            'categories_sprites',
            'sprites.sprite_id',
            'categories_sprites.sprite_id'
          )
          .where({ 'categories_sprites.category_id': id })
    
      ]);
  }
};

module.exports = SceneService;


// select sprite_url from sprites 
// inner join categories_sprites 
// on sprites.sprite_id = categories_sprites.sprite_id 
// where categories_sprites.category_id = 1