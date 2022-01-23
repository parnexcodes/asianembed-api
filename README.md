# asianembed-api
 A rest api which scrapes data from asianembed or asianload. Made using NodeJS, Express and Cheerio.

## Setup

```npm install```

Rename ```.env.example``` to ```.env``` and edit.

API_KEY and PORT can be anything.

```node index.js```

## API Endpoints

```/api/recent?api_key={your_api_key}``` returns recent subbed drama.

```/api/recentraw?api_key={your_api_key}``` returns recent raw drama.

```/api/recentkdrama?api_key={your_api_key}``` returns recent kdrama.

```/api/popular?api_key={your_api_key}``` returns popular drama.

```/api/ongoing?api_key={your_api_key}``` returns ongoing drama.

```/api/movies?api_key={your_api_key}``` returns recent movies.

```/api/detail/{id}?api_key={your_api_key}``` returns details of drama , required parameter is id of drama.

## Made with

**NodeJS , Express and Cheerio**
