const db = require('../config/db');

const Vertical = db.define('vertical', {
  name: {
    type: db._Sequelize.STRING,
  },
  desc: {
    type: db._Sequelize.STRING,
  },
});

module.exports = Vertical;
