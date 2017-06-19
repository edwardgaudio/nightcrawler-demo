/**
* @module link
* @desc link model
**/
const db = require('../config/db');

const Link = db.define('link', {
  href: {
    type: db._Sequelize.STRING,
  },
  linkText: {
    type: db._Sequelize.STRING,
  },
  sourceId: {
    type: db._Sequelize.INTEGER,
  },
}, {
  indexes: [
    {
      name: 'source_index',
      fields: ['sourceId'],
    },
  ],
});

module.exports = Link;
