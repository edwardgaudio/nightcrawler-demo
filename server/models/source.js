const db = require('../config/db');

const Source = db.define('source', {
  url: {
    type: db._Sequelize.STRING,
  },
  desc: {
    type: db._Sequelize.STRING,
  },
});

module.exports = Source;
