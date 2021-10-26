'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Surestaries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      surestarie_date: {
        type: Sequelize.DATE
      },
      numero: {
        type: Sequelize.STRING
      },
      ex_navire: {
        type: Sequelize.STRING
      },
      date_arrivee: {
        type: Sequelize.DATE
      },
      client: {
        type: Sequelize.STRING
      },
      port: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      nombre_conteneur: {
        type: Sequelize.INTEGER
      },
      restitution_date: {
        type: Sequelize.DATE
      },
      caution_versee: {
        type: Sequelize.FLOAT
      },
      nls: {
        type: Sequelize.STRING
      },
      ls_date: {
        type: Sequelize.DATE
      },
      choix_type: {
        type: Sequelize.STRING
      },
      detention: {
        type: Sequelize.INTEGER
      },
      surestarie_duree: {
        type: Sequelize.INTEGER
      },
      surestaries_duree: {
        type: Sequelize.INTEGER
      },
      frais: {
        type: Sequelize.FLOAT
      },
      facturer: {
        type: Sequelize.FLOAT
      },
      rembourser: {
        type: Sequelize.FLOAT
      },
      total: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Surestaries');
  }
};