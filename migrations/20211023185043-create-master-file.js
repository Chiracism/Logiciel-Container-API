'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MasterFiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      number: {
        type: Sequelize.STRING
      },
      pays_id: {
        type: Sequelize.STRING
      },
      type_conteneur_id: {
        type: Sequelize.STRING
      },
      taille_conteneur_id: {
        type: Sequelize.STRING
      },
      materiel_id: {
        type: Sequelize.STRING
      },
      proprietaire_id: {
        type: Sequelize.STRING
      },
      etat_conteneur_id: {
        type: Sequelize.STRING
      },
      constructeur: {
        type: Sequelize.STRING
      },
      date_fabrication: {
        type: Sequelize.DATE
      },
      date_entrer_service: {
        type: Sequelize.DATE
      },
      date_derniere_inspection: {
        type: Sequelize.DATE
      },
      valeur_assuree: {
        type: Sequelize.FLOAT
      },
      devise_id: {
        type: Sequelize.STRING
      },
      societe_inspection: {
        type: Sequelize.STRING
      },
      dernier_constat: {
        type: Sequelize.STRING
      },
      site_id: {
        type: Sequelize.STRING
      },
      sous_site_id: {
        type: Sequelize.STRING
      },
      date_mouvement: {
        type: Sequelize.DATE
      },
      observation: {
        type: Sequelize.STRING
      },
      client: {
        type: Sequelize.STRING
      },
      date_operation: {
        type: Sequelize.DATE
      },
      montant: {
        type: Sequelize.FLOAT
      },
      numero_recu: {
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
    await queryInterface.dropTable('MasterFiles');
  }
};