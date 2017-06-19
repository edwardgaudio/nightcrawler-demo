/**
* @module sentiment
* @desc sentiment model
**/
/* eslint-disable new-cap */

const db = require('../config/db');
const Source = require('./source');
const Link = require('./link');

const Sentiment = db.define('sentiment', {
  resourceId: {
    type: db._Sequelize.BIGINT,
  },
  resource: {
    type: db._Sequelize.ENUM('link', 'source'),
  },
  score: {
    type: db._Sequelize.FLOAT,
  },
}, {
  indexes: [
    {
      name: 'resources',
      fields: ['resource', 'resourceId'],
    },
  ],
});

Source.hasMany(Sentiment, {
  foreignKey: 'resourceId',
  constraints: false,
  scope: {
    resource: 'source',
  },
});

Sentiment.belongsTo(Source, {
  foreignKey: 'resourceId',
  constraints: false,
  as: 'source',
});

Link.hasMany(Sentiment, {
  foreignKey: 'resourceId',
  constraints: false,
  scope: {
    resource: 'link',
  },
});

Sentiment.belongsTo(Link, {
  foreignKey: 'resourceId',
  constraints: false,
  as: 'link',
});

module.exports = Sentiment;
