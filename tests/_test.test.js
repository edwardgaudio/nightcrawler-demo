//Test that the tests work
const _test = require('./_test');

test('adds 1 + 2 to equal 3', () => {
  expect(_test(1, 2)).toBe(3);
});
