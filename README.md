# Express Boilerplate!

This is a boilerplate project used for starting new projects!

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment (example.env) file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`


## Migrations

`npm run migrate`

## Seeding

Run to seed sprites list:

`psql -U <username> -d <dbname> -f ./seeds/seed.soundscapes.sql`
`psql -U <username> -d <dbname> -f ./seeds/seed.sprites.sql`
`psql -U <username> -d <dbname> -f ./seeds/seed.environments.sql`
`psql -U <username> -d <dbname> -f ./seeds/seed.categories.sql`
`psql -U <username> -d <dbname> -f ./seeds/seed.categories_soundscapes.sql`
`psql -U <username> -d <dbname> -f ./seeds/seed.categories_sprites.sql`
`psql -U <username> -d <dbname> -f ./seeds/seed.categories_environments.sql`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.


## GET CATEGORY BASED ON SOUNDSCAPE ID

select * from categories 
inner join categories_soundscapes 
on categories.category_id = categories_soundscapes.category_id
where categories_soundscapes.soundscape_id = 1 
limit 1

## GET SPRITES FROM CATEGORY

select sprite_url from sprites 
inner join categories_sprites 
on sprites.sprite_id = categories_sprites.sprite_id 
where categories_sprites.category_id = 1

## GET ENVIRONMENTS FROM CATEGORY

select environment_url from environments 
inner join categories_environments 
on environments.environment_id = categories_environments.environment_id 
where categories_environments.category_id = 1
