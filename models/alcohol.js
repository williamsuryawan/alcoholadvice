'use strict';
module.exports = (sequelize, DataTypes) => {
  const Alcohol = sequelize.define('Alcohol', {
    alcoholName: DataTypes.STRING,
    body: DataTypes.STRING,
    taste: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER
  }, {});
  Alcohol.associate = function(models) {
    // associations can be defined here
    Alcohol.belongsToMany(models.User, {through: models.UserAlcohol})
  };
  return Alcohol;
};