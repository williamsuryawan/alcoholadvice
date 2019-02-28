'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlcoholCategory = sequelize.define('AlcoholCategory', {
    categoryName: DataTypes.STRING
  }, {});
  AlcoholCategory.associate = function(models) {
    // associations can be defined here
  };
  return AlcoholCategory;
};