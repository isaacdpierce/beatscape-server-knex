const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');
const { makeTestMusicArray } = require('./soundscapes.fixtures');

describe('Soundscape_music endpoints', function() {
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

  describe('GET /soundscapes', () => {
    context(`Given no soundscapes`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/soundscapes')
          .expect(200, []);
      });
    });

    context('Given there are soundscapes in the database', () => {
      const testMusic = makeTestMusicArray();

      beforeEach('insert soundscape', () => {
        return db.into('soundscape_music').insert(testMusic);
      });

      it('GET /soundscapes responds with 200 and all of the soundscapes', () => {
        return supertest(app)
          .get('/soundscapes')
          .expect(200, testMusic);
      });
    });
  });

  describe('GET soundscapes/:soundscape_id', () => {
    context(`Given no soundscapes`, () => {
      it(`responds with 404`, () => {
        const soundscapeId = 123456;
        return supertest(app)
          .get(`/soundscapes/${soundscapeId}`)
          .expect(404, { error: { message: `Soundscape doesn't exist` } });
      });
    });
    context('Given there are soundscapes in the database', () => {
      const testMusic = makeTestMusicArray();

      beforeEach('insert soundscapes', () => {
        return db.into('soundscape_music').insert(testMusic);
      });

      it('GET /soundscapes/:soundscape_id responds with 200 and the specified soundscape', () => {
        const soundscapeId = 2;
        const expectedSoundscape = testMusic[soundscapeId - 1];
        return supertest(app)
          .get(`/soundscapes/${soundscapeId}`)
          .expect(200, expectedSoundscape);
      });
    });
  });
});
