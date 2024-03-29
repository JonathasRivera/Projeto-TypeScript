'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

    }
  }
  User.init({
    user_email: DataTypes.STRING,
    user_username: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_name: DataTypes.STRING,
    user_phone: DataTypes.STRING,
    user_city: DataTypes.STRING,
    user_street: DataTypes.STRING,
    user_number: DataTypes.INTEGER,
    user_cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });
  return User;
};