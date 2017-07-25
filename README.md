# Nightcrawler

Crawling the web at night.
Maintainer, Owner, PM: Edward D. Gaudio - [edg.audio](http:edg.audio.com)

Demo for job applications.

### Overview

##### Basic Features:
  - React + Redux
  - Babel 6 w/ basic presets and transform
  - Webpack
  - Express development server
  - Sequelize - PostGres
  - Eslint w/ basic configs(AirBnb based)
  - Jest for Testing
  - Nunjucks Templates
  - Sass

***

### Requirements
  - `node 8.0.0` and higher! Wanted to use full set of ES6 features without Babel
  - postgres database
***

### Usage

##### Getting Started:
- Make sure you have Postgres up and running
- Make a .env file, top level, with the following configurations
```
DB_HOST=your_localhost
DB_USER=your_user
DB_PASS=your_pass
DB_NAME=your_db_name
PORT=your_port
```
- Run `npm run db-shema`
- Run `npm run db-seed`
- Build `npm run build`
- Test if you feel so inclined `npm test`
- Run the server `npm start`
- Watch is not hooked up on npm start yet, probably should run ``

***

##### Next Steps & Other Notes:

***

### Style Guide

AirBnb style guide, 90% followed

Learn more here: [AirBnb Style Guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

***
