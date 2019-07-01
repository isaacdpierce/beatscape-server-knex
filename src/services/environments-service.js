const EnvironmentsService = {
  getAllEnvironments(knex) {
    return knex.select('*').from('environments');
  },
  insertEnvironment(knex, newEnvironment) {
    return knex
      .insert(newEnvironment)
      .into('environments')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex
      .from('environments')
      .select('*')
      .where('environment_id', id)
      .first();
  },
  deleteEnvironment(knex, environment_id) {
    return knex
      .from('environments')
      .where({ environment_id })
      .delete();
  },
};

module.exports = EnvironmentsService;
