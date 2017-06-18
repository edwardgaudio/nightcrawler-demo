import request from 'supertest';
import mockServer from '../mock.server';

describe('/controllers/crawlController', () => {
  describe('crawl method', () => {
    test('crawl method returns 200', () => {
      return request(mockServer)
        .get('/crawl')
        .expect(200)
        .then((res) => {
          expect(res.body.links).toBeTruthy();
          expect(typeof res.body.links).toBe('object');
        });
    });
  });
});
