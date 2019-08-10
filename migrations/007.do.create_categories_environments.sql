CREATE TABLE categories_environments (
    id SERIAL,
    category_id INTEGER NOT NULL REFERENCES categories (category_id) ON UPDATE CASCADE ON DELETE CASCADE,
    environment_id INTEGER NOT NULL REFERENCES environments (environment_id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT categories_environments_pkey PRIMARY KEY (category_id, environment_id)
);