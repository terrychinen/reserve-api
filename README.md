# RESERVE API

This is an example of a room reservation rest api built with NestJS.

## Installation
Install dependencies with npm.

```sh
npm install
```

## Libraries used
- @nestjs/config
- @nestjs/typeorm
- typeorm
- class-validators
- class-transformer
- pg

## Environment variables
Create a .env file in the root of the project and add these properties with their respective values.

```sh
DATABASE_TYPE=postgres
DATABASE_HOST=localhost
DATABASE_PORT=port
DATABASE_NAME=reserve_db
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=password
DATABASE_AUTOLOADENTITIES=true
DATABASE_SYNCHRONIZE=true
NEST_PORT=3000
```

## Docker
Create a docker-compose file in the root of the project and add this properties with values

```sh
version: '3'
  services:
    db:
      image: postgres:14.3
      restart: always
      ports:
        - 5433:5432
      environment:
        POSTGRES_PASSWORD: ${DATABASE_PASSWORD}
        POSTGRES_DB: ${DATABASE_NAME}
      container_name: reservedb
      volumes:
        - ./postgres:/var/lib/postgresql/data
```

## Run
To run the nestjs project, first we need to run the following code.
```sh
docker-compose up -d
```

Finally we need to run the project
```sh
npm run start
or
npm run start:dev
```
