const logger = require('../utils/logger');
const router = require('express').Router();// eslint-disable-line
const homeController = require('../controllers/homeController');
const crawlController = require('../controllers/crawlController');
const userController = require('../controllers/userController');

// Marker: use this later, keep for now, middleware for router
router.use((req, res, next) => {
  logger.info('Time: ', Date.now());
  next();
});

router.get('/', homeController.index);
router.get('/crawl', crawlController.crawl);


//Not impimented yet
router.get('/user', userController.getUser);

module.exports = router;
