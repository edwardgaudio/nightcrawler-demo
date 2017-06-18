/**
*  @module crawlController
*  @desc crawl controller
**/
const logger = require('../utils/logger');
const scrapeService = require('../services/scrapeService');
const htmlProcessorService = require('../services/htmlProcessorService');

const DEFAULT_URL = 'https://news.ycombinator.com/';

const crawlController = {
  /**
  * @method crawl
  * @param source/url to crawl, or nothing, default to hacker news
  * @return type:json { links:[ {link_text,href} ] }
  **/
  async crawl(req, res) {
    try {
      const { body } = await scrapeService.scrapeUrl(req.query.url || DEFAULT_URL);
      const links = htmlProcessorService.processHTMLBodyToLinks(body);
      return res.status(200).json({ links });
    } catch (err) {
      logger.error('crawlController-crawl', err);
      return res.status(500).send('crawl err');
    }
  },
};

module.exports = crawlController;
