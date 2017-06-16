
const normalizedPath = require('path').join(__dirname, '../server/models');

/**
Very basic script to use sequelize to establish the schema
**/
require('fs').readdirSync(normalizedPath).forEach((file) => {
  require(`${normalizedPath}/${file}`).sync({ force: true });
});
