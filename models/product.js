'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {

    static associate(models) {
   
    }
  }
  Product.init({
    product_title: DataTypes.STRING,
    product_price: DataTypes.DECIMAL,
    product_description: DataTypes.TEXT,
    product_image: DataTypes.STRING,
    product_rate: DataTypes.DECIMAL,
    product_count: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false,

  });
  return Product;
};