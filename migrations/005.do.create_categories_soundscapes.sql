CREATE TABLE categories_soundscapes (
    id SERIAL,
    category_id INTEGER NOT NULL REFERENCES categories (category_id) ON UPDATE CASCADE ON DELETE CASCADE,
    soundscape_id INTEGER NOT NULL REFERENCES soundscapes (soundscape_id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT categories_soundscapes_pkey PRIMARY KEY (category_id, soundscape_id)
);