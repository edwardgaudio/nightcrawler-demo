/**
* @module interest
* @desc interest model
**/

const db = require('../config/db');

const Interest = db.define('interest', {
  name: {
    type: db._Sequelize.STRING,
  },
  desc: {
    type: db._Sequelize.STRING,
  },
  semantic: {
    type: db._Sequelize.STRING,
  },
});

module.exports = Interest;
