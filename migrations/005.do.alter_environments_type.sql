CREATE TYPE environment_scene AS ENUM (
    'Nature',
    'Wind',
    'Rain',
    'Water',
    'Trees',
    'Desert',
    'City',
    'Tokyo',
    'New-York'
);

ALTER TABLE environments
  ADD COLUMN
    scene environment_scene;