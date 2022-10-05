# General information

### For the backend, this application uses [NodeJS](https://nodejs.org/en/) + [Express](https://expressjs.com/) + [Typescript](https://www.typescriptlang.org/) + [Typeorm](https://typeorm.io/) as technologies
### For the frontend, this application uses [NextJS](https://nextjs.org/) + [Typescript](https://www.typescriptlang.org/) + [Redux](https://redux.js.org/) (with [Redux-Thunk](https://github.com/reduxjs/redux-thunk) middleware) as technologies


# Requirements
- NodeJS
- NPM
- YARN
- Postgres
### Download Postgresql server from https://www.postgresql.org/download/

### After downloading and installing the server (remember the password that you will set during the installation, as you will need it later), connect to the Postgresql server with your favorite client (you can use the automatically installed PG Admin, but DataGrip is highly recommended)

### Once you're connected to your Postgresql server, create a database, give it a name and set postgres as owner

# How to start project?

### Copy .env.example file under the name of .env and change the values of the environment variables in the file, corresponding to the credentials that you set during the creation of your Postgresql database

### When first starting the project, run these commands in order:
``` shell
yarn
cd client
yarn
cd ..

yarn dev
```
### Or if you're a linux nerd:

``` typescript
yarn && cd client && yarn && cd .. && yarn dev
```

### After doing the above for the first time, every time you want to start the project, you can just run:

```shell
yarn dev
```

# The servers
### The local dev front-end server runs on port 3000 (http://localhost:3000)
### The local dev back-end server runs on port 5000 (http://localhost:5000)

# How to generate TypeORM Migrations?
### To generate TypeORM Migration, use the migrate:generate script defined in the package.json

### Example:
```shell
yarn migrate:generate src/database/migrations/name_of_migration
```

### Note always add the src/database/migrations path prior the name of the migration, or otherwise the migrations won't work.
