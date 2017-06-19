/**
*  @module linkController
*  @desc link controller, not yet implimented
**/
const logger = require('../utils/logger');
const Link = require('../models/link');

const linkController = {
  getAllLinks(req, res) {
    return res.status(501);
  },
  async addLink(req, res) {
    console.log('req.body',req.body);
    if (!req.body || !req.body.link) {
      return res.status(400).send('Missing Params');
    }
    try {
      const link = await Link.create(req.body.link);
      return res.status(200).json(link.get({ plain: true }));
    } catch (e) {
      logger.error('linkController-addLink:', e);
      return res.status(400).send('Invalid Params');
    }
  },
};

module.exports = linkController;
