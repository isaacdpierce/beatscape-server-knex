CREATE TABLE environments (
  environment_id SERIAL PRIMARY KEY,
  environment_url TEXT NOT NULL,
  setting TEXT NOT NULL
);