'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [
        {
          username: 'Denis',
          email: 'denis@test.com',
          shadow_password: '239fjep012e-akg-023g-23g2',
          createdAt: (new Date()).toISOString(),
          updatedAt: (new Date()).toISOString()
        },
        {
          username: 'Max',
          email: 'max@test.com',
          shadow_password: '239fjep012e-akg-023g-23g2',
          createdAt: (new Date()).toISOString(),
          updatedAt: (new Date()).toISOString()
        },
        {
          username: 'Roman',
          email: 'rom@test.com',
          shadow_password: '239fjep012e-akg-023g-23g2',
          createdAt: (new Date()).toISOString(),
          updatedAt: (new Date()).toISOString()
        }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
