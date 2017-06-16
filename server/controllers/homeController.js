/**
*  @module homeController
*  @desc home controller
**/

const homeController = {
  index(req, res) {
    return res.render('index');
  },
};

module.exports = homeController;
