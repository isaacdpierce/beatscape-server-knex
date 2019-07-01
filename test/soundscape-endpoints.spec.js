const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');
const { makeTestMusicArray } = require('./articles.fixtures');

// TODO: make real GET /soundscapes and GET /soundscape/:id endpoint in app.js
// TODO: remove skip
describe.skip('Soundscape_music endpoints', function() {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db('soundscape_music').truncate());

  afterEach('cleanup', () => db('soundscape_music').truncate());

  context('Given there are soundscape in the database', () => {
    const testMusic = makeTestMusicArray();

    beforeEach('insert soundscape', () => {
      return db.into('soundscape_music').insert(testMusic);
    });

    it('GET /soundscapes responds with 200 and all of the soundscapes', () => {
      return supertest(app)
        .get('/soundscapes')
        .expect(200);
      // TODO: dd more assertions about the body
    });
  });
});
