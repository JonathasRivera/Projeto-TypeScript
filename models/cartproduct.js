'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
   
    static associate(models) {
      
    }
  }
  CartProduct.init({
    cart_products_quantity: DataTypes.INTEGER,
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CartProduct',
    timestamps: false,
  });
  return CartProduct;
};