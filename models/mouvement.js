'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mouvement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mouvement.init({
    number: DataTypes.STRING,
    site: DataTypes.STRING,
    sous_site: DataTypes.STRING,
    date_mouvement: DataTypes.DATE,
    ex_navire: DataTypes.STRING,
    date_arrivee: DataTypes.DATE,
    port: DataTypes.STRING,
    client: DataTypes.STRING,
    etat_conteneur: DataTypes.STRING,
    type_conteneur: DataTypes.STRING,
    size: DataTypes.STRING,
    nombre_conteneur: DataTypes.INTEGER,
    observation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mouvement',
  });
  return Mouvement;
};