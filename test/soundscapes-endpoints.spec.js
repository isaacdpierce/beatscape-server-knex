// const { expect } = require('chai');
// const knex = require('knex');
// const app = require('../src/app');
// const { makeTestMusicArray } = require('./soundscapes.fixtures');

// describe.skip('Soundscape_music endpoints', function() {
//   let db;

//   before('make knex instance', () => {
//     db = knex({
//       client: 'pg',
//       connection: process.env.TEST_DB_URL,
//     });
//     app.set('db', db);
//   });

//   after('disconnect from db', () => db.destroy());

//   before('clean the table', () => db('soundscape_music').truncate());

//   afterEach('cleanup', () => db('soundscape_music').truncate());

//   describe('GET /api/soundscapes', () => {
//     context(`Given no soundscapes`, () => {
//       it(`responds with 200 and an empty list`, () => {
//         return supertest(app)
//           .get('/soundscapes')
//           .expect(200, []);
//       });
//     });

//     context('Given there are soundscapes in the database', () => {
//       const testMusic = makeTestMusicArray();

//       beforeEach('insert soundscape', () => {
//         return db.into('soundscape_music').insert(testMusic);
//       });

//       it('GET /api/soundscapes responds with 200 and all of the soundscapes', () => {
//         return supertest(app)
//           .get('/api/soundscapes')
//           .expect(200, testMusic);
//       });
//     });
//   });
//   describe('GET sprites/:sprite_id', () => {
//     context(`Given no sprites`, () => {
//       it(`responds with 404`, () => {
//         const spriteId = 123456;
//         return supertest(app)
//           .get(`/sprites/${spriteId}`)
//           .expect(404, { error: { message: `Sprite doesn't exist` } });
//       });
//     });
//     context('Given there are sprites in the database', () => {
//       const testSprites = makeTestSpritesArray();

//       beforeEach('insert sprites', () => {
//         return db.into('sprites').insert(testSprites);
//       });

//       it('GET /sprites/:sprite_id responds with 200 and the specified sprite', () => {
//         const spriteId = 2;
//         const expectedSprite = testSprites[spriteId - 1];
//         return supertest(app)
//           .get(`/sprites/${spriteId}`)
//           .expect(200, expectedSprite);
//       });
//     });
//   });
// });
