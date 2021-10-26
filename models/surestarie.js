'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Surestarie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Surestarie.init({
    surestarie_date: DataTypes.DATE,
    numero: DataTypes.STRING,
    ex_navire: DataTypes.STRING,
    date_arrivee: DataTypes.DATE,
    client: DataTypes.STRING,
    port: DataTypes.STRING,
    size: DataTypes.STRING,
    nombre_conteneur: DataTypes.INTEGER,
    restitution_date: DataTypes.DATE,
    caution_versee: DataTypes.FLOAT,
    nls: DataTypes.STRING,
    ls_date: DataTypes.DATE,
    choix_type: DataTypes.STRING,
    detention: DataTypes.INTEGER,
    surestarie_duree: DataTypes.INTEGER,
    surestaries_duree: DataTypes.INTEGER,
    frais: DataTypes.FLOAT,
    facturer: DataTypes.FLOAT,
    rembourser: DataTypes.FLOAT,
    total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Surestarie',
  });
  return Surestarie;
};