CREATE TABLE categories_sprites (
    id SERIAL,
    category_id INTEGER NOT NULL REFERENCES categories (category_id) ON UPDATE CASCADE ON DELETE CASCADE,
    sprite_id INTEGER NOT NULL REFERENCES sprites (sprite_id) ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT categories_sprites_pkey PRIMARY KEY (category_id, sprite_id)
);


-- select s.sprite_url 
-- from sprites as s
-- join categories_sprites cs on cs.category_id = s.sprite_id
-- join categories c on c.category_id = cs.category_id