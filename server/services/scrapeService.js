/**
*  @module scrapeService
*  @desc scrape services, scraping various page types
**/
const rp = require('request-promise-native');
const logger = require('../utils/logger');

const scrapeService = {
  async scrapeUrl(uri) {
    const options = {
      method: 'GET',
      resolveWithFullResponse: true,
      uri,
    };

    try {
      const response = await rp(options);
      if (response.statusCode === 200) {
        response.readyForProcessing = true;
      }
      return response;
    } catch (err) {
      logger.error('scrapeService-scrapeUrl', err);
      return { readyForProcessing: false };
    }
  },
};

module.exports = scrapeService;
