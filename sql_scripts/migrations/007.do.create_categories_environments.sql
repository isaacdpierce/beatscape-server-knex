CREATE TABLE categories_environments (
    id BIGSERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL,
    environment_id INTEGER NOT NULL
);