const db = require('../config/db');

const Sentiment = db.define('sentiment', {
  type_id: {
    type: db._Sequelize.BIGINT,
  },
  type: {
    type: db._Sequelize.STRING,
  },
  score: {
    type: db._Sequelize.FLOAT,
  },
});

module.exports = Sentiment;
