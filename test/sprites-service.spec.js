const SpritesService = require('../src/services/sprites-service');
const knex = require('knex');
const { makeTestSpritesArray } = require('./soundscapes.fixtures');

describe(`Sprites service object`, function() {
  let db;

  const testSprites = makeTestSpritesArray();

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
  });

  before(() => db('sprites').truncate());

  afterEach(() => db('sprites').truncate());

  after(() => db.destroy());

  context(`Given 'sprites' has data`, () => {
    beforeEach(() => {
      return db.into('sprites').insert(testSprites);
    });
    it(`getAllSprites() resolves all articles from 'sprites' table`, () => {
      // test that SpritesService.getAllSprites gets data from table
      return SpritesService.getAllSprites(db).then(actual => {
        expect(actual).to.eql(testSprites);
      });
    });

    it(`getById() resolves a sprite by id from 'sprites' table`, () => {
      const thirdId = 3;
      const thirdTestSprite = testSprites[thirdId - 1];
      return SpritesService.getById(db, thirdId).then(actual => {
        expect(actual).to.eql({
          sprite_id: thirdId,
          sprite_name: thirdTestSprite.sprite_name,
          sprite_url: thirdTestSprite.sprite_url,
          scene: thirdTestSprite.scene,
        });
      });
    });

    it(`deleteSprite() removes an Sprite by id from 'sprites' table`, () => {
      const spriteId = 3;
      return SpritesService.deleteSprite(db, spriteId)
        .then(() => SpritesService.getAllSprites(db))
        .then(allSprites => {
          // copy the test Sprites array without the "deleted" Sprite
          const expected = testSprites.filter(
            sprite => sprite.sprite_id !== spriteId
          );
          expect(allSprites).to.eql(expected);
        });
    });
  });

  context(`Given 'sprites' has no data`, () => {
    it(`getAllArticles() resolves an empty array`, () => {
      return SpritesService.getAllSprites(db).then(actual => {
        expect(actual).to.eql([]);
      });
    });
    it(`insertSprite() inserts a new sprite and resolves the new sprite with an 'id'`, () => {
      const newSprite = {
        sprite_id: 1,
        sprite_name: 'wind-desert-6',
        sprite_url: 'https://www.aws.s3.wind-desert-6',
        scene: 'Nature',
      };
      return SpritesService.insertSprite(db, newSprite).then(actual => {
        expect(actual).to.eql({
          sprite_id: 1,
          sprite_name: newSprite.sprite_name,
          sprite_url: newSprite.sprite_url,
          scene: newSprite.scene,
        });
      });
    });
  });
});
