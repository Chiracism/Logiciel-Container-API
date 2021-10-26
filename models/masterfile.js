'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MasterFile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MasterFile.init({
    number: DataTypes.STRING,
    pays_id: DataTypes.STRING,
    type_conteneur_id: DataTypes.STRING,
    taille_conteneur_id: DataTypes.STRING,
    materiel_id: DataTypes.STRING,
    proprietaire_id: DataTypes.STRING,
    etat_conteneur_id: DataTypes.STRING,
    constructeur: DataTypes.STRING,
    date_fabrication: DataTypes.DATE,
    date_entrer_service: DataTypes.DATE,
    date_derniere_inspection: DataTypes.DATE,
    valeur_assuree: DataTypes.FLOAT,
    devise_id: DataTypes.STRING,
    societe_inspection: DataTypes.STRING,
    dernier_constat: DataTypes.STRING,
    site_id: DataTypes.STRING,
    sous_site_id: DataTypes.STRING,
    date_mouvement: DataTypes.DATE,
    observation: DataTypes.STRING,
    client: DataTypes.STRING,
    date_operation: DataTypes.DATE,
    montant: DataTypes.FLOAT,
    numero_recu: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MasterFile',
  });
  return MasterFile;
};