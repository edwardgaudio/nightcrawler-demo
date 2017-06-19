
const htmlProcessorService = require('../../server/services/htmlProcessorService');

const GOOD_HTML = `<body><a href="http://google.com">gogo</a>`;
const BAD_HTML = `<body>URG, I'M ANGRY, I came from microsoft word/`;

describe('/services/htmlProcessorService', () => {
  describe('processHTMLBodyToLinks method', () => {
    test('Service with good input', () => {
      const links = htmlProcessorService.processHTMLBodyToLinks(GOOD_HTML);
      expect(links.length).toEqual(1);
    });
    test('Service with bad input', () => {
      const links = htmlProcessorService.processHTMLBodyToLinks(BAD_HTML);
      expect(links.length).toEqual(0);
    });
  });
});
