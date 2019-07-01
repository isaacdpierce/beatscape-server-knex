const SoundscapesService = {
  getAllSoundscapes(knex) {
    return knex.select('*').from('soundscape_music');
  },
  insertSoundscape(knex, newSoundscape) {
    return knex
      .insert(newSoundscape)
      .into('soundscape_music')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },
  getById(knex, id) {
    return knex
      .from('soundscape_music')
      .select('*')
      .where('soundscape_id', id)
      .first();
  },
  deleteSoundscape(knex, soundscape_id) {
    return knex
      .from('soundscape_music')
      .where({ soundscape_id })
      .delete();
  },
};

module.exports = SoundscapesService;
