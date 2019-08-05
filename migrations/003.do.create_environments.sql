CREATE TABLE environments (
  environment_id SERIAL PRIMARY KEY,
  environment_url TEXT NOT NULL,
  scene TEXT NOT NULL
);