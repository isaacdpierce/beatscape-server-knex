const SoundscapesService = {
  getAllSoundscapes(knex) {
    return knex.select('*').from('soundscapes');
  },
  getById(knex, id) {
    return knex
      .select('*')
      .from('soundscapes')
      .where('soundscape_id', id)
      .first();
  },
  insertSoundscape(knex, newSoundscape) {
    return knex
      .insert(newSoundscape)
      .into('soundscapes')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  deleteSoundscape(knex, soundscape_id) {
    return knex
      .from('soundscapes')
      .where({ soundscape_id })
      .delete();
  },
};

module.exports = SoundscapesService;
