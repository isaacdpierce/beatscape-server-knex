require('dotenv').config();
const knex = require('knex');

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
});

knexInstance
  .select('*')
  .from('soundscape_music_test')
  .then(result => {
    console.log(result);
  });

// Function to search db by search term
// function searchBySoundscapeName(searchTerm) {
//   knexInstance
//     .select('soundscape_name')
//     .from('soundscape_music_test')
//     .where('name', 'ILIKE', `%${searchTerm}%`)
//     .then(result => {
//       console.log(result);
//     });
// }

// searchBySoundscapeName('silk');

// Function to limit results from sprites table
function paginateSprites(page) {
  const spritesPerPage = 10;
  const offset = spritesPerPage * (page - 1);
  knexInstance
    .select('sprite_id', 'sprite_name', 'category', 'url')
    .from('sprites')
    .limit(spritesPerPage)
    .offset(offset)
    .then(result => {
      console.log(result);
    });
}

paginateSprites(2);

console.log('connection successful ');
