/**
*  @module crawlController
*  @desc crawl controller
**/
const scrapeService = require('../services/scrapeService');
const DEFAULT_URL = 'https://news.ycombinator.com/';

const crawlController = {
  /**
  * @method crawl
  * @param source to crawl, or nothing, default to hacker news
  * @return json, links:[ {link_text,href} ]
  **/
  crawl(req, res) {
    console.log('hitting here');
    // scrapeService.scrapeUrl(DEFAULT_URL);
    return res.status(200).json({
      links: [
        'htttp://stuffff',
        'htttp://stffff',
      ],
    });
  },
};

module.exports = crawlController;
