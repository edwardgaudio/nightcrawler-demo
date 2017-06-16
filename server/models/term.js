const db = require('../config/db');

const Term = db.define('term', {
  query: {
    type: db._Sequelize.STRING,
  },
});

module.exports = Term;
