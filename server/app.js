// Get environment variable from .env file
require('dotenv').config();

const express = require('express');
const expressNunjucks = require('express-nunjucks');
const logger = require('./utils/logger');
const path = require('path');
const bodyParser = require('body-parser');

const isDev = process.env.NODE_ENV === 'development';

const app = express();

// Serve static files
app.use(express.static('public'));

// Set up nunjucks and the view directory, order matters here!
app.set('views', path.join(__dirname, '/views'));
const njk = expressNunjucks(app, {// eslint-disable-line no-unused-vars
  watch: isDev,
  noCache: isDev,
  globals: { appName: 'NightCrawler' },
});

// Parse body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(require('./config/routes'));

app.listen(process.env.PORT, 'localhost', (err) => {
  if (err) {
    logger.error(err);
    return;
  }

  logger.info(`Listening at http://localhost:${process.env.PORT}`);
});
