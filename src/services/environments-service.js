const EnvironmentsService = {
  getAllEnvironments(knex) {
    return knex.select('*').from('environments');
  },
  getById(knex, id) {
    console.log(`Environments Service Called ID is ${id}`);
    return knex
      .select('environment_url')
      .from('environments')
      .innerJoin(
        'categories_environments',
        'environments.environment_id',
        'categories_environments.environment_id'
      )
      .where({ 'categories_environments.category_id': id });
  },
  // TODO - Get working with new db config
  getByCategory(knex, category_id) {
    return knex
      .select('environment_url')
      .from('environments')
      .innerJoin('categories_environments')
      .on(
        'environments.environment_id',
        'categories_environments.environment_id'
      )
      .where('categories_environments.category_id', category_id);
  },

  //   select environment_url from environments
  // inner join categories_environments
  // on environments.environment_id = categories_environments.environment_id
  // where categories_environments.category_id = 1
  insertEnvironment(knex, newEnvironment) {
    return knex
      .insert(newEnvironment)
      .into('environments')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteEnvironment(knex, environment_id) {
    return knex
      .from('environments')
      .where({ environment_id })
      .delete();
  },
};

module.exports = EnvironmentsService;
