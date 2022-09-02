'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Reservas.init({
    inicio_fecha: DataTypes.DATE,
    fin_fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reservas',
  });
  return Reservas;
};