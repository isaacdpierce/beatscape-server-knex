require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

knexInstance
  .select('*')
  .from('soundscape_music')
  .then(result => {
    console.log(result);
  });

// Function to search db by search term
function searchBySoundscapeName(searchTerm) {
  knexInstance
    .select('soundscape_name')
    .from('soundscape_music')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

searchByEnvironmentName('silk');

// Function to search Environments Table by search term
function searchByEnvironmentName(searchTerm) {
  knexInstance
    .select('environment_name', 'environment_url')
    .from('environments_list')
    .where('environment_name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}

searchByEnvironmentName('traffic');

// Function to limit results from sprites table
function paginateSprites(page) {
  const spritesPerPage = 10;
  const offset = spritesPerPage * (page - 1);
  knexInstance
    .select('sprite_name', 'sprite_url', 'category')
    .from('sprites_list')
    .limit(spritesPerPage)
    .offset(offset)
    .then(result => {
      console.log(result);
    });
}

paginateSprites(1);

console.log('connection successful ');
