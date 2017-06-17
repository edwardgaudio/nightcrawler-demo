// const logger = require('../utils/logger');
const router = require('express').Router();// eslint-disable-line
const homeController = require('../controllers/homeController');
const crawlController = require('../controllers/crawlController');
const linkController = require('../controllers/linkController');

// Marker: use this later when user system comes, keep for now, middleware for router
router.use((req, res, next) => {
  // logger.info('Time: ', Date.now());
  next();
});

router.get('/', homeController.index);
router.get('/crawl', crawlController.crawl);
router.post('/links', linkController.addLink);


// Not impimented yet
router.get('/links', linkController.getAllLinks);

module.exports = router;
