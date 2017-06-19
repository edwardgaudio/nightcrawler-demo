/* eslint-disable */
const normalizedPath = require('path').join(__dirname, '../server/models');
const logger = require('../server/utils/logger');

const Interest = require(`${normalizedPath}/interest`);
const Link = require(`${normalizedPath}/link`);
const Sentiment = require(`${normalizedPath}/sentiment`);
const Source = require(`${normalizedPath}/source`);

Interest.create({
  name:'higher education',
  desc:'College life, etc',
});

// "Olde-fashion" Promises here
Source.create({
  url:'http://blog.admithub.com/',
  desc:'The AdmitHub Blog'
})
.then(source =>{
  Sentiment.create({
    resourceId:source.get('id'),
    resource:'source',
    score:1.0,
  });
  logger.info('Source plain:', source.get({'plain':true}));
  return Link.create({
    linkText:'AdmitHub Blog',
    href:'http://blog.admithub.com/',
    sourceId:source.get('id'),
  });
})
.then(link =>{
  logger.info('Link plain:', link.get({'plain':true}));
  return Sentiment.create({
    resourceId:link.get('id'),
    resource:'link',
    score:1.0,
  });
})
.then(sentiment =>{
  logger.info('Sentiment plain:', sentiment.get({'plain':true}));
}).catch(e => {
  logger.info('Some kind of error here', e);
});
