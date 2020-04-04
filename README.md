# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

# Enviroment config.
```.env
HOST=0.0.0.0
```

## Setup

run `npm install`.

### Migrations
Run the following command to run startup migrations.

```js
adonis migration:run
```

### Dev enviroment

```bash
docker-compose up
```

or manually clone the repo and then 
