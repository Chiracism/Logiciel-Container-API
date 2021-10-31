'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Chirac Ilunga",
        username: "Chirac Ilunga",
        email: "tshitengailunga@icloud.com",
        password:
          "$2b$10$pUaWvCIKqTCA8W/byi2Z.uEic1TgUCzLYvBIQtGkbaSAu3QBDdPJC",
        mobile: "0825009322",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
