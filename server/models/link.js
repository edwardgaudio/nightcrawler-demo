/**
* @module link
* @desc link model
**/
const db = require('../config/db');
const validUrl = require('valid-url');

const Link = db.define('link', {
  href: {
    type: db._Sequelize.STRING,
    validate: {
      isYahoo(value) {
        if (value.includes('yahoo')) {
          throw new Error('No Yahoo!');
        }
      },
      isUrl(value) {
        if (!validUrl.isUri(value)) {
          throw new Error('Not a valid url');
        }
      },
    },
  },
  linkText: {
    type: db._Sequelize.STRING,
    validate: {
      notEmpty: true,
    },
  },
  sourceId: {
    type: db._Sequelize.INTEGER,
    validate: {
      isInt: true,
    },
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
