/**
*  @module scrapeService
*  @desc scrape services
**/
const request = require('request');
const cheerio = require('cheerio');
const logger = require('../utils/logger');

const scrapeService = {
  scrapeUrl(url) {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(body);
        logger.info($('a').text()); // Show the HTML for the Google homepage.
      }
    });
  },
};

module.exports = scrapeService;
