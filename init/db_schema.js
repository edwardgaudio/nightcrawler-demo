
const normalizedPath = require('path').join(__dirname, '../server/models');
const Interest = require(`${normalizedPath}/interest`);
const Link = require(`${normalizedPath}/link`);
const Sentiment = require(`${normalizedPath}/sentiment`);
const Source = require(`${normalizedPath}/source`);

Interest.sync({ force: true });
Link.sync({ force: true });
Source.sync({ force: true });
Sentiment.sync({ force: true });

/**
Very basic script to use sequelize to establish the schema
// had to get more specific than below
require('fs').readdirSync(normalizedPath).forEach((file) => {
  require(`${normalizedPath}/${file}`)
});
**/
