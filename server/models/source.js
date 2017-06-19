/**
* @module source
* @desc source model
* @todo don't like including models in models here, might need some top level glue
**/
const db = require('../config/db');
const Link = require('./link');

const Source = db.define('source', {
  url: {
    type: db._Sequelize.STRING,
  },
  desc: {
    type: db._Sequelize.STRING,
  },
});

Source.hasMany(Link, {
  foreignKey: 'sourceId',
  constraints: false,
});

module.exports = Source;
