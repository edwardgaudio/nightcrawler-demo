import request from 'supertest';
import mockServer from '../mock.server';

describe('/controllers/homeController', () => {
  // Marker: This is a good candidate for snapshot testing when things stabilize
  describe('index method', () => {
    test('index method returns 200', () => {
      return request(mockServer)
        .get('/')
        .expect(200)
        .then((res) => {
          expect(res.text).toBeTruthy();
          expect(typeof res.text).toBe('string');
        });
    });
  });
});
