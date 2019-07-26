INSERT INTO categories
( category_name )

VALUES
('city'), 
('city-new-york'),
('city-tokyo'), 
('rural'),
('nature'),
('nature-winter'),
('desert'),
('ocean');

-- soundscape/1

-- there may be multiple soundscapes that reference a category
-- A single soundscape will only reference 1 category
-- Needs to be able to reference more than 1 soundscape 
