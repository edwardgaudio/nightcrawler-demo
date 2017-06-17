
const logger = {
  info() {
    console.log('Info:',...arguments); // eslint-disable-line
  },
  error() {
    if (process.env.NODE_ENV !== 'test') {
      console.log('Error:',...arguments); // eslint-disable-line
    }
  },
  fatal() {
    console.log('Fatal:',...arguments); // eslint-disable-line
    process.exit();
  },
};

module.exports = logger;
