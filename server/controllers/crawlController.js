/**
*  @module crawlController
*  @desc crawl controller
**/
const crawlService = require('../services/crawlService');

const crawlController = {
  crawl(req, res) {
    crawlService.crawl();
    return res.send('Crawl...');
  },
};

module.exports = crawlController;
