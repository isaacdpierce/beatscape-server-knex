const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');
const { makeTestSpritesArray } = require('./soundscapes.fixtures');

describe('Sprites Endpoints', function() {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db('sprites').truncate());

  afterEach('cleanup', () => db('sprites').truncate());

  describe('GET /sprites', () => {
    context(`Given no sprites`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/sprites')
          .expect(200, []);
      });
    });
    context('Given there are sprites in the database', () => {
      const testSprites = makeTestSpritesArray();

      beforeEach('insert sprites', () => {
        return db.into('sprites').insert(testSprites);
      });

      it('GET /sprites responds with 200 and all of the sprites', () => {
        return supertest(app)
          .get('/sprites')
          .expect(200, testSprites);
      });
    });
  });

  describe('GET sprites/:sprite_id', () => {
    context(`Given no sprites`, () => {
      it(`responds with 404`, () => {
        const spriteId = 123456;
        return supertest(app)
          .get(`/sprites/${spriteId}`)
          .expect(404, { error: { message: `Sprite doesn't exist` } });
      });
    });
    context('Given there are sprites in the database', () => {
      const testSprites = makeTestSpritesArray();

      beforeEach('insert sprites', () => {
        return db.into('sprites').insert(testSprites);
      });

      it('GET /sprites/:sprite_id responds with 200 and the specified sprite', () => {
        const spriteId = 2;
        const expectedSprite = testSprites[spriteId - 1];
        return supertest(app)
          .get(`/sprites/${spriteId}`)
          .expect(200, expectedSprite);
      });
    });
  });
});
