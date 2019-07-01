CREATE TYPE sprite_scene AS ENUM (
    'Nature',
    'City',
    'City-Nature'
);

ALTER TABLE sprites
  ADD COLUMN
    scene sprite_scene;