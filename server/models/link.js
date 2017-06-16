const db = require('../config/db');

const Link = db.define('link', {
  href: {
    type: db._Sequelize.STRING,
  },
  text: {
    type: db._Sequelize.STRING,
  },
});

module.exports = Link;
