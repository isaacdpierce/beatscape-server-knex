CREATE TABLE environments (
  id BIGSERIAL PRIMARY KEY,
  environment_url TEXT NOT NULL,
  setting TEXT NOT NULL
);