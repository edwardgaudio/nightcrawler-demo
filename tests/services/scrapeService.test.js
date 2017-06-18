
const scrapeService = require('../../server/services/scrapeService');

// I realize that the status of one of these three uri might change and
// screw up these test some day, but I'm willing to gamble.
const GOOD_URI = 'http://google.com';
const BAD_URI = 'http://newsSDF.ycombinaLKJLKJLADJFLKAJSDFtor.com/';
const STATUS_404_URI = 'https://github.com/blajalkdsklasdjfkjlljkljkljkj;jkl;kjoiuioiuiouoiuiouou';

describe('/services/scrapeService', () => {
  describe('scrapeUrl method', () => {
    test('Service with status 200 url', async () => {
      const response = await scrapeService.scrapeUrl(GOOD_URI);
      expect(response.statusCode).toEqual(200);
      expect(response.readyForProcessing).toBe(true);
    });
    test('Service with completely invalid url', async () => {
      const response = await scrapeService.scrapeUrl(BAD_URI);
      expect(response.readyForProcessing).toBeFalsy();
    });
    test('Service with 404 url', async () => {
      const response = await scrapeService.scrapeUrl(STATUS_404_URI);
      expect(response.readyForProcessing).toBeFalsy();
    });
  });
});
