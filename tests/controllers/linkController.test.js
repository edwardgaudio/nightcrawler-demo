import request from 'supertest';
import mockServer from '../mock.server';

const GOOD_DATA = {
  link: {
    href: 'http://google.com',
    linkText: 'google',
  },
};
const BAD_DATA_IS_YAHOO = {
  link: {
    href: 'http://yahoo.com',
    linkText: 'xxx',
  },
};
const BAD_DATA_NO_TEXT = {
  link: {
    href: 'http://google.com',
    linkText: '',
  },
};
const BAD_DATA_SOURCE_NOT_NUMERIC = {
  link: {
    href: 'http://google.com',
    linkText: 'google',
    sourceId: 'xxx',
  },
};

const BAD_DATA_SOURCE_INVALID_URL = {
  link: {
    href: 'htALDKSJFWE OW AASDFADFA',
    linkText: 'google',
  },
};

// Marker: Add afterEach to clean up links
describe('/controllers/linkController', () => {
  describe('addLink method', () => {
    test('addLink method with good data returns 200', () => {
      return request(mockServer)
        .post('/links')
        .send(GOOD_DATA)
        .expect(200)
        .then((res) => {
          expect(res.body).toBeTruthy();
        });
    });
    test('addLink method with bad data, yahoo, returns 400', () => {
      return request(mockServer)
        .post('/links')
        .send(BAD_DATA_IS_YAHOO)
        .expect(400);
    });
    test('addLink method with bad data, no text, returns 400', () => {
      return request(mockServer)
        .post('/links')
        .send(BAD_DATA_NO_TEXT)
        .expect(400);
    });
    test('addLink method with bad data, source is not int, returns 400', () => {
      return request(mockServer)
        .post('/links')
        .send(BAD_DATA_SOURCE_NOT_NUMERIC)
        .expect(400);
    });
    test('addLink method with bad data, invalid url, returns 400', () => {
      return request(mockServer)
        .post('/links')
        .send(BAD_DATA_SOURCE_INVALID_URL)
        .expect(400);
    });
    test('addLink method with invalid no params returns 400', () => {
      return request(mockServer)
        .post('/links')
        .expect(400);
    });
  });
});
