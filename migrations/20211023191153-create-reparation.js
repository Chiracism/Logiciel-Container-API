'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reparations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero: {
        type: Sequelize.STRING
      },
      date_derniere_reparation: {
        type: Sequelize.DATE
      },
      type_conteneur: {
        type: Sequelize.STRING
      },
      taille_conteneur: {
        type: Sequelize.STRING
      },
      proprietaire_id: {
        type: Sequelize.STRING
      },
      pays_name: {
        type: Sequelize.STRING
      },
      taux: {
        type: Sequelize.FLOAT
      },
      heure: {
        type: Sequelize.FLOAT
      },
      materiel_id: {
        type: Sequelize.STRING
      },
      total: {
        type: Sequelize.FLOAT
      },
      numero_recu: {
        type: Sequelize.STRING
      },
      societe_reparation: {
        type: Sequelize.STRING
      },
      societe_location: {
        type: Sequelize.STRING
      },
      site: {
        type: Sequelize.STRING
      },
      date_derniere_inspection: {
        type: Sequelize.DATE
      },
      societe: {
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
    await queryInterface.dropTable('Reparations');
  }
};