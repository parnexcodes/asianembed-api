const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const app = express()

const morganMiddleware = morgan(function (tokens, req, res) {
    return [
        chalk.hex('#34ace0').bold(tokens.method(req, res)),
        chalk.hex('#ffb142').bold(tokens.status(req, res)),
        chalk.hex('#ff5252').bold(tokens.url(req, res)),
        chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
        chalk.yellow(tokens['remote-addr'](req, res)),
        chalk.hex('#fffa65').bold('from ' + tokens.referrer(req, res)),
        chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
        '\n',
    ].join(' ');
});

app.use(morganMiddleware);
require('dotenv').config()

const getDetailRouter = require('./routes/getDetail')
const getMoviesRouter = require('./routes/getMovies')
const getOngoingRouter = require('./routes/getOngoing')
const getPopularRouter = require('./routes/getPopular')
const getRecentRouter = require('./routes/getRecent')
const getRecentKDramaRouter = require('./routes/getRecentKDrama')
const getRecentRawRouter = require('./routes/getRecentRaw')
const homeRouter = require('./routes/home')

app.use('/api/detail', getDetailRouter)
app.use('/api/movies', getMoviesRouter)
app.use('/api/ongoing', getOngoingRouter)
app.use('/api/popular', getPopularRouter)
app.use('/api/recent', getRecentRouter)
app.use('/api/recentkdrama', getRecentKDramaRouter)
app.use('/api/recentraw', getRecentRawRouter)
app.use('*', homeRouter)
 
app.listen(process.env.PORT, () => {
console.log(`App listening on port ${process.env.PORT}`)
})