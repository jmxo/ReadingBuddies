# Reading Buddies

A simple SPA and REST API demo that aggregates the book reviews of multiple Goodreads users.

Cloned ES5 version from https://github.com/cgmartin/ReadingBuddies/tree/es5-version then converted the client code to TypeScript, according to the pluralsight course: https://app.pluralsight.com/library/courses/play-by-play-angular-typescript-john-papa-christopher-martin

Fixed issues related to breaking changes of updated gulp plugins (gulp-typescript and gulp-tslint).

```
  +-------------+
  |   Browser   |
  | Angular SPA |
  +------+------+
         |
 +-------+--------+   +-------------+
 | Express Server +---+ Redis Cache |
 +----------------+   +-------------+
         |
 +-------+--------+
 |  Goodreads API |
 +----------------+
```

## Screenshots

![Home page screenshot](./screenshots/home-page-screenshot.png?raw=true "Home page")

![Config page screenshot](./screenshots/config-page-screenshot.png?raw=true "Config page")

## Quick Start

Install and run the dependencies:

* Install [Node.js](https://nodejs.org/en/download/)
* Install and run [Redis](http://redis.io/topics/quickstart), or use the Redis [Docker](http://docs.docker.com/) image: `docker-compose up -d redis`

Configure the application:

1. Request a [Goodreads API Developer Key](https://www.goodreads.com/api/keys)
1. Copy `.env.example` to `.env`
1. Modify `.env` with correct configuration values

Build and run the application:

1. Run `npm install && bower install` to install the app dependencies
1. Run `npm run build` to build the app JS/CSS bundles and static files folder (`./build/`)
1. Run `npm start` to start the http server
1. Open browser: <http://localhost:8000>

Build/refresh upon file changes:

1. Run `npm run develop` for development mode
1. Open browser: <http://localhost:3000>


## License ##

[MIT License](http://cgm.mit-license.org/)  Copyright © 2014 Christopher Martin


