'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserAlcohol = sequelize.define('UserAlcohol', {
    UserId: DataTypes.INTEGER,
    AlcoholId: DataTypes.INTEGER
  }, {});
  UserAlcohol.associate = function(models) {
    // associations can be defined here
  };
  return UserAlcohol;
};