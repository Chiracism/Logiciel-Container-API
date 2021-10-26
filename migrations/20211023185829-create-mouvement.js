'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mouvements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING
      },
      site: {
        type: Sequelize.STRING
      },
      sous_site: {
        type: Sequelize.STRING
      },
      date_mouvement: {
        type: Sequelize.DATE
      },
      ex_navire: {
        type: Sequelize.STRING
      },
      date_arrivee: {
        type: Sequelize.DATE
      },
      port: {
        type: Sequelize.STRING
      },
      client: {
        type: Sequelize.STRING
      },
      etat_conteneur: {
        type: Sequelize.STRING
      },
      type_conteneur: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      nombre_conteneur: {
        type: Sequelize.INTEGER
      },
      observation: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Mouvements');
  }
};