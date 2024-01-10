'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate(models) {
      
    }
  }
  Cart.init({
    user_id: DataTypes.INTEGER,
    cart_date: DataTypes.DATE,
    cart_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Cart',
    timestamps: false,
  });
  return Cart;
};