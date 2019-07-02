const { expect } = require('chai');
const knex = require('knex');
const app = require('../src/app');
const { makeTestEnvironmentsArray } = require('./soundscapes.fixtures');

describe('Environments Endpoints', function() {
  let db;

  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
    app.set('db', db);
  });

  after('disconnect from db', () => db.destroy());

  before('clean the table', () => db('environments').truncate());

  afterEach('cleanup', () => db('environments').truncate());

  describe('GET /environments', () => {
    context(`Given no environments`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/environments')
          .expect(200, []);
      });
    });
    context('Given there are environments in the database', () => {
      const testEnvironments = makeTestEnvironmentsArray();

      beforeEach('Insert environments', () => {
        return db.into('environments').insert(testEnvironments);
      });

      it('GET /environments responds with 200 and all of the environments', () => {
        return supertest(app)
          .get('/environments')
          .expect(200, testEnvironments);
      });
    });

    describe('GET environments/:environment_id', () => {
      context(`Given no environments`, () => {
        it(`responds with 404`, () => {
          const environmentId = 123456;
          return supertest(app)
            .get(`/environments/${environmentId}`)
            .expect(404, { error: { message: `Environment doesn't exist` } });
        });
      });
      context('Given there are environments in the database', () => {
        const testEnvironments = makeTestEnvironmentsArray();

        beforeEach('Insert environment', () => {
          return db.into('environments').insert(testEnvironments);
        });

        it('GET /environments/:environment_id responds with 200 and the specified environment', () => {
          const environmentId = 2;
          const expectedEnvironment = testEnvironments[environmentId - 1];
          return supertest(app)
            .get(`/environments/${environmentId}`)
            .expect(200, expectedEnvironment);
        });
      });
    });
  });
});
