# asianembed-api
 A rest api which scrapes data from asianembed or asianload. Made using NodeJS, Express and Cheerio.

## Setup

```npm install```

Rename ```.env.example``` to ```.env``` and edit.

API_KEY and PORT can be anything.

```node index.js```

## API Endpoints

```/api/recent``` returns recent subbed drama.

```/api/recentraw``` returns recent raw drama.

```/api/recentkdrama``` returns recent kdrama.

```/api/popular``` returns popular drama.

```/api/ongoing``` returns ongoing drama.

```/api/movies``` returns recent movies.

```/api/detail/{id}``` returns details of drama , required parameter is id of drama.

## Made with

**NodeJS , Express and Cheerio**
