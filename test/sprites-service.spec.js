const SpritesService = require('../src/sprites-service');
const knex = require('knex');

describe(`Sprites service object`, function() {
  let db;

  let testSprites = [
    {
      sprite_id: 1,
      sprite_name: 'cafe-2',
      sprite_url: 'https://www.aws.s3.cafe-2',
      category: 'City',
    },
    {
      sprite_id: 2,
      sprite_name: 'cafe-3',
      sprite_url: 'https://www.aws.s3.cafe-3',
      category: 'City',
    },
    {
      sprite_id: 3,
      sprite_name: 'wind-desert-1',
      sprite_url: 'https://www.aws.s3.wind-desert-1',
      category: 'Nature',
    },
  ];

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
  });

  before(() => db('sprites_list').truncate());

  afterEach(() => db('sprites_list').truncate());

  after(() => db.destroy());

  context(`Given 'sprites_list' has data`, () => {
    beforeEach(() => {
      return db.into('sprites_list').insert(testSprites);
    });
    it(`getAllSprites() resolves all articles from 'sprites_list' table`, () => {
      // test that SpritesService.getAllSprites gets data from table
      return SpritesService.getAllSprites(db).then(actual => {
        expect(actual).to.eql(testSprites);
      });
    });

    it(`getById() resolves a sprite by id from 'sprites_list' table`, () => {
      const thirdId = 3;
      const thirdTestSprite = testSprites[thirdId - 1];
      return SpritesService.getById(db, thirdId).then(actual => {
        expect(actual).to.eql({
          sprite_id: thirdId,
          sprite_name: thirdTestSprite.sprite_name,
          sprite_url: thirdTestSprite.sprite_url,
          category: thirdTestSprite.category,
        });
      });
    });

    it(`deleteSprite() removes an Sprite by id from 'sprites_list' table`, () => {
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

  context(`Given 'sprites_list' has no data`, () => {
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
        category: 'Nature',
      };
      return SpritesService.insertSprite(db, newSprite).then(actual => {
        expect(actual).to.eql({
          sprite_id: 1,
          sprite_name: newSprite.sprite_name,
          sprite_url: newSprite.sprite_url,
          category: newSprite.category,
        });
      });
    });
  });
});
