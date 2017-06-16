const db = require('../config/db');

const User = db.define('user', {
  email: {
    type: db._Sequelize.STRING,
  },
});

module.exports = User;
