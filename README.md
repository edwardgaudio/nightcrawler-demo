# Nightcrawler

Crawling the web at night.
Maintainer, Owner, PM: Edward D. Gaudio - [edg.audio](http:edg.audio.com)

Originally, this started off as a boilerplate, then I needed something to
show in interviews, so I made this.  Now...I'm thinking bigger.

Let's challenge google through open source.  Crazy right?...but think about it. I know when I joined the tech world, microsoft was the big bad enemy, they owned everything.  In 1995, you couldn't get into computers if you weren't working
on a PC, using micrsoft products and running windows.  People taught "computer classes" that simply
consisted of a review of the basic features of office, powerpoint and excel.  At the time, this had to change, then came
the open source revolution.

Through a slow arduous path we made it from a world of microsoft products to a world essentially based on open-source tech. The servers that run our internet are linux based.  Linux is the golden child of open-source(all praise Linus Torvalds). Open source is the backbone on which the biggest companies today survive and thrive. Google themselves were able to use the open-source tech available to create, or generally facilitate the creation of their giant. At some point power has to get checked.

I don't believe google is evil, they just have grown to a point, due to size and a general mob-like corporate mentality, where they can not control the influence of their product.  Facebook is there too, maybe even more so. It's time to use open-source to slay the giants again.

So let's build something together! I know I'm not the best engineer in the world, but I'd like to invite those who are to
contribute.  I'll work on the tech until it get's above my head, at that point, I'll PM.  I don't want to profit from the technology. Pay me in recognition, I'd be happy with that. Let's just do something that needs to be done.

###What we need

- People, good heads to work on things.
- People who are good at machine learning.  We will need to get there shortly.  I can handle general architecture and
scaling till we get to about 10 mill users.
- Eventually...$$$ for servers.  I'm gonna get this as far as possible for 0 or cheap.  Actually want to also make this
an experiment on how far you can get digitally without spending more than 20$ a month.  I'll put up the 20$.

***

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
