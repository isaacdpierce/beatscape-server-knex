CREATE TYPE sprite_scene AS ENUM (
    'nature',
    'city',
    'city-nature'
);

ALTER TABLE sprites
  ADD COLUMN
    scene sprite_scene;