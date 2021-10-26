'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reparation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Reparation.init({
    numero: DataTypes.STRING,
    date_derniere_reparation: DataTypes.DATE,
    type_conteneur: DataTypes.STRING,
    taille_conteneur: DataTypes.STRING,
    proprietaire_id: DataTypes.STRING,
    pays_name: DataTypes.STRING,
    taux: DataTypes.FLOAT,
    heure: DataTypes.FLOAT,
    materiel_id: DataTypes.STRING,
    total: DataTypes.FLOAT,
    numero_recu: DataTypes.STRING,
    societe_reparation: DataTypes.STRING,
    societe_location: DataTypes.STRING,
    site: DataTypes.STRING,
    date_derniere_inspection: DataTypes.DATE,
    societe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Reparation',
  });
  return Reparation;
};