const UserModel = require('../models/user');

const userService = {
  getUsers() {
    const query = {
      where: {
        id: { $gt: 0 },
      },
      raw: true, // If this isn't set, every query result will be an instance instead of data
    };
    UserModel.findAll(query).then((users) => {
      console.log('In get users function:', users);
      users.map(user => console.log(user));
    }).catch(err => console.log(err));
  },
};

module.exports = userService;
