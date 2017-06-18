/**
*  @module htmlProcessorService
*  @desc process html after it has been scraped, every method should follow a
*  pattern, html in, json out
**/
const logger = require('../utils/logger');
const cheerio = require('cheerio');

const htmlProcessorService = {
  processHTMLBodyToLinks(body) {
    const links = [];

    try {
      const $ = cheerio.load(body);

      $('a').each((_, link) => {
        const linkText = $(link).text();
        const href = $(link).attr('href');

        if (!linkText || !href.includes('http')) {
          return;
        }

        links.push({
          link_text: linkText,
          href,
        });
      });

      return links;
    } catch (err) {
      logger.error('htmlProcessorService - processHTMLBodyToLinks', err);
      return [];
    }
  },
};

module.exports = htmlProcessorService;
