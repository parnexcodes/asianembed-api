const axios = require('axios');
const cheerio = require('cheerio');
const e = require('express');
const express = require('express')
require('dotenv').config()

const apiKey = process.env.API_KEY
const router = express.Router();

router.get('/', async (req, res) => {
    let api_key = req.query.api_key
    if (api_key != apiKey) {
        return res.send({response: 'Invalid API Key!'})
    }
    else {
        try {
            const getMovies = async () => {
                try {
                    let page = req.query.page
                    if (!page) {
                        page = 1
                    }
                    const siteUrl = `https://asianembed.io/movies?page=${page}`
                    const { data } = await axios.get(siteUrl)
                    const $ = cheerio.load(data)
                    let dataArr = []
                    const elem = $('ul.listing.items')
                    $(elem).find('li').each((index, element) => {
                        let link = $(element).find('a').attr('href')
                        let id = link.replace('/videos/', '')
                        let poster = $(element).find('div.picture > img').attr('src')
                        let name = $(element).find('div.picture > img').attr('alt')
                        let posted = $(element).find('div.meta > span.date').text()
                        dataArr.push({
                            id,
                            link,
                            poster,
                            name,
                            posted
                        })
                    })
                    return dataArr
                }
                catch (error) {
                    console.error(error)
                }
            }
            const apiData = await getMovies()
            return res.status(200).json({
                result: apiData,
            })
        } catch (error) {
            return res.status(500).json({
                error: error.toString(),
            })
        }
    }
})

module.exports = router;  