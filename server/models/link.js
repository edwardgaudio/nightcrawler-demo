const db = require('../config/db');

const Link = db.define('link', {
  href: {
    type: db._Sequelize.STRING,
  },
  link_text: {
    type: db._Sequelize.STRING,
  },
});

module.exports = Link;
