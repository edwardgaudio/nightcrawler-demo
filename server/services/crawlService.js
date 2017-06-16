/**
*  @module crawlService
*  @desc crawl services
**/
const request = require('request');
const cheerio = require('cheerio');
const logger = require('../utils/logger');

const DEFAULT_START_URL = 'https://news.ycombinator.com/';

const crawlService = {
  crawl() {
    request(DEFAULT_START_URL, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const $ = cheerio.load(body);
        logger.info($('.story-text').text()); // Show the HTML for the Google homepage.
      }
    });
  },
};

module.exports = crawlService;
