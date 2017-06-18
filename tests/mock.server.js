/**
* @desc mock server for controller/view testing
**/
const express = require('express');
const expressNunjucks = require('express-nunjucks');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, '../server/views'));
const njk = expressNunjucks(app, {// eslint-disable-line no-unused-vars
  watch: true,
  noCache: true,
  globals: { appName: 'NightCrawler' },
});

app.use(require('../server/config/routes'));

module.exports = app;
